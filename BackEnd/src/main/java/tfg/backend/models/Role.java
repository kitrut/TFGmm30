package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;
import tfg.backend.models.enums.RoleType;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
@Data
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private RoleType nombre;

    @ManyToMany(mappedBy = "roles")
    @JsonBackReference
    private Collection<Usuario> usuarios;
}
