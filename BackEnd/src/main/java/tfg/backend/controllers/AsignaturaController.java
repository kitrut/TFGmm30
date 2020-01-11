package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.*;
import tfg.backend.services.interfaces.IAsignaturaService;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/private/asignaturas")
public class AsignaturaController {

    @Autowired
    private IAsignaturaService asignaturaService;

    @GetMapping()
    public Collection<Asignatura> indexAsignatura() {
        return asignaturaService.all();
    }

    @GetMapping("/{id}")
    public Optional<Asignatura> find(@PathVariable("id") Long id) {
        return asignaturaService.findById(id);
    }
    
    @PostMapping("/{id}/materiales")
    public void addMateriales(@PathVariable("id") Long id,@RequestBody Materiales material) {
        asignaturaService.addMaterial(id, material);
    }

    @PostMapping("/{id}/profesor/{idProfesor}")
    public Asignatura addProfesor(@PathVariable("id") Long id,@PathVariable("idProfesor") Integer idProfesor) {
        return asignaturaService.addProfesor(id, idProfesor);
    }

    @GetMapping("/{id}/profesor")
    public Usuario getProfesor(@PathVariable("id") Long id) {
        return asignaturaService.getProfesor(id);
    }

    @GetMapping("/{id}/matriculas")
    public Set<Matricula> getMatriculados(@PathVariable("id") Long id) {
        return asignaturaService.getMatriculados(id);
    }

    @PostMapping
    public Asignatura create(@RequestBody Asignatura asignatura){
        return asignaturaService.create(asignatura);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){asignaturaService.delete(id);}
}
