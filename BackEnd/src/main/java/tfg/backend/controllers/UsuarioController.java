package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import tfg.backend.models.Usuario;
import tfg.backend.services.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/private")
public class UsuarioController {

    @Autowired
    UserService userService;

    @GetMapping("/usuarios")
    public List<Usuario> index() {
        return userService.all();
    }

    @GetMapping("/profesores")
    public List<Usuario> getProfesores() {
        return userService.getProfesores();
    }
    @GetMapping("/profesores/{id}")
    public Optional<Usuario> getProfesoresID(@PathVariable("id") Integer id) {
        return userService.getProfesorID(id);
    }
}
