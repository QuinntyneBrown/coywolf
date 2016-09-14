using Coywolf.Data;
using System.Linq;
using Coywolf.Models;
using System.Data.Entity;

namespace Coywolf.Migrations
{
    public class PhotoGalleryConfiguration
    {
        public static void Seed(DataContext context)
        {
            var mainGallery = context.PhotoGalleries
                .Where(x => x.Name == "Main")
                .Include(x=>x.PhotoGalleryDigitalAssets)
                .Include("PhotoGalleryDigitalAssets.DigitalAsset")
                .FirstOrDefault();

            if (mainGallery == null)
            {
                mainGallery = new PhotoGallery() { Name = "Main" };
                context.PhotoGalleries.Add(mainGallery);
            }

            mainGallery.PhotoGalleryDigitalAssets.Clear();
            foreach(var digitalAsset in context.DigitalAssets)
            {
                if(digitalAsset.FileName.Contains("gallery_main_"))
                {
                    mainGallery.PhotoGalleryDigitalAssets.Add(
                    new PhotoGalleryDigitalAsset()
                    {
                        DigitalAsset = digitalAsset
                    });
                }
                
            }

            context.SaveChanges();

        }
    }
}
