using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class HomePageContentModel: IHomePageContentModel
    {
        [InjectionConstructor]
        public HomePageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public HomePageContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IHomePageContentModel Get()
        {
            var contentModel = new HomePageContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.HomePage;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
