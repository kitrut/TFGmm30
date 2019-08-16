package tfg.backend.models;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(name="usuarioId")
public class Alumno extends Usuario {
}
