package tfg.backend.repositories;

import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Exercise;

@Repository
public interface IExerciseRepository extends JpaRepository<Exercise, Long> {

    Set<Exercise> findAllByMaterialesId(Long materialId);
}
