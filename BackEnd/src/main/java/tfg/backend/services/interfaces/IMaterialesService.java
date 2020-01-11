package tfg.backend.services.interfaces;

import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;

import java.util.Optional;

@Service
public interface IMaterialesService {

    Optional<Materiales> findById(Long id);
    void delete(Long id);
}
