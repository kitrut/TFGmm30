package tfg.backend.controllers;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import tfg.backend.models.Role;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;
import tfg.backend.services.interfaces.IAsignaturaService;
import tfg.backend.services.interfaces.IUserService;

import java.io.IOException;
import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IUserService userService;
    @MockBean
    private IAsignaturaService asignaturaService;

    @Autowired
    UserController userController;

    public static byte[] convertObjectToJsonBytes(Object object) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return mapper.writeValueAsBytes(object);
    }

    @Test
    public void getProfesorSinToken() throws Exception {
        when(userService.findById(2l)).thenReturn(null);
        this.mockMvc.perform(get("/profesores/2")
                .contentType(APPLICATION_JSON_UTF8))
                .andExpect(status().is(403));
    }

    @Test
    @WithMockUser("ADMIN")
    public void crearUsuario() throws Exception{
        String username = "TestCreateUser";
        Usuario usuario = new Usuario();
        usuario.setNombre(username);
        Usuario usuarioWithRole = new Usuario();
        usuarioWithRole.setNombre(username);
        Role role = new Role();
        role.setNombre(RoleType.ADMIN);
        usuarioWithRole.setRoles(new ArrayList<>());
        usuarioWithRole.getRoles().add(role);

        UserWithRole userWithRole = new UserWithRole(usuario, RoleType.ADMIN);

        when(userService.create(usuario, RoleType.ADMIN)).thenReturn(usuarioWithRole);

        this.mockMvc.perform(post("/api/private/usuarios")
                .contentType(APPLICATION_JSON_UTF8)
                .content(UserControllerTest.convertObjectToJsonBytes(userWithRole)))
                .andExpect(status().is(HttpStatus.CREATED.value()));
    }

    @Test
    public void getProfesores() {
    }

    @Test
    public void getProfesoresID() {
    }

    @Test
    public void getAdmins() {
    }

    @Test
    public void getAlumnos() {
    }

    @Test
    public void getAlumnosID() {
    }

    @Test
    public void getProfesoresIDAsignatura() {
    }
}