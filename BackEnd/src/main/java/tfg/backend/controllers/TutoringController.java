package tfg.backend.controllers;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
import tfg.backend.models.Usuario;
import tfg.backend.services.interfaces.ITutoringService;
import tfg.backend.services.interfaces.IUserService;

@RestController
@RequestMapping("/api/private/tutorings")
public class TutoringController {

    ITutoringService tutoringService;
    IUserService userService;

    @Autowired
    public TutoringController(ITutoringService tutoringService, IUserService userService) {
        this.tutoringService = tutoringService;
        this.userService = userService;
    }

    @GetMapping()
    public Collection<Tutoring>  findAll() {
        return tutoringService.findAll();
    }

    @GetMapping("{id}")
    public Tutoring findById(@PathVariable("id") Long id) {
        return tutoringService.findById(id);
    }

    @PostMapping
    public Tutoring create(@RequestBody Tutoring tutoring, Authentication auth) {
        Usuario u = this.userService.getUser(auth.getPrincipal().toString());
        tutoring.getTutoringMessages().stream().forEach(message -> message.setUser(u));
        return tutoringService.create(tutoring);
    }


    @GetMapping("{id}/messages")
    public Collection<TutoringMessage> getMessages(@PathVariable("id") Long id,  Authentication auth) {
        return tutoringService.findMessagesById(id, this.userService.getUser(auth.getPrincipal().toString()));
    }

    @PostMapping("{id}/messages")
    public Tutoring create(@PathVariable("id") Long id, @RequestBody TutoringMessage message, Authentication auth) {
        Usuario usuario = this.userService.getUser(auth.getPrincipal().toString());
        return tutoringService.createMessage(id,message, usuario);
    }

}
