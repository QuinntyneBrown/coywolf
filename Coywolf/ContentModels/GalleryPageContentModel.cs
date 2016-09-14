using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class GalleryPageContentModel: IGalleryPageContentModel
    {
        [InjectionConstructor]
        public GalleryPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public GalleryPageContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IGalleryPageContentModel Get()
        {
            var contentModel = new GalleryPageContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.GalleryPage;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
