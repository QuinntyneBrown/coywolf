using System;
using System.Collections.Generic;
using System.Linq;

namespace Coywolf.Dtos
{
    public class DigitalAssetDto
    {
        public DigitalAssetDto(Coywolf.Models.DigitalAsset entity, bool includeRelatedEntities = false)
        {
            Id = entity.Id;
            Name = entity.Name;
            FileName = entity.FileName;
            Description = entity.Description;
            Created = entity.Created;
            FileModified = entity.FileModified;
            Size = entity.Size;
            ContentType = entity.ContentType;
            RelativePath = entity.RelativePath;

            if (includeRelatedEntities)
            {
                Galleries = entity.PhotoGalleryDigitalAssets.Select(x => new PhotoGalleryDto(x.PhotoGallery)).ToList();
            }
            
        }

        public DigitalAssetDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        public string Description { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? FileModified { get; set; }
        public long? Size { get; set; }
        public string ContentType { get; set; }
        public string RelativePath { get; set; }
        public Guid? UniqueId { get; set; }
        public ICollection<PhotoGalleryDto> Galleries { get; set; }
        
    }
}
