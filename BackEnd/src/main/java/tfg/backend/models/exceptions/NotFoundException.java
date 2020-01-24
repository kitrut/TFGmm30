package tfg.backend.models.exceptions;

public class NotFoundException extends RuntimeException {

    public NotFoundException(Long id) {
        super("Recurso no encontrado con el id: " + id);
    }
}
