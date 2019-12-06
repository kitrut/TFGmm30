package tfg.backend.services.interfaces;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tfg.backend.models.Usuario;

import java.util.List;

@Service
public interface IUserService extends UserDetailsService{

    UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
    Usuario getUser(String username);
    List<Usuario> all();
    Usuario create(Usuario user,String role);
    Usuario findById(Integer id);
    List<Usuario> getProfesores();
    List<Usuario> getAlumnos();
    List<Usuario> getAdmins();
}
