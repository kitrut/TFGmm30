package tfg.backend.controllers;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Collection;
import java.util.List;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

@Data
class UserWithRole {
    public Usuario user;
    public RoleType rol;

    public UserWithRole(Usuario user, RoleType rol) {
        this.user = user;
        this.rol = rol;
    }
}

@RestController
@RequestMapping("/api/private")
public class UserController {

    @Autowired
    IUserService userService;
    @Autowired
    IAsignaturaService asignaturaService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public UserController(IUserService userService, IAsignaturaService asignaturaService, PasswordEncoder passwordEncoder){
        this.userService = userService;
        this.asignaturaService = asignaturaService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/usuarios")
    public List<Usuario> index() {

        return userService.all();
    }

    @PostMapping("/usuarios")
    public ResponseEntity<Usuario> crearUsuario(@RequestBody UserWithRole user) {
        //TODO reemplazar con contraseña aleatoria
        user.user.setPassword(passwordEncoder.encode("password"));
        return new ResponseEntity<>(userService.create(user.user, user.rol), HttpStatus.CREATED);
    }

    @PostMapping("/usuarios/{id}/photo")
    public Usuario addPhoto(@PathVariable("id") Long id, @RequestBody String foto) throws IOException {
        Path rootPath = Paths.get("uploads/profile-photo").resolve("profile-"+id+".jpeg");
        Path rootAbsolutePath = rootPath.toAbsolutePath();

        byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(foto);
        Files.copy(new ByteArrayInputStream(imageBytes),rootAbsolutePath, StandardCopyOption.REPLACE_EXISTING);

        Usuario usuario = userService.findById(id);
        usuario.setPhotoUrl("profile-photo/" + "profile-"+id+".jpeg");
        return userService.save(usuario);
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
