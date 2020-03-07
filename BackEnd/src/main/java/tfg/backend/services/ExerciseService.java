package tfg.backend.services;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Exercise;
import tfg.backend.models.Materiales;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IExerciseRepository;
import tfg.backend.reposiroties.IMaterialesRepository;
import tfg.backend.services.interfaces.IExerciceService;

@Service
public class ExerciseService implements IExerciceService {

    @Autowired
    IExerciseRepository exerciseRepository;

    @Autowired
    IMaterialesRepository materialesRepository;

    @Override
    public Set<Exercise> findExercisesByMaterialId(Long materialId) {
        return exerciseRepository.findAllByMaterialesId(materialId);
    }

    @Override
    public Exercise create(Long materialId, Exercise exercise) {
        Materiales materiales = this.materialesRepository.findById(materialId).orElseThrow(() -> new NotFoundException(materialId));
        exercise.setMateriales(materiales);
        exercise.getExerciseOptions().stream().forEach(exerciseOption -> exerciseOption.setExercise(exercise));
        return this.exerciseRepository.save(exercise);
    }
}
