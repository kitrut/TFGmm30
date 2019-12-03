package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.Anuncio;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Materiales;
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

    @PostMapping()
    public Anuncio create(@RequestBody Anuncio anuncio) {
        return anuncioService.create(anuncio);
    }

}
