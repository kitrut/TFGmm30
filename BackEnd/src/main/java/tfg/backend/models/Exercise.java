package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import tfg.backend.models.enums.ExerciseType;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.Set;

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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "exercise")
    private Set<ExerciseOption> exerciseOptions;

}
