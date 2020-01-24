package tfg.backend.services.interfaces;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;

import java.util.List;

@Service
public interface IUserService extends UserDetailsService {

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;

    Usuario getUser(String username);

    List<Usuario> all();

    Usuario create(Usuario user, RoleType role);

    Usuario findById(Long id);

    List<Usuario> getByRole(RoleType role);
}
