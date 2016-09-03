using System.Collections.Generic;
using System.Linq;

namespace Coywolf.Dtos
{
    public class PhotoGalleryDto
    {
        public PhotoGalleryDto(Coywolf.Models.PhotoGallery entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            Photos = entity.PhotoGalleryDigitalAssets.Select(x => new DigitalAssetDto(x.DigitalAsset)).ToList();
        }

        public PhotoGalleryDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<DigitalAssetDto> Photos { get; set; } = new HashSet<DigitalAssetDto>();
    }
}
