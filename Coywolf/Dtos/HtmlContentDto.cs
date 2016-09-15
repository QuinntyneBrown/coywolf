namespace Coywolf.Dtos
{
    public class HtmlContentDto
    {
        public HtmlContentDto(Coywolf.Models.HtmlContent entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public HtmlContentDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
