package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IRoleReposority;
import tfg.backend.reposiroties.IUsuarioReposority;
import tfg.backend.services.interfaces.IUserService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class UserService implements UserDetailsService, IUserService {

    @Autowired
    private IUsuarioReposority iUsuarioReposority;

    @Autowired
    private IRoleReposority roleReposority;

    @Override
    public Usuario create(Usuario user, RoleType role) {
        Role r = this.roleReposority.findByNombre(role).orElse(null);

        user.setRoles(Collections.singletonList(r));
        return this.iUsuarioReposority.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario user = iUsuarioReposority.findByUser(username).orElse(null);

        if (user == null)
            throw new UsernameNotFoundException("Usuario no encontrado");

        List<GrantedAuthority> authorities = new ArrayList<>();
        for (Role r : user.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(r.getNombre().name()));
        }

        return new User(user.getUser(), user.getPassword(), authorities);
    }

    @Override
    public Usuario getUser(String username) {

        return iUsuarioReposority.findByUser(username).orElse(null);
    }

    @Override
    public List<Usuario> all() {

        return iUsuarioReposority.findAll();
    }

    @Override
    public Usuario findById(Long id) {

        return this.iUsuarioReposority.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public List<Usuario> getByRole(RoleType role) {

        return iUsuarioReposority.findAllByRolesNombre(role);
    }
}
