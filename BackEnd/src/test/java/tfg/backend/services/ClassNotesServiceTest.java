package tfg.backend.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.services.interfaces.IClassNotesService;

@RunWith(SpringRunner.class)
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class ClassNotesServiceTest {

    @Autowired
    IClassNotesService classNotesService;

    @Test(expected = NotFoundException.class)
    public void classNotesFornNoUser() {
        this.classNotesService.findByUserAndMaterial(1l, "USUARIO_INEXISTENTE");
    }

    @Test(expected = NotFoundException.class)
    public void classNotesFornNoMaterial() {
        this.classNotesService.findByUserAndMaterial(-1l, "admin");
    }

}