package tfg.backend.services;

import tfg.backend.models.Anuncio;

import java.util.List;

public interface IAnuncioService {
    Anuncio findById(Long id);
    List<Anuncio> findAll();
}
