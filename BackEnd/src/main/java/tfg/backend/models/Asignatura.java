package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
@Data
public class Asignatura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private String curso;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "asignatura_id")
    @JsonIgnore
    private Collection<Section> sections;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference(value = "asignaturasImpartidas")
    private Usuario profesor;

    @ManyToMany
    @JsonIgnore
    private Collection<Matricula> matriculas;
}
