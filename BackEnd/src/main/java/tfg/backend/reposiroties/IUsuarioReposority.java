package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;

import java.util.List;

@Repository
public interface IUsuarioReposority extends JpaRepository<Usuario, Integer> {
    Usuario findByUser(String username);

    List<Usuario> findByRoles(Role rol);
}
