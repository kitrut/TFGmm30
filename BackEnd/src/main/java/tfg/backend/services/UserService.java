package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tfg.backend.models.Usuario;
import tfg.backend.models.Role;
import tfg.backend.reposiroties.IUsuarioReposority;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private IUsuarioReposority iUsuarioReposority;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario user = iUsuarioReposority.findByUser(username);

        List<GrantedAuthority> authorities = new ArrayList<>();
        for(Role r:user.getRoles()) {
        	authorities.add(new SimpleGrantedAuthority(r.getNombre()));
        }

        UserDetails userDetails = new User(user.getUser(), user.getPassword(),authorities);

        return  userDetails;

    }

    public List<Usuario> all(){
        return iUsuarioReposority.findAll();
    }
    
    public Usuario findById(Integer id){
    	Usuario p = this.iUsuarioReposority.findById(id).orElse(null);
        return p;
    }

    public List<Usuario> getProfesores(){
        Role r = new Role();
        r.setId(2l);
        r.setNombre("PROFESOR");
        return iUsuarioReposority.findByRoles(r);
    }

    public Optional<Usuario> getProfesorID(Integer id){
        return iUsuarioReposority.findById(id);
    }
}
