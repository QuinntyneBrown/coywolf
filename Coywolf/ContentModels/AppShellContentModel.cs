using Coywolf.Data;
using Coywolf.Services;
using Microsoft.Practices.Unity;

namespace Coywolf.ContentModels
{    
    public class AppShellContentModel: IAppShellContentModel
    {
        [InjectionConstructor]
        public AppShellContentModel(IUow uow, ICacheProvider cacheProvider)
        :this(uow,cacheProvider.GetCache()){}

        public AppShellContentModel(IUow uow, ICache cache)
        {
            _cache = cache;
            _uow = uow;
        }

        public IAppShellContentModel Get()
        {
            var contentModel = new AppShellContentModel(_uow, _cache);
            
            return contentModel;
        }
		
		public ContentModelType ContentModelType { get; set; } = ContentModelType.AppShell;

        protected readonly IUow _uow;
        protected readonly ICache _cache;
    }
}
