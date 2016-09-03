using Coywolf.Data;
using Coywolf.Dtos;
using Coywolf.Models;
using Coywolf.Services;
using Coywolf.UploadHandlers;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.OutputCache.V2;

namespace Coywolf.Controllers
{
    [Authorize]
    [RoutePrefix("api/digitalAsset")]
    public class DigitalAssetController : ApiController
    {
        public DigitalAssetController(IDigitalAssetService digitalAssetService, IUow uow, ICacheProvider cacheProvider)
        {
            _digitalAssetService = digitalAssetService;
            _uow = uow;
            _repository = uow.DigitalAssets;
            _cache = cacheProvider.GetCache();
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(DigitalAssetAddOrUpdateResponseDto))]
        public IHttpActionResult Add(DigitalAssetAddOrUpdateRequestDto dto) { return Ok(_digitalAssetService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(DigitalAssetAddOrUpdateResponseDto))]
        public IHttpActionResult Update(DigitalAssetAddOrUpdateRequestDto dto) { return Ok(_digitalAssetService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<DigitalAssetDto>))]
        public IHttpActionResult Get() { return Ok(_digitalAssetService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(DigitalAssetDto))]
        public IHttpActionResult GetById(int id) { return Ok(_digitalAssetService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_digitalAssetService.Remove(id)); }


        [AllowAnonymous]
        [Route("upload")]
        [HttpPost]
        public async Task<HttpResponseMessage> Upload(HttpRequestMessage request)
        {
            var digitalAssets = new List<DigitalAsset>();
            try
            {
                if (!Request.Content.IsMimeMultipartContent("form-data"))
                    throw new HttpResponseException(HttpStatusCode.BadRequest);

                var provider = await Request.Content.ReadAsMultipartAsync(new InMemoryMultipartFormDataStreamProvider());

                NameValueCollection formData = provider.FormData;
                IList<HttpContent> files = provider.Files;

                foreach (var file in files)
                {
                    var filename = new FileInfo(file.Headers.ContentDisposition.FileName.Trim(new char[] { '"' })
                        .Replace("&", "and")).Name;
                    Stream stream = await file.ReadAsStreamAsync();
                    var bytes = StreamHelper.ReadToEnd(stream);
                    var photo = new DigitalAsset();
                    photo.FileName = filename;
                    photo.Bytes = bytes;
                    photo.ContentType = System.Convert.ToString(file.Headers.ContentType);
                    _repository.Add(photo);
                    digitalAssets.Add(photo);
                }

                _uow.SaveChanges();
            }
            catch (Exception exception)
            {
                var e = exception;
            }

            return Request.CreateResponse(HttpStatusCode.OK, new DigitalAssetUploadResponseDto(digitalAssets));
        }

        protected readonly IDigitalAssetService _digitalAssetService;        
        protected readonly IRepository<DigitalAsset> _repository;
        protected readonly IUow _uow;
        protected readonly ICache _cache;


    }
}
