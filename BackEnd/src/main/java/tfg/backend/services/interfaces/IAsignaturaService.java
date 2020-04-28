package tfg.backend.services.interfaces;

import java.util.Collection;
import java.util.List;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Usuario;

public interface IAsignaturaService {

    Collection<Asignatura> all();

    Asignatura findById(Long id);

    Asignatura create(Asignatura asignatura);

    void delete(Long id);

    Usuario getProfesor(Long id);

    List<Usuario> getMatriculados(Long idAsignatura);

    Asignatura addProfesor(Long idAsignatura, Long idProfesor);

    Collection<Asignatura> getAsignaturasAlumno(Long idAlumno);
}
