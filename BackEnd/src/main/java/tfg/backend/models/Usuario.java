package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.Collection;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    @JsonIgnore
    private String user;
    @JsonIgnore
    private String password;

    private String nombre;
    private String apellidos;
    private String email;

    private String photoUrl;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    private Collection<Tutoring> tutorings;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<Asignatura> asignaturasImpartidas;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    @JsonIgnore
    private Collection<Matricula> matriculas;

    public boolean addAsignaturaImpartida(Asignatura a) {
        return this.asignaturasImpartidas.add(a);
    }

    public boolean removeAsignaturaImpartida(Asignatura a) {
        return this.asignaturasImpartidas.remove(a);
    }
}
