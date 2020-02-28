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
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
import tfg.backend.services.interfaces.ITutoringService;

@RestController
@RequestMapping("/api/private/tutorings")
public class TutoringController {

    @Autowired
    ITutoringService tutoringService;

    @GetMapping("{id}")
    public Tutoring findById(@PathVariable("id") Long id) {
        return tutoringService.findById(id);
    }

    @PostMapping
    public Tutoring create(@RequestBody Tutoring tutoring) { return tutoringService.create(tutoring); }


    @GetMapping("{id}/messages")
    public Collection<TutoringMessage> getMessages(@PathVariable("id") Long id) {
        return tutoringService.findMessagesById(id);
    }

}
