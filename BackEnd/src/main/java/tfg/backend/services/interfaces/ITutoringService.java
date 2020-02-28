package tfg.backend.services.interfaces;

import java.util.Collection;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;

public interface ITutoringService {
    Tutoring findById(Long id);
    Tutoring create(Tutoring tutoring);

    Collection<TutoringMessage> findMessagesById(Long id);
}
