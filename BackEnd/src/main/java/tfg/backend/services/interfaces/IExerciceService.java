package tfg.backend.services.interfaces;

import tfg.backend.models.Exercise;

import java.util.Set;

public interface IExerciceService {
    Set<Exercise> findExercisesByMaterialId(Long materialId);

    Exercise create(Long materialId, Exercise exercise);
}
