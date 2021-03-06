package tfg.backend.services;

import static org.junit.Assert.assertEquals;

import java.util.Collection;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.services.interfaces.IUserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    IUserService userService;

    @Test(expected = NotFoundException.class)
    public void UserNotFound() {
        this.userService.findById(0l);
    }

    @Test
    public void UserAdmin() {
        Usuario usuario = this.userService.findById(1l);
        assertEquals("Administrador", usuario.getNombre());
        assertEquals(1, usuario.getRoles().size());
        for (Role r : usuario.getRoles()) {
            assertEquals(RoleType.ADMIN, r.getNombre());
        }
    }

    @Test
    public void getProfesores() {
        Collection<Usuario> profesores = userService.getByRole(RoleType.PROFESOR);
        assertEquals(3, profesores.size());
    }

    @Test
    public void getProfesoresByID() {
        Usuario profesor = userService.findById(2l);
        assertEquals("Manuel", profesor.getNombre());
    }

    @Test
    public void getAll() {
        Collection<Usuario> usuarios = userService.all();
        assertEquals(100, usuarios.size());
    }
}