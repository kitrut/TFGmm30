package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
import tfg.backend.models.Matricula;
import tfg.backend.models.Usuario;
import tfg.backend.reposiroties.IAsignaturaRepository;
import tfg.backend.reposiroties.IMaterialesRepository;
import tfg.backend.reposiroties.IUsuarioReposority;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class AsignaturaService {

    @Autowired
    private IAsignaturaRepository asignaturaRepository;
    @Autowired
    private IMaterialesRepository materialesRepository;

    @Autowired
    private IUsuarioReposority usuarioReposority;

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
    	    if(materiales.getId()==null){
                Materiales mat = materialesRepository.save(materiales);
                asignatura.addMateriales(mat);
                asignatura = asignaturaRepository.save(asignatura);
            }else{
    	        materiales.setAsignatura(asignatura);
                materialesRepository.save(materiales);
            }
    	}
    	return asignatura;
    }

    public void deleteMaterial(Long idAsignatura,Long idMaterial){
        Asignatura asignatura = asignaturaRepository.findById(idAsignatura).orElse(null);
        if(asignatura!=null){
            Materiales mat = materialesRepository.findById(idMaterial).orElse(null);
            if(mat!=null){
                Collection<Materiales> materiales = asignatura.getMateriales();
                if(materiales.remove(mat)){
                    asignatura.setMateriales(materiales);
                    asignaturaRepository.save(asignatura);
                    materialesRepository.delete(mat);
                }

            }
        }

    }
    
    public Materiales getMaterial(Long idMat) {
		return materialesRepository.findById(idMat).orElse(null);
    }
    public Usuario getProfesor(Long id){
        Asignatura a = this.asignaturaRepository.findById(id).orElse(null);
        if(a!=null){
            return a.getProfesor();
        }
        return null;
    }

    public Set<Matricula> getMatriculados(Long idAsignatura){
        return this.asignaturaRepository.findByIdWithMatriculas(idAsignatura).get().getMatriculas();
    }
    public Asignatura addProfesor(Long idAsignatura,Integer idProfesor){
        Asignatura a = this.asignaturaRepository.findById(idAsignatura).orElse(null);
        if(a!=null){
            Usuario u = this.usuarioReposority.findById(idProfesor).orElse(null);
            if(u!=null){
                a.setProfesor(u);

                a=this.asignaturaRepository.save(a);
                u.addAsignaturaImpartida(a);
                this.usuarioReposority.save(u);

            }
        }
        return a;
    }

    public Collection<Materiales> getMateriales(Long idAsignatura) {
        Asignatura as = asignaturaRepository.findById(idAsignatura).orElse(null);
        if(as!=null){
            return  as.getMateriales();
        }
        return null;
    }
}
