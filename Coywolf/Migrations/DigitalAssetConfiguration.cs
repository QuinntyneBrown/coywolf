using Coywolf.Data;
using static System.IO.File;
using static System.IO.Directory;
using System.Linq;
using Coywolf.Models;
using System.IO;
using System;
using System.Data.Entity.Migrations;


namespace Coywolf.Migrations
{
    public class DigitalAssetConfiguration
    {
        public static void Seed(DataContext context) {
            foreach (var file in GetFiles(@"C:\coywolf_digital_assets"))
            {
                byte[] bytes = ReadAllBytes(file);                
                context.DigitalAssets.AddOrUpdate(x => x.FileName, new DigitalAsset() {
                    FileName = new FileInfo(file).Name,
                    ContentType = GetContentType(file),
                    Bytes = bytes
                });
            }
            context.SaveChanges();
        }

        public static string GetContentType(string file)
        {
            if (System.IO.Path.GetExtension(file) == ".jpg")
                return "image/jpeg";

            if (System.IO.Path.GetExtension(file) == ".png")
                return "image/png";

            throw new NotSupportedException();
        }
    }
}
