package tfg.backend.repositories;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Section;

@Repository
public interface ISectionRepository extends JpaRepository<Section, Long> {

    @Query("Select s from Section s left join fetch s.materiales m where s.id=?1")
    Optional<Section> findByIdWithMateriales(Long id);

    List<Section> findAllByAsignaturaId(Long idAsignatura);

}
