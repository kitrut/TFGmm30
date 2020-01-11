package tfg.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tfg.backend.models.Materiales;
import tfg.backend.services.interfaces.IMaterialesService;

@RestController
@RequestMapping("/api/private/materiales")
public class MaterialController {

    @Autowired
    IMaterialesService materialesService;

    @GetMapping("{idMat}")
    public Materiales getMaterial(@PathVariable("idMat") Long idMat) {
        return materialesService.findById(idMat).orElse(null);
    }
    @DeleteMapping("{idMat}")
    private void deleteMat(@PathVariable("idMat") Long idMat){
        materialesService.delete(idMat);
    }

}
