using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class AboutPageContentModel: IAboutPageContentModel
    {
        [InjectionConstructor]
        public AboutPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public AboutPageContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IAboutPageContentModel Get()
        {
            var contentModel = new AboutPageContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.AboutPage;

        protected readonly ICache _cache;
    }
}
