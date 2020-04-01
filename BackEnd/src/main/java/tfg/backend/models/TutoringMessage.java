package tfg.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Data
public class TutoringMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    private String message;

    @ManyToOne(fetch = FetchType.LAZY)
    private Usuario user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    private Tutoring tutoring;

    private boolean isFromConnectedUser;

    @CreationTimestamp
    @Column(updatable = false)
    private Date createAt;
    @UpdateTimestamp
    private Date updateAt;
}
