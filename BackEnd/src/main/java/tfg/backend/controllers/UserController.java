package tfg.backend.controllers;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Usuario;
import tfg.backend.services.interfaces.IUserService;

import java.util.Collection;
import java.util.List;

@Data
class UserWithRole{
    public Usuario user;
    public String rol;
}

@RestController
@RequestMapping("/api/private")
public class UserController {

    @Autowired
    IUserService userService;

    @Autowired
    PasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/usuarios")
    public List<Usuario> index() {
        return userService.all();
    }

    @PostMapping("/usuarios")
    public Usuario crearUsuario(@RequestBody UserWithRole user) {
        //TODO reemplazar con contraseña aleatoria
        user.user.setPassword(bCryptPasswordEncoder.encode("password"));
        return userService.create(user.user,user.rol);
    }

    @GetMapping("/profesores")
    public List<Usuario> getProfesores() {
        return userService.getProfesores();
    }
    @GetMapping("/profesores/{id}")
    public Usuario getProfesoresID(@PathVariable("id") Integer id) {
        return userService.findById(id);
    }

    @GetMapping("/admins")
    public List<Usuario> getAdmins() {
        return userService.getAdmins();
    }

    @GetMapping("/alumnos")
    public List<Usuario> getAlumnos() {
        return userService.getAlumnos();
    }
    @GetMapping("/alumnos/{id}")
    public Usuario getAlumnosID(@PathVariable("id") Integer id) {
        return userService.findById(id);
    }

    @GetMapping("/profesores/{id}/asignaturas")
    public Collection<Asignatura> getProfesoresIDAsignatura(@PathVariable("id") Integer id) {
        return userService.findById(id).getAsignaturasImpartidas();
    }
}
