using Coywolf.Dtos;
using Coywolf.Services;
using System.Web.Http;
using System.Web.Http.Description;

namespace Coywolf.Controllers
{
    [Authorize]
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        
        [Route("current")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(UserDto))]
        public IHttpActionResult Current() {
            if (!User.Identity.IsAuthenticated)
                return Ok();
            return Ok(_userService.Current(User.Identity.Name));
        }

        protected readonly IUserService _userService;
    }
}
