package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Asignatura;

@Repository
public interface IAsignaturaRepository extends JpaRepository<Asignatura, Long> {
}
