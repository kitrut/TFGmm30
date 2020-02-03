package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.ClassNotes;

import java.util.Optional;

@Repository
public interface IClassNotesRepository extends JpaRepository<ClassNotes, Long> {

    Optional<ClassNotes> findByUserAndMaterial(String user, Long materialId);
}
