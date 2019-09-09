package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Usuario;
import tfg.backend.services.IUserService;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/private")
public class UserController {

    @Autowired
    IUserService userService;

    @GetMapping("/usuarios")
    public List<Usuario> index() {
        return userService.all();
    }

    @GetMapping("/profesores")
    public List<Usuario> getProfesores() {
        return userService.getProfesores();
    }
    @GetMapping("/profesores/{id}")
    public Usuario getProfesoresID(@PathVariable("id") Integer id) {
        return userService.findById(id);
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
