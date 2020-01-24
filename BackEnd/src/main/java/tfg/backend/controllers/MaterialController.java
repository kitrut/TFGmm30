package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Materiales;
import tfg.backend.services.interfaces.IMaterialesService;

@RestController
@RequestMapping("/api/private/materiales")
public class MaterialController {

    @Autowired
    IMaterialesService materialesService;

    @GetMapping("{idMat}")
    public Materiales getMaterial(@PathVariable("idMat") Long idMat) {
        return materialesService.findById(idMat);
    }

    @DeleteMapping("{idMat}")
    private void deleteMat(@PathVariable("idMat") Long idMat) {
        materialesService.delete(idMat);
    }

    @PutMapping
    public Materiales editMaterial(@RequestBody Materiales material) {
        return materialesService.update(material);
    }

}
