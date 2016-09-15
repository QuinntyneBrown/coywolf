using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class HomePageContentModel: IHomePageContentModel
    {
        [InjectionConstructor]
        public HomePageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public HomePageContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IHomePageContentModel Get()
        {
            var contentModel = new HomePageContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.HomePage;

        protected readonly ICache _cache;
    }
}
