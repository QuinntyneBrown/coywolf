namespace Coywolf.Migrations
{
    using System.Data.Entity.Migrations;
    
    internal sealed class Configuration : DbMigrationsConfiguration<Coywolf.Data.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(Coywolf.Data.DataContext context)
        {
            DigitalAssetConfiguration.Seed(context);
            PhotoGalleryConfiguration.Seed(context);
            ProfessionalServiceConfiguration.Seed(context);
            UserConfiguration.Seed(context);
        }
    }
}
