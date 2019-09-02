package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
import tfg.backend.reposiroties.IAsignaturaRepository;
import tfg.backend.reposiroties.IMaterialesRepository;

import java.util.Collection;
import java.util.Optional;

@Service
public class AsignaturaService {

    @Autowired
    private IAsignaturaRepository asignaturaRepository;
    @Autowired
    private IMaterialesRepository materialesRepository;

    public Collection<Asignatura> all(){
        return asignaturaRepository.findAll();
    }

    public Optional<Asignatura> findById(Long id){
        return asignaturaRepository.findByIdWithMats(id);
    }

    public Asignatura create(Asignatura asignatura){
        return asignaturaRepository.save(asignatura);
    }

    public void delete(Long id){ asignaturaRepository.deleteById(id);}
    
    public Asignatura addMaterial(Long idAsignatura,Materiales materiales) {
    	Asignatura asignatura=asignaturaRepository.findById(idAsignatura).orElse(null);
    	if(asignatura!=null) {
    		Materiales mat = materialesRepository.save(materiales);
    		asignatura.addMateriales(mat);
    		asignatura = asignaturaRepository.save(asignatura);
    	}
    	return asignatura;
    }
    
    public Materiales getMaterial(Long idMat) {
		Materiales mat = materialesRepository.findById(idMat).orElse(null);
    	return mat;
    }
}
