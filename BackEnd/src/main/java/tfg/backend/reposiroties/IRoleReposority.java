package tfg.backend.reposiroties;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Role;
import tfg.backend.models.enums.RoleType;

@Repository
public interface IRoleReposority extends JpaRepository<Role, Long> {
    Optional<Role> findByNombre(RoleType nombre);
}
