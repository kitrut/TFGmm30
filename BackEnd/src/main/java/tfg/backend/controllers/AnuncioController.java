package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Anuncio;
import tfg.backend.models.Asignatura;
import tfg.backend.services.IAnuncioService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/private/anuncios")
public class AnuncioController {

    @Autowired
    IAnuncioService anuncioService;

    @GetMapping()
    public List<Anuncio> index() {
        return anuncioService.findAll();
    }

    @GetMapping("/{id}")
    public Anuncio find(@PathVariable("id") Long id) {
        return anuncioService.findById(id);
    }

}
