using Coywolf.Dtos;
using System.Collections.Generic;

namespace Coywolf.Services
{
    public interface IUserService
    {
        UserDto Current(string username);

    }
}
