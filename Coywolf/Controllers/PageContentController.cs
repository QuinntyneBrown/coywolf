using Coywolf.ContentModels;
using Coywolf.Dtos;
using Coywolf.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;


namespace Coywolf.Controllers
{
    [RoutePrefix("api/pagecontent")]
    public class PageContentController: ApiController
    {
        public PageContentController(IPageContentService pageContentService)
        {
            _pageContentService = pageContentService;
        }

        [Route("appshell")]
        [HttpGet]
        [ResponseType(typeof(AppShellContentModel))]
        public IHttpActionResult AppShell() {
            return Ok();
        }

        [Route("home")]
        [HttpGet]
        [ResponseType(typeof(HomePageContentModel))]
        public IHttpActionResult Home()
        {
            return Ok();
        }

        [Route("gallery")]
        [HttpGet]
        [ResponseType(typeof(GalleryPageContentModel))]
        public IHttpActionResult Gallery()
        {
            return Ok();
        }

        public IPageContentService _pageContentService;
    }
}
