package tfg.backend.services;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public interface IUserService extends UserDetailsService{

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
    public Usuario getUser(String username);
    public List<Usuario> all();
    public Usuario create(Usuario user,String role);
    public Usuario findById(Integer id);
    public List<Usuario> getProfesores();
    public List<Usuario> getAlumnos();
    public List<Usuario> getAdmins();
}
