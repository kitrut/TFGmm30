package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.ClassNotes;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.repositories.IClassNotesRepository;
import tfg.backend.services.interfaces.IClassNotesService;

@Service
public class ClassNotesService implements IClassNotesService {

    IClassNotesRepository classNotesRepository;

    @Autowired
    public ClassNotesService(IClassNotesRepository classNotesRepository) {
        this.classNotesRepository = classNotesRepository;
    }

    @Override
    public ClassNotes findByUserAndMaterial(Long materialId, String user) {
        return classNotesRepository.findByUserAndMaterial(user, materialId).orElseThrow(() -> new NotFoundException(materialId));
    }

    @Override
    public ClassNotes create(ClassNotes classNotes) {
        return classNotesRepository.save(classNotes);
    }
}
