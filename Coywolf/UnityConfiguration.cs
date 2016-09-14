using Coywolf.Configuration;
using Coywolf.ContentModels;
using Coywolf.Data;
using Coywolf.Services;
using Coywolf.Utilities;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.InterceptionExtension;

namespace Coywolf
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer()
        {
            var container = new UnityContainer().AddNewExtension<Interception>();
            container.RegisterType<IDbContext, DataContext>();
            container.RegisterType<IUow, Uow>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ILoggerFactory, LoggerFactory>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<ILogger, Logger>();
            container.RegisterType<IProfessionalServiceService, ProfessionalServiceService>();
            container.RegisterType<IDigitalAssetService, DigitalAssetService>();
            container.RegisterType<IPhotoGalleryService, PhotoGalleryService>();            
            container.RegisterType<IUserService, UserService>();

            container.RegisterType<IAppShellContentModel, AppShellContentModel>();
            container.RegisterType<IHomePageContentModel, HomePageContentModel>();
            container.RegisterType<IGalleryPageContentModel, GalleryPageContentModel>();
            container.RegisterType<IWhatsNewPageContentModel, WhatsNewPageContentModel>();
            container.RegisterType<IServicesPageContentModel, ServicesPageContentModel>();
            container.RegisterType<IAboutPageContentModel, AboutPageContentModel>();
            container.RegisterType<IContactPageContentModel, ContactPageContentModel>();

            container.RegisterInstance(AuthConfiguration.LazyConfig);            
            return container;
        }
    }
}
