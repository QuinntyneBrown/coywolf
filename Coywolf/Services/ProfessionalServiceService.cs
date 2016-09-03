using System;
using System.Collections.Generic;
using Coywolf.Dtos;
using Coywolf.Data;
using System.Linq;

namespace Coywolf.Services
{
    public class ProfessionalServiceService : IProfessionalServiceService
    {
        public ProfessionalServiceService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.ProfessionalServices;
            _cache = cacheProvider.GetCache();
        }

        public ProfessionalServiceAddOrUpdateResponseDto AddOrUpdate(ProfessionalServiceAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.ProfessionalService());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new ProfessionalServiceAddOrUpdateResponseDto(entity);
        }

        public ICollection<ProfessionalServiceDto> Get()
        {
            ICollection<ProfessionalServiceDto> response = new HashSet<ProfessionalServiceDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new ProfessionalServiceDto(entity)); }
            return response;
        }

        public ProfessionalServiceDto GetById(int id)
        {
            return new ProfessionalServiceDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.ProfessionalService> _repository;
        protected readonly ICache _cache;
    }
}
