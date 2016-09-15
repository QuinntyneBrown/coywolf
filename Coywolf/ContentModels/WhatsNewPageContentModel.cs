using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class WhatsNewPageContentModel: IWhatsNewPageContentModel
    {
        [InjectionConstructor]
        public WhatsNewPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public WhatsNewPageContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IWhatsNewPageContentModel Get()
        {
            var contentModel = new WhatsNewPageContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.WhatsNewPage;

        protected readonly ICache _cache;
    }
}
