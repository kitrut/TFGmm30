package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
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
    
    @GetMapping("/{id}/materiales/{idMat}")
    public Materiales getMaterial(@PathVariable("id") Long id,@PathVariable("idMat") Long idMat) {
        return asignaturaService.getMaterial(idMat);
    }

    @GetMapping("/{id}/materiales")
    public Collection<Materiales> getMateriales(@PathVariable("id") Long id) {
        return asignaturaService.getMateriales(id);
    }

    @PostMapping
    public Asignatura create(@RequestBody Asignatura asignatura){
        return asignaturaService.create(asignatura);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id){asignaturaService.delete(id);}

    @DeleteMapping("/{id}/materiales/{idMat}")
    private void deleteMat(@PathVariable("id") Long id,@PathVariable("idMat") Long idMat){
        asignaturaService.deleteMaterial(id,idMat);
    }
}
