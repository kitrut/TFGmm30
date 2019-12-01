package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Matricula {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String anyo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference(value = "matriculas")
    private Asignatura asignatura;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Usuario usuario;

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}
    public String getAnyo() {return anyo;}
    public void setAnyo(String anyo) {this.anyo = anyo;}
    public Asignatura getAsignatura() {return asignatura;}
    public void setAsignatura(Asignatura asignatura) {this.asignatura = asignatura;}

    public Usuario getUsuario() { return usuario;}
    public void setUsuario(Usuario usuario) {this.usuario = usuario;}
}
