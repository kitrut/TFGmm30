package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Asignatura;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface IAsignaturaRepository extends JpaRepository<Asignatura, Long> {

	@Query("Select a from Asignatura a left join fetch a.sections p where a.id=?1")
	Optional<Asignatura> findByIdWithSections(Long id);

	@Query("Select a from Asignatura a left join fetch a.matriculas p where a.id=?1")
	Optional<Asignatura> findByIdWithMatriculas(Long id);

	Collection<Asignatura> findByMatriculasUsuarioId(Integer aLong);
}
