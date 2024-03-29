using Interview.Domain.Database;
using Interview.Domain.Invites;
using Interview.Domain.Rooms.Records.Response.Detail;
using Interview.Domain.Rooms.RoomParticipants;
using Interview.Domain.Rooms.RoomParticipants.Service;
using Microsoft.EntityFrameworkCore;

namespace Interview.Domain.Rooms.RoomInvites;

public class RoomInviteService : IRoomInviteService
{
    private readonly AppDbContext _db;
    private readonly IRoomParticipantService _roomParticipantService;

    public RoomInviteService(AppDbContext db, IRoomParticipantService roomParticipantService)
    {
        _db = db;
        _roomParticipantService = roomParticipantService;
    }

    public async Task<RoomInviteDetail> ApplyInvite(
        Guid inviteId,
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        var databaseContextTransaction = await _db.Database.BeginTransactionAsync(cancellationToken);

        var invite = await _db.Invites.Where(invite => invite.Id == inviteId).FirstOrDefaultAsync(cancellationToken);

        if (invite is null)
        {
            throw NotFoundException.Create<Invite>(inviteId);
        }

        if (invite.UsesCurrent >= invite.UsesMax)
        {
            throw new UserException("The invitation has already been used");
        }

        var roomInvite = await _db.RoomInvites
            .Where(roomInviteItem => roomInviteItem.InviteById == inviteId)
            .FirstOrDefaultAsync(cancellationToken);

        if (roomInvite is null)
        {
            throw new NotFoundException("Invite not found for any rooms");
        }

        if (roomInvite.Room is null)
        {
            throw new Exception("The invitation no longer belongs to the room");
        }

        var user = await _db.Users.Where(user => user.Id == userId)
            .FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            throw new NotFoundException("The current user was not found");
        }

        var participant = await _db.RoomParticipants
            .Where(participant => participant.User.Id == userId)
            .FirstOrDefaultAsync(cancellationToken);

        if (participant is null)
        {
            var participants = await _roomParticipantService.CreateAsync(
                new[] { (user, roomInvite.Room, roomInvite.ParticipantType ?? SERoomParticipantType.Viewer) },
                cancellationToken);
            var roomParticipant = participants.First();

            await UpdateInviteLimit(roomInvite, cancellationToken);

            await _db.RoomParticipants.AddAsync(roomParticipant, cancellationToken);

            await _db.SaveChangesAsync(cancellationToken);

            await databaseContextTransaction.CommitAsync(cancellationToken);

            return new RoomInviteDetail
            {
                ParticipantId = roomParticipant.Id,
                ParticipantType = roomParticipant.Type,
                RoomId = roomInvite.Room.Id,
            };
        }

        // await UpdateInviteLimit(roomInvite, cancellationToken);
        await databaseContextTransaction.CommitAsync(cancellationToken);

        return new RoomInviteDetail
        {
            ParticipantId = participant.Id,
            ParticipantType = participant.Type,
            RoomId = roomInvite.Room.Id,
        };
    }

    private async Task UpdateInviteLimit(RoomInvite roomInvite, CancellationToken cancellationToken = default)
    {
        roomInvite.Invite!.UsesCurrent += 1;

        if (roomInvite.Invite!.UsesCurrent < roomInvite.Invite!.UsesMax)
        {
            _db.Invites.Update(roomInvite.Invite);

            await _db.SaveChangesAsync(cancellationToken);

            return;
        }

        var regenerateInvite = new Invite(5);

        _db.Invites.Remove(roomInvite.Invite);

        await _db.Invites.AddAsync(regenerateInvite, cancellationToken);

        var newRoomInvite = new RoomInvite(regenerateInvite, roomInvite.Room!, roomInvite.ParticipantType!);

        await _db.RoomInvites.AddAsync(newRoomInvite, cancellationToken);

        _db.RoomInvites.Remove(roomInvite);

        await _db.SaveChangesAsync(cancellationToken);
    }
}
