using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class ContactPageContentModel: IContactPageContentModel
    {
        [InjectionConstructor]
        public ContactPageContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public ContactPageContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IContactPageContentModel Get()
        {
            var contentModel = new ContactPageContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.ContactPage;

        protected readonly ICache _cache;
    }
}
