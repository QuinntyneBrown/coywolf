using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class ServicesPageContentModel: IServicesPageContentModel
    {
        [InjectionConstructor]
        public ServicesPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public ServicesPageContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IServicesPageContentModel Get()
        {
            var contentModel = new ServicesPageContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.ServicesPage;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
