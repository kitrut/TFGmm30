package tfg.backend.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
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
    private Collection<Materiales> materiales;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference(value = "asignaturasImpartidas")
    private Usuario profesor;

    @OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
    @JoinColumn(name = "asignatura_id")
    @JsonIgnore
    private Set<Matricula> matriculas;

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
    public Set<Matricula> getMatriculas() { return matriculas; }
    public void setMatriculas(Set<Matricula> matriculas) { this.matriculas = matriculas; }
}
