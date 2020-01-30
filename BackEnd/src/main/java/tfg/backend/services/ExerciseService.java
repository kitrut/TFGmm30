package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Exercise;
import tfg.backend.reposiroties.IExerciseRepository;
import tfg.backend.services.interfaces.IExerciceService;

import java.util.Set;

@Service
public class ExerciseService implements IExerciceService {

    @Autowired
    IExerciseRepository exerciseRepository;

    @Override
    public Set<Exercise> findExercisesByMaterialId(Long materialId) {
        return exerciseRepository.findAllByMaterialesId(materialId);
    }
}
