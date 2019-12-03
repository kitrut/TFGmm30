package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Anuncio;
import tfg.backend.reposiroties.IAnuncioRepository;

import java.util.List;

@Service
public class AnuncioService implements IAnuncioService {

    @Autowired
    IAnuncioRepository anuncioRepository;

    @Override
    public Anuncio findById(Long id) {
        return anuncioRepository.findById(id).orElse(null);
    }

    @Override
    public List<Anuncio> findAll() {
        return anuncioRepository.findAll();
    }
}
