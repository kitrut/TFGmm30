package tfg.backend.services.interfaces;

import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
import tfg.backend.models.Matricula;
import tfg.backend.models.Usuario;

import java.util.Collection;
import java.util.Optional;

public interface IAsignaturaService {

    Collection<Asignatura> all();
    Optional<Asignatura> findById(Long id);
    Asignatura create(Asignatura asignatura);
    void delete(Long id);
    Asignatura addMaterial(Long idAsignatura, Materiales materiales);

    Usuario getProfesor(Long id);
    Collection<Matricula> getMatriculados(Long idAsignatura);
    Asignatura addProfesor(Long idAsignatura,Integer idProfesor);

    Collection<Asignatura> getAsignaturasAlumno(Integer idAlumno);
}
