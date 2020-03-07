package tfg.backend.services;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IMaterialesRepository;
import tfg.backend.reposiroties.ISectionRepository;
import tfg.backend.services.interfaces.IMaterialesService;

@Service
public class MaterialesService implements IMaterialesService {

    @Autowired
    IMaterialesRepository materialesRepository;
    @Autowired
    ISectionRepository sectionRepository;

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
