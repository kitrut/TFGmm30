package tfg.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ClassNotes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String user;
    private Long material;

    @Lob
    private String content;
}
