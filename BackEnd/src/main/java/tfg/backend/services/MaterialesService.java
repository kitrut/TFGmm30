package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Materiales;
import tfg.backend.reposiroties.IMaterialesRepository;
import tfg.backend.services.interfaces.IMaterialesService;

import java.util.Optional;

@Service
public class MaterialesService implements IMaterialesService {

    @Autowired
    IMaterialesRepository materialesRepository;

    @Override
    public Optional<Materiales> findById(Long id) {
        return materialesRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        Materiales mat = materialesRepository.findById(id).orElse(null);
        if(mat != null){
            materialesRepository.delete(mat);
        }
    }
}
