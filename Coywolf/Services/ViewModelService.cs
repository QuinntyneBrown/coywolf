using Coywolf.ContentModels;
using System;

namespace Coywolf.Services
{
    class ViewModelService : IViewModelService
    {
        public AppShellContentModel GetAppShell()
        {
            return new AppShellContentModel()
            {
                LogoUrl = "api/digitalasset/serve?name=logo.png"
            };
        }

        public dynamic GetByType(ContentModelType type)
        {
            if (type == ContentModelType.AppShell)
                return GetAppShell();

            throw new NotImplementedException();
        }
    }
}
