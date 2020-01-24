package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Anuncio;
import tfg.backend.services.interfaces.IAnuncioService;

import java.util.List;

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
        System.out.println(anuncio);
        return anuncioService.create(anuncio);
    }

}
