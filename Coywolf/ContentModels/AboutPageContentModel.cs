using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class AboutPageContentModel: IAboutPageContentModel
    {
        [InjectionConstructor]
        public AboutPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public AboutPageContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IAboutPageContentModel Get()
        {
            var contentModel = new AboutPageContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.AboutPage;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
