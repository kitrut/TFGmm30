package tfg.backend.reposiroties;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tfg.backend.models.Anuncio;

@Repository
public interface IAnuncioRepository extends JpaRepository<Anuncio, Long> {
}
