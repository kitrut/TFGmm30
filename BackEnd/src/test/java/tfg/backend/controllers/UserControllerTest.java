package tfg.backend.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import tfg.backend.services.IUserService;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IUserService userService;

    @Test
    public void getProfesorSinToken() throws Exception {
        when(userService.getProfesorID(2)).thenReturn(null);
        this.mockMvc.perform(get("/profesores/2")
                .contentType(APPLICATION_JSON_UTF8))
                .andExpect(status().is(403));
    }
}