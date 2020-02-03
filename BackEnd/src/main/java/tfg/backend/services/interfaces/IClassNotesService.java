package tfg.backend.services.interfaces;

import tfg.backend.models.ClassNotes;

public interface IClassNotesService {
    ClassNotes findByUserAndMaterial(Long materialId, String user);
    ClassNotes create(ClassNotes classNotes);
}
