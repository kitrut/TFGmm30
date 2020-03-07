package tfg.backend.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Usuario;
import tfg.backend.services.interfaces.IUserService;

@RestController
@RequestMapping("/api/private")
public class PrivateController {

    private IUserService userService;

    @Autowired
    public PrivateController(IUserService userService) {
        this.userService = userService;
    }

    @GetMapping("/checktoken")
    public void checktoken(HttpServletResponse response, Authentication auth) throws IOException {
        Map<String, Object> body = new HashMap<>();
        Usuario u = this.userService.getUser(auth.getPrincipal().toString());
        body.put("nombre", u.getNombre());
        body.put("apellidos", u.getApellidos());
        body.put("email", u.getEmail());
        body.put("id", u.getId());
        body.put("roles", u.getRoles());
        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setStatus(200);
        response.setContentType("application/json");
    }

    @GetMapping
    public String getMessage() {
        return "Hello from private API";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String getMessageAdmin() {
        return "Hello from private API admin";
    }

    @GetMapping("/profesor")
    public String getMessageProfesor() {
        return "Hello from private API profesor";
    }

    @GetMapping("/alumno")
    public String getMessageAlumno() {
        return "Hello from private API alumno";
    }
}