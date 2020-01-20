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
import tfg.backend.services.interfaces.IAsignaturaService;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class AsignaturaService implements IAsignaturaService {

    @Autowired
    private IAsignaturaRepository asignaturaRepository;

    @Autowired
    private IMaterialesRepository materialesRepository;
    @Autowired
    private IUsuarioReposority usuarioReposority;

    @Override
    public Collection<Asignatura> all(){
        return asignaturaRepository.findAll();
    }

    @Override
    public Optional<Asignatura> findById(Long id){
        return asignaturaRepository.findByIdWithSections(id);
    }

    @Override
    public Asignatura create(Asignatura asignatura){
        return asignaturaRepository.save(asignatura);
    }

    @Override
    public void delete(Long id){
        Asignatura asignatura = asignaturaRepository.findById(id).orElse(null);
        if(asignatura != null) {
            Usuario user =  asignatura.getProfesor();
            if(user != null){
                user.removeAsignaturaImpartida(asignatura);
                usuarioReposority.save(user);
            }
        }
        asignaturaRepository.deleteById(id);
    }

    @Override
    public Asignatura addMaterial(Long idAsignatura,Materiales materiales) {
    	/*Asignatura asignatura=asignaturaRepository.findById(idAsignatura).orElse(null);
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
    	return asignatura;*/
    	return null;
    }

    @Override
    public Usuario getProfesor(Long id){
        Asignatura a = this.asignaturaRepository.findById(id).orElse(null);
        if(a!=null){
            return a.getProfesor();
        }
        return null;
    }

    @Override
    public Collection<Matricula> getMatriculados(Long idAsignatura){
        Optional<Asignatura> asignatura = asignaturaRepository.findByIdWithMatriculas(idAsignatura);
        if(asignatura.isPresent()){
            return asignatura.get().getMatriculas();
        }
        return null;
        /*Asignatura asignatura = asignaturaRepository.findById(idAsignatura).orElse(null);
        if(asignatura != null){
            return asignatura.getMatriculas();
        }
        return null;*/
    }

    @Override
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

    @Override
    public Collection<Asignatura> getAsignaturasAlumno(Integer idAlumno) {
        return this.asignaturaRepository.findByMatriculasUsuarioId(idAlumno);
    }
}
