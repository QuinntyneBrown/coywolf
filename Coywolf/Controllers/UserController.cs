using Coywolf.Data;
using Coywolf.Dtos;
using Coywolf.Models;
using Coywolf.Services;
using System.Collections.Generic;
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
        [ResponseType(typeof(ICollection<UserDto>))]
        public IHttpActionResult Current() {
            if (!User.Identity.IsAuthenticated)
                return Ok();
            return Ok(_userService.Current(User.Identity.Name));
        }

        protected readonly IUserService _userService;
    }
}
