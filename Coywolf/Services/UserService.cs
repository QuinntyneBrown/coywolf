using Coywolf.Data;
using Coywolf.Dtos;
using System.Linq;
using Coywolf.Models;

namespace Coywolf.Services
{
    public class UserService : IUserService
    {
        public UserService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Users;
            _cache = cacheProvider.GetCache();
        }


        public UserDto Current(string username)
        => new UserDto(_repository.GetAll().Single(x => x.IsDeleted == false && x.Username == username));

        
        protected readonly IUow _uow;
        protected readonly IRepository<User> _repository;
        protected readonly ICache _cache;
    }
}
