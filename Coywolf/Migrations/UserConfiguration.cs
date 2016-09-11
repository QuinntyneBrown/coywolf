using Coywolf.Data;
using Coywolf.Models;
using Coywolf.Services;
using System.Data.Entity.Migrations;

namespace Coywolf.Migrations
{
    public class UserConfiguration
    {
        public static void Seed(DataContext context)
        {
            context.Users.AddOrUpdate(x => x.Username, new User()
            {
                Username = "admin",
                Password = new EncryptionService().TransformPassword("password")
            });
            context.SaveChanges();
        }
    }
}
