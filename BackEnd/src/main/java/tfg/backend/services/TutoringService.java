package tfg.backend.services;

import java.util.Collection;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
import tfg.backend.models.Usuario;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.ITutoringRepository;
import tfg.backend.services.interfaces.ITutoringService;

@Service
public class TutoringService implements ITutoringService {

    @Autowired
    ITutoringRepository tutoringRepository;

    @Override
    public Tutoring findById(Long id) {
        return tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));
    }

    @Override
    public Tutoring create(Tutoring tutoring) {
        return tutoringRepository.save(tutoring);
    }

    @Override
    public Collection<TutoringMessage> findMessagesById(Long id, Usuario usuario) {
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));

        fillConnectedUserMessages(usuario, tutoring);
        return tutoring.getTutoringMessages();
    }

    @Override
    public Collection<Tutoring> findAll() {
        return tutoringRepository.findAll();
    }

    @Override
    public Tutoring createMessage(Long id, TutoringMessage message, Usuario usuario) {
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));
        message.setUser(usuario);
        tutoring.getTutoringMessages().add(message);
        tutoring = tutoringRepository.save(tutoring);
        fillConnectedUserMessages(usuario, tutoring);
        return tutoring;
    }

    private void fillConnectedUserMessages(Usuario usuario, Tutoring tutoring) {
        tutoring.getTutoringMessages().stream().forEach(message -> {
            message.setFromConnectedUser(usuario.equals(message.getUser()));
        });
    }
}
