namespace Coywolf.Migrations
{
    using Data;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<DataContext>
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
