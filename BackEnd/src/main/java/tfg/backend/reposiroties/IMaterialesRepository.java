package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Materiales;

@Repository
public interface IMaterialesRepository extends JpaRepository<Materiales, Long> {

}
