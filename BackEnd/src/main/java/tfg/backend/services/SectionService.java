package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Section;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IAsignaturaRepository;
import tfg.backend.reposiroties.ISectionRepository;
import tfg.backend.services.interfaces.ISectionService;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class SectionService implements ISectionService {

    @Autowired
    ISectionRepository sectionRepository;

    @Autowired
    IAsignaturaRepository asignaturaRepository;

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

        Collection<Section> sections = a.getSections();
        sections.add(section);
        a.setSections(sections);
        a = asignaturaRepository.save(a);

        return a;
    }
}
