using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class ServicesPageContentModel: IServicesPageContentModel
    {
        [InjectionConstructor]
        public ServicesPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public ServicesPageContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IServicesPageContentModel Get()
        {
            var contentModel = new ServicesPageContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.ServicesPage;

        protected readonly ICache _cache;
    }
}
