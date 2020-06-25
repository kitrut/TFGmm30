package tfg.backend.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Section;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.repositories.IAsignaturaRepository;
import tfg.backend.repositories.ISectionRepository;
import tfg.backend.services.interfaces.ISectionService;

@Service
public class SectionService implements ISectionService {

    ISectionRepository sectionRepository;
    IAsignaturaRepository asignaturaRepository;

    @Autowired
    public SectionService(ISectionRepository sectionRepository, IAsignaturaRepository asignaturaRepository) {
        this.sectionRepository = sectionRepository;
        this.asignaturaRepository = asignaturaRepository;
    }

    @Override
    public Optional<Section> findById(Long id) {

        return sectionRepository.findByIdWithMateriales(id);
    }

    @Override
    public List<Section> findAllByAsignatura(Long idAsignatura) {
        return sectionRepository.findAllByAsignaturaId(idAsignatura);
    }

    @Override
    public Asignatura addSection(Long idAsignatura, Section section) {
        Asignatura a = asignaturaRepository.findById(idAsignatura).orElseThrow(() -> new NotFoundException(idAsignatura));

//        Collection<Section> sections = a.getSections();
//        sections.add(section);
//        a.setSections(sections);
//        a = asignaturaRepository.save(a);
        section.setAsignatura(a);
        sectionRepository.save(section);
        a = asignaturaRepository.findById(idAsignatura).orElseThrow(() -> new NotFoundException(idAsignatura));

        return a;
    }
}
