package tfg.backend.services.interfaces;

import java.util.List;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;

@Service
public interface IUserService extends UserDetailsService {

    UserDetails loadUserByUsername(String username);

    Usuario getUser(String username);

    List<Usuario> all();

    Usuario create(Usuario user, RoleType role);

    Usuario save(Usuario user);

    Usuario findById(Long id);

    List<Usuario> getByRole(RoleType role);
}
