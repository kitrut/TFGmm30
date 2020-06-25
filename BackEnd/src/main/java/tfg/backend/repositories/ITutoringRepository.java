package tfg.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Tutoring;
import tfg.backend.models.Usuario;

import java.util.List;

@Repository
public interface ITutoringRepository extends JpaRepository<Tutoring, Long> {
    List<Tutoring> findAllByUsers(Usuario usuario);
}
