package tfg.backend.services.interfaces;

import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
import tfg.backend.models.Usuario;

import java.util.Collection;
import java.util.List;

public interface IAsignaturaService {

    Collection<Asignatura> all();

    Asignatura findById(Long id);

    Asignatura create(Asignatura asignatura);

    void delete(Long id);

    Asignatura addMaterial(Long idAsignatura, Materiales materiales);

    Usuario getProfesor(Long id);

    List<Usuario> getMatriculados(Long idAsignatura);

    Asignatura addProfesor(Long idAsignatura, Long idProfesor);

    Collection<Asignatura> getAsignaturasAlumno(Long idAlumno);
}
