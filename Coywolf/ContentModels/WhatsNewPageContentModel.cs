using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class WhatsNewPageContentModel: IWhatsNewPageContentModel
    {
        [InjectionConstructor]
        public WhatsNewPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public WhatsNewPageContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IWhatsNewPageContentModel Get()
        {
            var contentModel = new WhatsNewPageContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.WhatsNewPage;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
