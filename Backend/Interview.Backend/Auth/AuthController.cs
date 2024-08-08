using Interview.Backend.Auth.Sorface;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace Interview.Backend.Auth;

[ApiController]
[Route("api")]
public class AuthController : ControllerBase
{
    private readonly OAuthServiceDispatcher _oAuthDispatcher;
    private readonly ILogger<AuthController> _logger;
    private readonly SorfacePrincipalValidator _sorfacePrincipalValidator;

    public AuthController(OAuthServiceDispatcher oAuthDispatcher, 
                          ILogger<AuthController> logger, 
                          SorfacePrincipalValidator sorfacePrincipalValidator)
    {
        _oAuthDispatcher = oAuthDispatcher;
        _logger = logger;
        _sorfacePrincipalValidator = sorfacePrincipalValidator;
    }

    [HttpGet("login/{scheme}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(typeof(string), 400)]
    public IResult SignIn(string scheme, [FromQuery] string redirectUri)
    {
        _logger.LogInformation("Start SignIn {scheme}", scheme);
        if (!_oAuthDispatcher.HasAuthService(scheme))
        {
            _logger.LogInformation("Not found service authorization with id {scheme}", scheme);
            return Results.BadRequest($"Not found service authorization with id ${scheme}");
        }

        var redirectUriWithoutFragment = GetDomain(redirectUri);
        var authorizationService = _oAuthDispatcher.GetAuthService(scheme);
        _logger.LogInformation("Get {AuthService} by {scheme}", authorizationService.GetType().Name, scheme);
        if (!authorizationService.AvailableLoginRedirects.Contains(redirectUriWithoutFragment))
        {
            _logger.LogWarning("Redirect link {redirectUri} is not available", redirectUri);
            return Results.BadRequest($"Redirect link {redirectUri} is not available");
        }

        var authenticationProperties = new AuthenticationProperties
        {
            RedirectUri = redirectUri,
        };

        _logger.LogDebug("Before change");
        var signIn = Results.Challenge(authenticationProperties, authenticationSchemes: new List<string> { scheme });
        _logger.LogDebug("After change");
        return signIn;

        static string GetDomain(string uri)
        {
            try
            {
                var typedUri = new Uri(uri);
                return typedUri.Scheme + "://" + typedUri.Authority;
            }
            catch
            {
                return uri;
            }
        }
    }

    [HttpPost("logout")]
    [ProducesResponseType(200)]
    [ProducesResponseType(typeof(string), 400)]
    public ActionResult SignOut()
    {
        return SignOut(CookieAuthenticationDefaults.AuthenticationScheme);
    }

    [Authorize]
    [HttpPost("refresh")]
    [ProducesResponseType(200)]
    [ProducesResponseType(typeof(string), 400)]
    public Task<SorfacePrincipalValidator.Result> RefreshLogin()
    {
        return _sorfacePrincipalValidator.RefreshTokenAsync(HttpContext);
    }
}
