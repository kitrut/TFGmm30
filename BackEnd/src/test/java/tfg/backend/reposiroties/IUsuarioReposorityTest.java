package tfg.backend.reposiroties;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;
import tfg.backend.models.exceptions.NotFoundException;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class IUsuarioReposorityTest {

    @Autowired
    IUsuarioReposority usuarioReposority;

    @Test
    public void findUserByUsername() {
        Usuario usuario = usuarioReposority.findByUser("admin").orElseThrow(() -> new NotFoundException(0l));
        assertEquals("Administrador", usuario.getNombre());
        assertEquals("1", usuario.getId().toString());
    }

    @Test
    public void findUserByRoles() {
        assertEquals(1, usuarioReposority.findAllByRolesNombre(RoleType.ADMIN).size());
        assertEquals(3, usuarioReposority.findAllByRolesNombre(RoleType.PROFESOR).size());
        assertEquals(96, usuarioReposority.findAllByRolesNombre(RoleType.ALUMNO).size());
    }

}