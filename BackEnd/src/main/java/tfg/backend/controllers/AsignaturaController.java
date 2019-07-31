package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Usuario;
import tfg.backend.services.AsignaturaService;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/private/asignaturas")
public class AsignaturaController {

    @Autowired
    private AsignaturaService asignaturaService;

    @GetMapping()
    public Collection<Asignatura> indexAsignatura() {
        return asignaturaService.all();
    }

    @GetMapping("/{id}")
    public Optional<Asignatura> find(@PathVariable("id") Long id) {
        return asignaturaService.findById(id);
    }

    @PostMapping
    public Asignatura create(@RequestBody Asignatura asignatura){
        return asignaturaService.create(asignatura);
    }
}
