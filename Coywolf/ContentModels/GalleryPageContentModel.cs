using Coywolf.Models;
using System.Collections.Generic;

namespace Coywolf.ContentModels
{
    public class GalleryPageContentModel
    {
        public ICollection<DigitalAsset> Photos { get; set; } = new HashSet<DigitalAsset>();
    }
}
