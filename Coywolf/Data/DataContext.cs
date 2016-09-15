using Coywolf.Models;
using System.Data.Entity;

namespace Coywolf.Data
{
    public class DataContext: DbContext, IDbContext
    {
        public DataContext()
            : base(nameOrConnectionString: "CoywolfDataContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<ProfessionalService> ProfessionalServices { get; set; }
        public DbSet<DigitalAsset> DigitalAssets { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<PhotoGallery> PhotoGalleries { get; set; }
        public DbSet<HtmlContent> HtmlContents { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        } 
    }
}
