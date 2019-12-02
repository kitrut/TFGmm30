package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Asignatura;

import java.util.Optional;

@Repository
public interface IAsignaturaRepository extends JpaRepository<Asignatura, Long> {
	
	@Query("Select a from Asignatura a left join fetch a.materiales m left join fetch a.profesor p where a.id=?1")
	Optional<Asignatura> findByIdWithMats(Long id);

	@Query("Select a from Asignatura a left join fetch a.matriculas p where a.id=?1")
	Optional<Asignatura> findByIdWithMatriculas(Long id);
}
