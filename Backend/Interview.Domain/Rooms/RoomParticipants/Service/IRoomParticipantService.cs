using Interview.Domain.Rooms.RoomParticipants.Records.Request;
using Interview.Domain.Rooms.RoomParticipants.Records.Response;

namespace Interview.Domain.Rooms.RoomParticipants.Service;

public interface IRoomParticipantService : IService
{
    Task<RoomParticipantDetail> FindByRoomIdAndUserIdAsync(
        RoomParticipantGetRequest request,
        CancellationToken cancellationToken = default);

    Task<RoomParticipantDetail> ChangeStatusAsync(
        RoomParticipantChangeStatusRequest request,
        CancellationToken cancellationToken = default);

    /// <summary>
    /// Adding a new member to a room.
    /// </summary>
    /// <param name="request">Data for adding a new participant to the room.</param>
    /// <param name="cancellationToken">Cancellation Token.</param>
    /// <returns>Data of the new room participant.</returns>
    Task<RoomParticipantDetail> CreateAsync(
        RoomParticipantCreateRequest request,
        CancellationToken cancellationToken = default);
}
