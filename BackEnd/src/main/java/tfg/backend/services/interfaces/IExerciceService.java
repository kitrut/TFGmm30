package tfg.backend.services.interfaces;

import java.util.Set;
import tfg.backend.models.Exercise;

public interface IExerciceService {
    Set<Exercise> findExercisesByMaterialId(Long materialId);

    Exercise create(Long materialId, Exercise exercise);
}
