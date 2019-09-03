package tfg.backend.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Asignatura {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nombre;
    private String descripcion;
    private String curso;
    
    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
    private Collection<Materiales> materiales;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference(value = "asignaturasImpartidas")
    private Usuario profesor;

    @JsonIgnore
    @JsonProperty(value = "user")
    public Collection<Materiales> getMateriales() {
        return materiales;
    }
    
    public boolean addMateriales(Materiales materiales) {
    	return this.materiales.add(materiales);
    }
    public void setMateriales(Collection<Materiales> materiales) {
        this.materiales = materiales;
    }

    

    public Usuario getProfesor() {
        return profesor;
    }

    public void setProfesor(Usuario profesor) {
        this.profesor = profesor;
    }

   

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}
