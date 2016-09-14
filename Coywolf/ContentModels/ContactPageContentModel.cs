using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class ContactPageContentModel: IContactPageContentModel
    {
        [InjectionConstructor]
        public ContactPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public ContactPageContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IContactPageContentModel Get()
        {
            var contentModel = new ContactPageContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.ContactPage;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
