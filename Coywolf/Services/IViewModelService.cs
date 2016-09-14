using Coywolf.ContentModels;

namespace Coywolf.Services
{
    public interface IViewModelService
    {
        AppShellContentModel GetAppShell();
        dynamic GetByType(ContentModelType type);
    }
}
