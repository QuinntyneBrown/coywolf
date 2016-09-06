using Coywolf.ViewModels;

namespace Coywolf.Services
{
    public interface IViewModelService
    {
        AppShellViewModel GetAppShell();
        dynamic GetByType(ViewModelType type);
    }
}
