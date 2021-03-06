package tfg.backend.controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;
import tfg.backend.services.interfaces.IMaterialesService;
import tfg.backend.services.interfaces.ISectionService;

@RestController
@RequestMapping("/api/private/sections")
public class SectionController {

    ISectionService sectionService;
    IMaterialesService materialesService;

    @Autowired
    public SectionController(ISectionService sectionService, IMaterialesService materialesService){
        this.sectionService = sectionService;
        this.materialesService = materialesService;
    }

    @GetMapping("/{id}/sections")
    public Collection<Section> getAllSectionsOfAsignatura(@PathVariable("id") Long id) {
        return sectionService.findAllByAsignatura(id);
    }

    @PostMapping("{id}")
    public Asignatura createSection(@RequestBody Section section, @PathVariable("id") Long id) {
        return sectionService.addSection(id, section);
    }

    @PostMapping("{id}/materiales")
    public Section addMateriales(@PathVariable("id") Long id, @RequestBody Materiales material) {
        return materialesService.create(id, material);
    }
}
