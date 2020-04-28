package tfg.backend.services;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
import tfg.backend.models.Usuario;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IAsignaturaRepository;
import tfg.backend.reposiroties.ITutoringRepository;
import tfg.backend.services.interfaces.ITutoringService;
import tfg.backend.services.interfaces.IUserService;

@Service
public class TutoringService implements ITutoringService {

    ITutoringRepository tutoringRepository;
    IAsignaturaRepository asignaturaRepository;
    IUserService userService;

    @Autowired
    public TutoringService(ITutoringRepository tutoringRepository, IUserService userService, IAsignaturaRepository asignaturaRepository) {
        this.tutoringRepository = tutoringRepository;
        this.userService = userService;
        this.asignaturaRepository = asignaturaRepository;
    }

    @Override
    public Tutoring findById(Long id) {
        return tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));
    }

    @Override
    public Tutoring create(Tutoring tutoring, Authentication auth) {
        Usuario user = this.userService.getUser(auth.getPrincipal().toString());

        tutoring.getTutoringMessages().stream().forEach(message -> message.setUser(user));
        tutoring.setUsers(Arrays.asList(user, tutoring.getAsignatura().getProfesor()));

        Collection<Tutoring> tutoringList = user.getTutorings();
        if(tutoringList != null){
            tutoringList.add(tutoring);
        } else {
            user.setTutorings(Arrays.asList(tutoring));
        }

        Long asignaturaId = tutoring.getAsignatura().getId();
        Asignatura asignatura = this.asignaturaRepository.findById(asignaturaId).orElseThrow(()-> new NotFoundException(asignaturaId));
        Usuario profesor = asignatura.getProfesor();
        Collection<Tutoring> profesorList = profesor.getTutorings();
        if(profesorList != null){
            profesorList.add(tutoring);
        } else {
            profesor.setTutorings(Arrays.asList(tutoring));
        }

        return tutoringRepository.save(tutoring);
    }

    @Override
    public Collection<TutoringMessage> findMessagesById(Long id, Authentication auth) {
        Usuario usuario = this.userService.getUser(auth.getPrincipal().toString());
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));

        fillConnectedUserMessages(usuario, tutoring);
        return tutoring.getTutoringMessages();
    }

    @Override
    public Collection<Tutoring> findAll() {
        return tutoringRepository.findAll();
    }

    @Override
    public Collection<Tutoring> findAllByUser(Authentication auth) {
        Usuario usuario = this.userService.getUser(auth.getPrincipal().toString());
        return tutoringRepository.findAllByUsers(usuario);
    }

    @Override
    public Collection<Usuario> getUsersByTutoring(Long id) {
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(() -> new NotFoundException(id));

        return tutoring.getUsers();
    }

    @Override
    public void addUsers(Long id, Collection<Usuario> users) {
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
        tutoring.getUsers().addAll(users);
        tutoringRepository.save(tutoring);
    }

    @Override
    public Tutoring createMessage(Long id, TutoringMessage message, Authentication auth) {
        Usuario usuario = this.userService.getUser(auth.getPrincipal().toString());
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));
        message.setUser(usuario);
        tutoring.getTutoringMessages().add(message);
        tutoring = tutoringRepository.save(tutoring);
        fillConnectedUserMessages(usuario, tutoring);
        return tutoring;
    }

    private void fillConnectedUserMessages(Usuario usuario, Tutoring tutoring) {
        tutoring.getTutoringMessages().stream().forEach(message ->
            message.setFromConnectedUser(usuario.equals(message.getUser()))
        );
    }
}
