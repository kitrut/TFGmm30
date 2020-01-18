package tfg.backend.services;

import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;
import tfg.backend.reposiroties.IMaterialesRepository;
import tfg.backend.reposiroties.ISectionRepository;
import tfg.backend.services.interfaces.IMaterialesService;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class MaterialesService implements IMaterialesService {

    @Autowired
    IMaterialesRepository materialesRepository;
    @Autowired
    ISectionRepository sectionRepository;

    @Override
    public Optional<Materiales> findById(Long id) {
        return materialesRepository.findById(id);
    }

    @Override
    public Materiales update(Materiales materiales) {
        Materiales matold = materialesRepository.findById(materiales.getId()).orElseThrow(() -> new RuntimeException());
        materiales.setSection(matold.getSection());
        return materialesRepository.save(materiales);
    }

    @Override
    public Section create(Long sectionId, Materiales materiales) {
        Section section = sectionRepository.findByIdWithMateriales(sectionId).orElse(null);
        if(section != null){
            Collection<Materiales> materialesList = section.getMateriales();
            materialesList.add(materiales);
            section.setMateriales(materialesList);
            section = sectionRepository.save(section);
        }
        return section;
    }

    @Override
    public void delete(Long id) {
        Materiales mat = materialesRepository.findById(id).orElse(null);
        if(mat != null){
            materialesRepository.delete(mat);
        }
    }
}
