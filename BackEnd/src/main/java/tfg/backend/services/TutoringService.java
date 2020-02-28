package tfg.backend.services;

import java.util.Collection;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Tutoring;
import tfg.backend.models.TutoringMessage;
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
    public Collection<TutoringMessage> findMessagesById(Long id) {
        Tutoring tutoring = tutoringRepository.findById(id).orElseThrow(()-> new NotFoundException(id));

        return tutoring.getTutoringMessages();
    }
}
