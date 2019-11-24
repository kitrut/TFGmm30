package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Role;

import java.util.Optional;

@Repository
public interface IRoleReposority extends JpaRepository<Role, Long> {
    Optional<Role> findByNombre(String nombre);
}
