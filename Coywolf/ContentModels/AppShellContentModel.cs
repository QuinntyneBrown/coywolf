using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Coywolf.ContentModels
{    
    public class AppShellContentModel: IAppShellContentModel
    {
        [InjectionConstructor]
        public AppShellContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(cacheProvider.GetCache()){}

        public AppShellContentModel(ICache cache)
        {
            _cache = cache;
        }

        public IAppShellContentModel Get()
        {
            var contentModel = new AppShellContentModel(_cache);
            
            return contentModel;
        }
		
		[JsonConverter(typeof(StringEnumConverter))]
		public ContentModelType ContentModelType { get; set; } = ContentModelType.AppShell;

        protected readonly ICache _cache;
    }
}
