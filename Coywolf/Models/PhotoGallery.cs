using System.Collections.Generic;

namespace Coywolf.Models
{
    public class PhotoGallery
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<PhotoGalleryDigitalAsset> PhotoGalleryDigitalAssets { get; set; } = new HashSet<PhotoGalleryDigitalAsset>();
    }
}
