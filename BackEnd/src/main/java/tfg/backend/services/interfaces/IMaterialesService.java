package tfg.backend.services.interfaces;

import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;

import java.util.Optional;

@Service
public interface IMaterialesService {

    Optional<Materiales> findById(Long id);
    Materiales update(Materiales materiales);
    Section create(Long sectionId, Materiales materiales);
    void delete(Long id);
}
