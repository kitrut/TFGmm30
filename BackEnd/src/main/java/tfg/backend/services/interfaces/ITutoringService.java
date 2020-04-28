package tfg.backend.services.interfaces;

import java.util.Collection;

import org.springframework.security.core.Authentication;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
import tfg.backend.models.Usuario;

public interface ITutoringService {
    Tutoring findById(Long id);
    Tutoring create(Tutoring tutoring, Authentication auth);
    Collection<TutoringMessage> findMessagesById(Long id, Authentication auth);
    Collection<Tutoring>  findAll();
    Collection<Tutoring> findAllByUser(Authentication auth);
    Collection<Usuario> getUsersByTutoring(Long id);
    void addUsers(Long id, Collection<Usuario> users);
    Tutoring createMessage(Long id, TutoringMessage message, Authentication auth);
}
