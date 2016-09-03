namespace Coywolf.Models
{
    public class PhotoGalleryDigitalAsset
    {
        public int Id { get; set; }
        public DigitalAsset DigitalAsset { get; set; }
        public PhotoGallery PhotoGallery { get; set; }
    }
}
