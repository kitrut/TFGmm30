package tfg.backend.models;

import com.fasterxml.jackson.annotation.*;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.*;

@Entity
public class Usuario implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(unique=true)
    private String user;
    private String password;

    private String nombre;
    private String apellidos;
    private String email;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JsonBackReference
    private Collection<Role> roles;
    
    @OneToMany(fetch = FetchType.LAZY)
    @JsonBackReference
    private Collection<Asignatura> asignaturasImpartidas;


    public Collection<Asignatura> getAsignaturasImpartidas() {
		return asignaturasImpartidas;
	}

	public void setAsignaturasImpartidas(Collection<Asignatura> asignaturasImpartidas) {
		this.asignaturasImpartidas = asignaturasImpartidas;
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

    @JsonIgnore
    @JsonProperty(value = "user")
    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    @JsonIgnore
    @JsonProperty(value = "password")
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
}
