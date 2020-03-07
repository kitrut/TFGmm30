package tfg.backend.controllers;

import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Exercise;
import tfg.backend.models.Materiales;
import tfg.backend.services.interfaces.IExerciceService;
import tfg.backend.services.interfaces.IMaterialesService;

@RestController
@RequestMapping("/api/private/materiales")
public class MaterialController {

    IMaterialesService materialesService;
    IExerciceService exerciseService;

    @Autowired
    public MaterialController(IMaterialesService materialesService, IExerciceService exerciseService) {
        this.materialesService = materialesService;
        this.exerciseService = exerciseService;
    }

    @GetMapping("{idMat}")
    public Materiales getMaterial(@PathVariable("idMat") Long idMat) {
        return materialesService.findById(idMat);
    }

    @DeleteMapping("{idMat}")
    public void deleteMat(@PathVariable("idMat") Long idMat) {
        materialesService.delete(idMat);
    }

    @PutMapping
    public Materiales editMaterial(@RequestBody Materiales material) {
        return materialesService.update(material);
    }

    @GetMapping("{materialId}/exercises")
    public Set<Exercise> getExercises(@PathVariable("materialId") Long materialId){
        return exerciseService.findExercisesByMaterialId(materialId);
    }

    @PostMapping("{materialId}/exercises")
    public Exercise create(@PathVariable("materialId") Long materialId, @RequestBody Exercise exercise) {

        return exerciseService.create(materialId, exercise);
    }
}
