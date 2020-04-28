package tfg.backend.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
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
import tfg.backend.reposiroties.IUserRepository;
import tfg.backend.services.interfaces.IUserService;

@Service
public class UserService implements UserDetailsService, IUserService {

    private IUserRepository userRepository;
    private IRoleReposority roleReposority;

    @Autowired
    public UserService(IUserRepository userRepository, IRoleReposority roleReposority){
        this.userRepository = userRepository;
        this.roleReposority = roleReposority;
    }

    @Override
    public Usuario create(Usuario user, RoleType role) {
        Role r = this.roleReposority.findByNombre(role).orElse(null);

        user.setRoles(Collections.singletonList(r));
        return this.userRepository.save(user);
    }

    @Override
    public Usuario save(Usuario user) {
        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username){
        Usuario user = userRepository.findByUser(username).orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        List<GrantedAuthority> authorities = new ArrayList<>();
        for (Role r : user.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(r.getNombre().name()));
        }

        return new User(user.getUser(), user.getPassword(), authorities);
    }

    @Override
    public Usuario getUser(String username) {

        return userRepository.findByUser(username).orElse(null);
    }

    @Override
    public List<Usuario> all() {

        return userRepository.findAll();
    }

    @Override
    public Usuario findById(Long id) {

        return this.userRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public List<Usuario> getByRole(RoleType role) {

        return userRepository.findAllByRolesNombre(role);
    }
}
