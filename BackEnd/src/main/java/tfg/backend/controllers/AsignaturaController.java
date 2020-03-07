package tfg.backend.controllers;

import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Section;
import tfg.backend.models.Usuario;
import tfg.backend.services.interfaces.IAsignaturaService;
import tfg.backend.services.interfaces.IMaterialesService;
import tfg.backend.services.interfaces.ISectionService;

@RestController
@RequestMapping("/api/private/asignaturas")
public class AsignaturaController {

    IAsignaturaService asignaturaService;
    ISectionService sectionService;
    IMaterialesService materialesService;

    @Autowired
    public AsignaturaController(IAsignaturaService asignaturaService, ISectionService sectionService, IMaterialesService materialesService) {
        this.asignaturaService = asignaturaService;
        this.sectionService = sectionService;
        this.materialesService = materialesService;
    }

    @GetMapping()
    public Collection<Asignatura> indexAsignatura() {

        return asignaturaService.all();
    }

    @GetMapping("/{id}")
    public Asignatura find(@PathVariable("id") Long id) {

        return asignaturaService.findById(id);
    }

    @PostMapping("/{id}/profesor/{idProfesor}")
    public Asignatura addProfesor(@PathVariable("id") Long id, @PathVariable("idProfesor") Long idProfesor) {
        return asignaturaService.addProfesor(id, idProfesor);
    }

    @GetMapping("/{id}/profesor")
    public Usuario getProfesor(@PathVariable("id") Long id) {

        return asignaturaService.getProfesor(id);
    }

    @GetMapping("/{id}/alumnos")
    public List<Usuario> getMatriculados(@PathVariable("id") Long id) {
        return asignaturaService.getMatriculados(id);
    }

    @GetMapping("/{id}/sections")
    public Collection<Section> getAllSectionsOfAsignatura(@PathVariable("id") Long id) {
        return sectionService.findAllByAsignatura(id);
    }

    @PostMapping
    public Asignatura create(@RequestBody Asignatura asignatura) {

        return asignaturaService.create(asignatura);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        asignaturaService.delete(id);
    }


}
