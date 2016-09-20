using System;
using System.Collections.Generic;
using Coywolf.Data;
using Coywolf.Dtos;
using System.Data.Entity;
using System.Linq;
using Coywolf.Models;

namespace Coywolf.Services
{
    public class PhotoGalleryService : IPhotoGalleryService
    {
        public PhotoGalleryService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.PhotoGalleries;
            this.cache = cacheProvider.GetCache();
        }

        public PhotoGalleryAddOrUpdateResponseDto AddOrUpdate(PhotoGalleryAddOrUpdateRequestDto request)
        {
            var entity = GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new PhotoGallery());
            entity.Name = request.Name;
            entity.PhotoGalleryDigitalAssets.Clear();

            foreach(var photo in request.Photos)
            {
                entity.PhotoGalleryDigitalAssets.Add(new PhotoGalleryDigitalAsset() { DigitalAsset = uow.DigitalAssets.GetById(photo.Id) });                
            }

            uow.SaveChanges();
            return new PhotoGalleryAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<PhotoGalleryDto> Get()
        {
            ICollection<PhotoGalleryDto> response = new HashSet<PhotoGalleryDto>();
            var entities = GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new PhotoGalleryDto(entity)); }    
            return response;
        }


        public PhotoGalleryDto GetById(int id)
        {
            return new PhotoGalleryDto(GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public IQueryable<PhotoGallery> GetAll() => repository.GetAll()
            .Include(x => x.PhotoGalleryDigitalAssets)
            .Include("PhotoGalleryDigitalAssets.DigitalAsset");

        protected readonly IUow uow;
        protected readonly IRepository<PhotoGallery> repository;
        protected readonly ICache cache;
    }
}
