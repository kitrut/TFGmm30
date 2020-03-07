package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Tutoring;

@Repository
public interface ITutoringRepository extends JpaRepository<Tutoring, Long> {

}
