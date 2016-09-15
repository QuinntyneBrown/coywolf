using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class GalleryPageContentModel: IGalleryPageContentModel
    {
        [InjectionConstructor]
        public GalleryPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public GalleryPageContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IGalleryPageContentModel Get()
        {
            var contentModel = new GalleryPageContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.GalleryPage;

        protected readonly ICache _cache;
    }
}
