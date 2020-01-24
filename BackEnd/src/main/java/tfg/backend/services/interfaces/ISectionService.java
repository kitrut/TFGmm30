package tfg.backend.services.interfaces;

import tfg.backend.models.Asignatura;
import tfg.backend.models.Section;

import java.util.List;
import java.util.Optional;

public interface ISectionService {
    Optional<Section> findById(Long id);

    List<Section> findAllByAsignatura(Long idAsignatura);

    Asignatura addSection(Long idAsignatura, Section section);
}
