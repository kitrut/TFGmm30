package tfg.backend.reposiroties;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
public class IUsuarioReposorityTest {

    @Autowired
    IUsuarioReposority usuarioReposority;

    @Test
    public void findUserByUsername(){
        Usuario usuario = usuarioReposority.findByUser("admin").orElse(null);
        assertEquals("Administrador",usuario.getNombre());
        assertEquals("1",usuario.getId().toString());
    }

    @Test
    public void findUserByRoles(){
        Role r = new Role();
        r.setId(1L);
        r.setNombre("ADMIN");
        assertEquals(1,usuarioReposority.findByRoles(r).size());
        r.setId(2L);
        r.setNombre("PROFESOR");
        assertEquals(3,usuarioReposority.findByRoles(r).size());
        r.setId(3L);
        r.setNombre("ALUMNO");
        assertEquals(1,usuarioReposority.findByRoles(r).size());

    }

}