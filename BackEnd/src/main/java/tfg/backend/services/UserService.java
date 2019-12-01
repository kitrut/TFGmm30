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
import tfg.backend.reposiroties.IRoleReposority;
import tfg.backend.reposiroties.IUsuarioReposority;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UserService implements UserDetailsService,IUserService {

    @Autowired
    private IUsuarioReposority iUsuarioReposority;

    @Autowired
    private IRoleReposority roleReposority;

    @Override
    public Usuario create(Usuario user, String role) {
        Role r = this.roleReposority.findByNombre(role).orElse(null);
        user.setRoles(Collections.singletonList(r));
        Usuario usuario =  this.iUsuarioReposority.save(user);
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario user = iUsuarioReposority.findByUser(username).orElse(null);

        if(user==null)
            throw  new UsernameNotFoundException("Usuario no encontrado");

        List<GrantedAuthority> authorities = new ArrayList<>();
        for(Role r:user.getRoles()) {
        	authorities.add(new SimpleGrantedAuthority(r.getNombre()));
        }

        return new User(user.getUser(), user.getPassword(),authorities);
    }

    public Usuario getUser(String username){
        return iUsuarioReposority.findByUser(username).orElse(null);
    }

    public List<Usuario> all(){
        return iUsuarioReposority.findAll();
    }

    public Usuario findById(Integer id){
        return this.iUsuarioReposority.findById(id).orElse(null);
    }

    public List<Usuario> getProfesores(){
        Role r = new Role();
        r.setId(2l);
        r.setNombre("PROFESOR");
        return iUsuarioReposority.findByRoles(r);
    }

    @Override
    public List<Usuario> getAlumnos() {
        Role r = new Role();
        r.setId(3l);
        r.setNombre("ALUMNO");
        return iUsuarioReposority.findByRoles(r);
    }

    @Override
    public List<Usuario> getAdmins() {
        Role r = new Role();
        r.setId(1l);
        r.setNombre("ADMIN");
        return iUsuarioReposority.findByRoles(r);
    }

}
