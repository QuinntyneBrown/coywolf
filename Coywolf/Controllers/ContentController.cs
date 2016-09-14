using Coywolf.ContentModels;
using System.Web.Http;
using System.Web.Http.Description;

namespace Coywolf.Controllers
{
    [RoutePrefix("api/content")]
    public class ContentController: ApiController
    {
        public ContentController(
            IAppShellContentModel appShellContentModel,
            IHomePageContentModel homePageContentModel,
            IGalleryPageContentModel galleryPageContentModel,
            IWhatsNewPageContentModel whatsNewPageContentModel,
            IAboutPageContentModel aboutPageContentModel,
            IServicesPageContentModel servicesPageContentModel,
            IContactPageContentModel contactPageContenlModel
            )
        {
            _appShellContentModel = appShellContentModel;
            _homePageConentModel = homePageContentModel;
            _galleryPageContentModel = galleryPageContentModel;
            _whatsNewPageContentModel = whatsNewPageContentModel;
            _aboutPageContentModel = aboutPageContentModel;
            _servicesPageContentModel = servicesPageContentModel;
            _contactPageContentModel = contactPageContenlModel;
        }

        [Route("appshell")]
        [HttpGet]
        [ResponseType(typeof(IAppShellContentModel))]
        public IHttpActionResult AppShell() => Ok(_appShellContentModel.Get());
        
        [Route("home")]
        [HttpGet]
        [ResponseType(typeof(IHomePageContentModel))]
        public IHttpActionResult Home() => Ok(_homePageConentModel.Get());
        
        [Route("gallery")]
        [HttpGet]
        [ResponseType(typeof(IGalleryPageContentModel))]
        public IHttpActionResult Gallery() => Ok(_galleryPageContentModel.Get());

        [Route("whatsnew")]
        [HttpGet]
        [ResponseType(typeof(IWhatsNewPageContentModel))]
        public IHttpActionResult WhatsNew() => Ok(_whatsNewPageContentModel.Get());
        
        [Route("about")]
        [HttpGet]
        [ResponseType(typeof(IAboutPageContentModel))]
        public IHttpActionResult About() => Ok(_aboutPageContentModel.Get());
        
        [Route("services")]
        [HttpGet]
        [ResponseType(typeof(IServicesPageContentModel))]
        public IHttpActionResult Services() => Ok(_servicesPageContentModel.Get());

        [Route("contact")]
        [HttpGet]
        [ResponseType(typeof(IGalleryPageContentModel))]
        public IHttpActionResult Contact() => Ok(_contactPageContentModel.Get());

        protected readonly IAppShellContentModel _appShellContentModel;
        protected readonly IHomePageContentModel _homePageConentModel;
        protected readonly IGalleryPageContentModel _galleryPageContentModel;
        protected readonly IWhatsNewPageContentModel _whatsNewPageContentModel;
        protected readonly IAboutPageContentModel _aboutPageContentModel;
        protected readonly IServicesPageContentModel _servicesPageContentModel;
        protected readonly IContactPageContentModel _contactPageContentModel;
        
    }
}
