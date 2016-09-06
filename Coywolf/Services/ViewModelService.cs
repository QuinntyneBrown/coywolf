using Coywolf.ViewModels;
using System;

namespace Coywolf.Services
{
    class ViewModelService : IViewModelService
    {
        public AppShellViewModel GetAppShell()
        {
            return new AppShellViewModel()
            {
                LogoUrl = "api/digitalasset/serve?name=logo.png"
            };
        }

        public dynamic GetByType(ViewModelType type)
        {
            if (type == ViewModelType.AppShell)
                return GetAppShell();

            throw new NotImplementedException();
        }
    }
}
