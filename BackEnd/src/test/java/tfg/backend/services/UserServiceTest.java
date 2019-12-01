package tfg.backend.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;

import java.util.Collection;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

    @Autowired
    IUserService userService;

    @Test
    public void UserNotFound(){
        assertNull(this.userService.findById(0));
    }
    @Test
    public void UserAdmin(){
        Usuario usuario=this.userService.findById(1);
        assertEquals("Administrador",usuario.getNombre());
        Role rol = new Role();
        rol.setId(1L);
        rol.setNombre("ADMIN");
        assertEquals(1,usuario.getRoles().size());
        for (Role r:usuario.getRoles()) {
            assertEquals("ADMIN",r.getNombre());
        }
    }

    @Test
    public void getProfesores(){
        Collection<Usuario> profesores = userService.getProfesores();
        assertEquals(3,profesores.size());
    }

    @Test
    public void getProfesoresByID(){
        Usuario profesor = userService.findById(2);
        assertEquals("Manuel",profesor.getNombre());
    }

    @Test
    public void getAll(){
        Collection<Usuario> usuarios = userService.all();
        assertEquals(5,usuarios.size());
    }
}