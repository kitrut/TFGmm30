package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Section;
import tfg.backend.reposiroties.ISectionRepository;
import tfg.backend.services.interfaces.ISectionService;

import java.util.List;
import java.util.Optional;

@Service
public class SectionService implements ISectionService {

    @Autowired
    ISectionRepository sectionRepository;

    @Override
    public Optional<Section> findById(Long id) {
        return sectionRepository.findByIdWithMateriales(id);
    }

    @Override
    public List<Section> findAllByAsignatura(Long idAsignatura) {
        return  sectionRepository.findAllByAsignaturaId(idAsignatura);
    }
}
