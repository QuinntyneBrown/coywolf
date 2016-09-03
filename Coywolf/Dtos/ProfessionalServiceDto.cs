namespace Coywolf.Dtos
{
    public class ProfessionalServiceDto
    {
        public ProfessionalServiceDto()
        {

        }

        public ProfessionalServiceDto(Models.ProfessionalService entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
