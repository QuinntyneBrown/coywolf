using Coywolf.Models;

namespace Coywolf.Data
{
    public interface IUow
    {
        IRepository<ProfessionalService> ProfessionalServices { get; }
        IRepository<DigitalAsset> DigitalAssets { get; }
        IRepository<PhotoGallery> PhotoGalleries { get; }
        IRepository<User> Users { get; }
        IRepository<Role> Roles { get; }
        IRepository<HtmlContent> HtmlContents { get; }

        void SaveChanges();
    }
}
