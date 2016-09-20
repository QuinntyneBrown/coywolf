using System.ComponentModel.DataAnnotations.Schema;

namespace Coywolf.Models
{
    public class PhotoGalleryDigitalAsset
    {
        public int Id { get; set; }
        [ForeignKey("DigitalAsset")]
        public int? DigitalAssetId { get; set; }
        [ForeignKey("PhotoGallery")]
        public int? PhotoGalleryId { get; set; }
        public DigitalAsset DigitalAsset { get; set; }
        public PhotoGallery PhotoGallery { get; set; }
    }
}
