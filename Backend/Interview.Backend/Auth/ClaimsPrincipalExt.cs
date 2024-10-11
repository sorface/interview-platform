using System.Security.Claims;
using Interview.Backend.Auth.Sorface;

namespace Interview.Backend.Auth;

public static class ClaimsPrincipalExt
{
    public static void EnrichRolesWithId(this ClaimsPrincipal self, User user)
    {
        var newRoles = user.Roles.Select(e => new Claim(ClaimTypes.Role, e.Name.Name));

        var claimIdentity = new ClaimsIdentity(newRoles);

        claimIdentity.AddClaim(new Claim(UserClaimConstants.UserId, user.Id.ToString()));

        self.AddIdentity(claimIdentity);
    }

    public static User? ToUser(this ClaimsPrincipal self)
    {
        var claims = self.Claims;

        var profileId = self.Claims.FirstOrDefault(e => e.Type == "user_id");
        var nickname = self.Claims.FirstOrDefault(e => e.Type == "sub");

        if (profileId == null || nickname == null)
        {
            return null;
        }

        var id = self.Claims.FirstOrDefault(e => e.Type == UserClaimConstants.UserId);

        var user = new User(nickname.Value, profileId.Value);

        if (id != null && Guid.TryParse(id.Value, out var typedId))
        {
            user.Id = typedId;
        }

        var authoritiesClaim = self.Claims.Where(e => e.Type == "roles").Select(it => it.Value);

        foreach (var authority in authoritiesClaim)
        {
            var roleName = RoleName.FromName(authority, true);
            user.Roles.Add(new Role(roleName));
        }

        return user;
    }
}
