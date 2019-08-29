package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.util.Collection;
import javax.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name="usuarioId")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Profesor extends Usuario{

    public Collection<Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Collection<Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    @OneToMany(fetch = FetchType.LAZY)
    private Collection<Asignatura> asignaturas;
}
