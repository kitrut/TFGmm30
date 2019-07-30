package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Asignatura;
import tfg.backend.reposiroties.IAsignaturaRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class AsignaturaService {

    @Autowired
    private IAsignaturaRepository asignaturaRepository;

    public Collection<Asignatura> all(){
        return asignaturaRepository.findAll();
    }

    public Optional<Asignatura> findById(Long id){
        return asignaturaRepository.findById(id);
    }
}
