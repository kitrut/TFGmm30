package tfg.backend.controllers;

import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.ClassNotes;
import tfg.backend.services.interfaces.IClassNotesService;

@RestController
@RequestMapping("/api/private/classNotes")
public class ClassNotesController {

    IClassNotesService classNotesService;

    @Autowired
    public ClassNotesController(IClassNotesService classNotesService) {
        this.classNotesService = classNotesService;
    }

    @GetMapping("/{idMaterial}")
    public ClassNotes find(@PathVariable("idMaterial") Long idMaterial, Principal principal) {
        return classNotesService.findByUserAndMaterial(idMaterial, principal.getName());
    }

    @PostMapping()
    public ClassNotes find(@RequestBody ClassNotes classNotes, Principal principal) {
        classNotes.setUser(principal.getName());
        return classNotesService.create(classNotes);
    }
}
