package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Matricula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer anyo;

    @ManyToMany(mappedBy = "matriculas")
    /*@JoinTable(name = "matricula_asignaturas",
            joinColumns = { @JoinColumn(name = "matricula_id") },
            inverseJoinColumns = { @JoinColumn(name = "asignaturas_id") })*/
    @JsonIgnore
    private Collection<Asignatura> asignaturas;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Usuario usuario;
}
