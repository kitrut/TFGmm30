package tfg.backend.models;

import com.fasterxml.jackson.annotation.*;

import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

import javax.persistence.*;

@Entity
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

    public Collection<Asignatura> getAsignaturasImpartidas() {
		return asignaturasImpartidas;
	}
	public void setAsignaturasImpartidas(Collection<Asignatura> asignaturasImpartidas) { this.asignaturasImpartidas = asignaturasImpartidas; }
	public boolean addAsignaturaImpartida(Asignatura a){
        return this.asignaturasImpartidas.add(a);
    }
	public Collection<Role> getRoles() {
		return roles;
	}
	public void setRoles(Collection<Role> roles) {
		this.roles = roles;
	}
	public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellidos() {
        return apellidos;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Set<Matricula> getMatriculas() { return matriculas; }
    public void setMatriculas(Set<Matricula> matriculas) { this.matriculas = matriculas; }
}
