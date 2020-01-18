package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
import tfg.backend.models.Section;
import tfg.backend.services.interfaces.IMaterialesService;
import tfg.backend.services.interfaces.ISectionService;

import java.util.Collection;

@RestController
@RequestMapping("/api/private/sections")
public class SectionController {

    @Autowired
    ISectionService sectionService;
    @Autowired
    IMaterialesService materialesService;

    @GetMapping("/{id}/sections")
    public Collection<Section> getAllSectionsOfAsignatura(@PathVariable("id") Long id) {
        return sectionService.findAllByAsignatura(id);
    }

    @PostMapping("{id}")
    public Asignatura createSection(@RequestBody Section section, @PathVariable("id") Long id) {
        return sectionService.addSection(id,section);
    }

    @PostMapping("{id}/materiales")
    public Section addMateriales(@PathVariable("id") Long id, @RequestBody Materiales material) {
        return materialesService.create(id, material);
    }
}
