package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Profesor;
import tfg.backend.reposiroties.IProfesorRepository;

@Service
public class ProfesorService {

    @Autowired
    IProfesorRepository profesorRepository;

    public Profesor findById(Integer id){
        Profesor p = this.profesorRepository.findById(id).orElse(null);
        if(p!=null){
            p.setAsignaturas(p.getAsignaturas());
        }
        return p;
    }
}
