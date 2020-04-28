package tfg.backend.services.interfaces;

import tfg.backend.models.Materiales;
import tfg.backend.models.Section;

public interface IMaterialesService {

    Materiales findById(Long id);

    Materiales update(Materiales materiales);

    Section create(Long sectionId, Materiales materiales);

    void delete(Long id);
}
