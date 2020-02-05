package tfg.backend.services.interfaces;

import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;

@Service
public interface IMaterialesService {

    Materiales findById(Long id);

    Materiales update(Materiales materiales);

    Section create(Long sectionId, Materiales materiales);

    void delete(Long id);
}