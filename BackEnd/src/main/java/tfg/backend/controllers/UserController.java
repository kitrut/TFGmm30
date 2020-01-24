package tfg.backend.controllers;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Usuario;
import tfg.backend.models.enums.RoleType;
import tfg.backend.services.interfaces.IAsignaturaService;
import tfg.backend.services.interfaces.IUserService;

import java.util.Collection;
import java.util.List;

@Data
class UserWithRole {
    public Usuario user;
    public RoleType rol;
}

@RestController
@RequestMapping("/api/private")
public class UserController {

    @Autowired
    IUserService userService;
    @Autowired
    IAsignaturaService asignaturaService;

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
        return userService.create(user.user, user.rol);
    }

    @GetMapping("/profesores")
    public List<Usuario> getProfesores() {
        return userService.getByRole(RoleType.PROFESOR);
    }

    @GetMapping("/profesores/{id}")
    public Usuario getProfesoresID(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @GetMapping("/admins")
    public List<Usuario> getAdmins() {
        return userService.getByRole(RoleType.ADMIN);
    }

    @GetMapping("/alumnos")
    public List<Usuario> getAlumnos() {
        return userService.getByRole(RoleType.ALUMNO);
    }

    @GetMapping("/alumnos/{id}")
    public Usuario getAlumnosID(@PathVariable("id") Long id) {
        return userService.findById(id);
    }

    @GetMapping("/profesores/{id}/asignaturas")
    public Collection<Asignatura> getProfesoresIDAsignatura(@PathVariable("id") Long id) {
        return userService.findById(id).getAsignaturasImpartidas();
    }

    @GetMapping("/alumnos/{id}/asignaturas")
    public Collection<Asignatura> getMatriculasAlumno(@PathVariable("id") Long id) {
        return asignaturaService.getAsignaturasAlumno(id);
    }
}
