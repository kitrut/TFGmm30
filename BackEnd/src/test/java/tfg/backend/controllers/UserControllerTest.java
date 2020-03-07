package tfg.backend.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import tfg.backend.services.interfaces.IAsignaturaService;
import tfg.backend.services.interfaces.IUserService;

import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IUserService userService;

    @MockBean
    IAsignaturaService asignaturaService;

    @Test
    public void getProfesorSinToken() throws Exception {
        when(userService.findById(2l)).thenReturn(null);
        this.mockMvc.perform(get("/profesores/2")
                .contentType(APPLICATION_JSON_UTF8))
                .andExpect(status().is(403));
    }
}