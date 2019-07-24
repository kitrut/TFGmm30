package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Usuario;
import tfg.backend.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/private/usuarios")
public class UsuarioController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<Usuario> index() {
        return userService.all();
    }
}
