package tfg.backend.services;

import java.util.Collection;
import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.repositories.IMaterialesRepository;
import tfg.backend.repositories.ISectionRepository;
import tfg.backend.services.interfaces.IMaterialesService;

@Service
public class MaterialesService implements IMaterialesService {

    IMaterialesRepository materialesRepository;
    ISectionRepository sectionRepository;

    public MaterialesService(IMaterialesRepository materialesRepository, ISectionRepository sectionRepository) {
        this.materialesRepository = materialesRepository;
        this.sectionRepository = sectionRepository;
    }

    @Override
    public Materiales findById(Long id) {

        return materialesRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public Materiales update(Materiales materiales) {
        Materiales matold = materialesRepository.findById(materiales.getId()).orElseThrow(() -> new NotFoundException(materiales.getId()));
        materiales.setSection(matold.getSection());
        return materialesRepository.save(materiales);
    }

    @Override
    public Section create(Long sectionId, Materiales materiales) {
        Section section = sectionRepository.findByIdWithMateriales(sectionId).orElseThrow(() -> new NotFoundException(sectionId));

        Collection<Materiales> materialesList = section.getMateriales();
        materialesList.add(materiales);
        section.setMateriales(materialesList);
        section = sectionRepository.save(section);

        return section;
    }

    @Override
    public void delete(Long id) {
        Materiales mat = materialesRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
        materialesRepository.delete(mat);
    }
}
