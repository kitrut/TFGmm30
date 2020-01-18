package tfg.backend.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Data
public class Materiales {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String titulo;

	@Size(max = 2000)
	private String contenido;

	private Integer orden;

	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Section section;

}
