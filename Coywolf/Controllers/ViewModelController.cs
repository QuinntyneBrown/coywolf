using Coywolf.Services;
using Coywolf.ContentModels;
using System.Web.Http;
using WebApi.OutputCache.V2;

namespace Coywolf.Controllers
{
    [RoutePrefix("api/viewmodel")]
    public class ViewModelController: ApiController
    {
        public ViewModelController(IViewModelService viewModelService)
        {
            _viewModelService = viewModelService;
        }

        [HttpGet]
        [Route("getByType")]
        [CacheOutput(ClientTimeSpan = 1000, ServerTimeSpan = 1000)]
        public IHttpActionResult GetByType(ContentModelType type)
            => Ok(_viewModelService.GetByType(type));

        protected readonly IViewModelService _viewModelService;
    }
}
