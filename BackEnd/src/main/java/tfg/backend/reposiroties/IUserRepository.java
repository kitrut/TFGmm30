package tfg.backend.reposiroties;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;

@Repository
public interface IUserRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByUser(String username);
    List<Usuario> findAllByRolesNombre(RoleType name);
    List<Usuario> findAllByMatriculasAsignaturasId(Long id);
}
