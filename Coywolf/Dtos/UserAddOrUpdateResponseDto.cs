namespace Coywolf.Dtos
{
    public class UserAddOrUpdateResponseDto: UserDto
    {
        public UserAddOrUpdateResponseDto(Coywolf.Models.User entity)
            :base(entity)
        {

        }
    }
}
