package tfg.backend.services.interfaces;

import java.util.Collection;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
import tfg.backend.models.Usuario;

public interface ITutoringService {
    Tutoring findById(Long id);
    Tutoring create(Tutoring tutoring);

    Collection<TutoringMessage> findMessagesById(Long id, Usuario usuario);

    Collection<Tutoring>  findAll();

    Tutoring createMessage(Long id, TutoringMessage message, Usuario usuario);
}
