package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import tfg.backend.models.enums.ExerciseType;

@Getter
@Setter
@Entity
public class Exercise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private ExerciseType exerciseType;

    private String question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Materiales materiales;

    @OneToMany(mappedBy = "exercise", cascade = CascadeType.PERSIST)
    private Set<ExerciseOption> exerciseOptions;

}
