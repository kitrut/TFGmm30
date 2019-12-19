package tfg.backend.services.interfaces;

import tfg.backend.models.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface ISectionService {
    Optional<Section> findById(Long id);
    List<Section> findAllByAsignatura(Long idAsignatura);
}
