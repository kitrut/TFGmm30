package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Profesor;

@Repository
public interface IProfesorRepository extends JpaRepository<Profesor, Integer> {
}
