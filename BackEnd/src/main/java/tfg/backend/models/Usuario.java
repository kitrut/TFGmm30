package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

@Entity
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Usuario implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique=true)
    @JsonIgnore
    private String user;
    @JsonIgnore
    private String password;

    private String nombre;
    private String apellidos;
    private String email;
    
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles;
    
    @OneToMany(fetch = FetchType.LAZY)
    @JsonManagedReference(value = "asignaturasImpartidas")
    private Collection<Asignatura> asignaturasImpartidas;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnore
    private Set<Matricula> matriculas;

    public boolean addAsignaturaImpartida(Asignatura a){
        return this.asignaturasImpartidas.add(a);
    }
}
