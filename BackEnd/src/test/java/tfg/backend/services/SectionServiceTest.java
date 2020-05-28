package tfg.backend.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Optional;
import javax.swing.text.html.Option;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Asignatura;
import tfg.backend.models.Section;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.services.interfaces.ISectionService;

@RunWith(SpringRunner.class)
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class SectionServiceTest {

    @Autowired
    ISectionService sectionService;

    public void Section404() {
        Optional<Section> section = this.sectionService.findById(0l);
        assertNull(section.get());
    }

    @Test
    public void SectionFindId() {
        Section section = this.sectionService.findById(1l).orElse(null);

        assertNotNull(section);
        long aux = section.getId();
        assertEquals(1l, aux);
        assertTrue(section.getMateriales().size() > 0);
    }

    @Test
    public void findSectionsByAsignaturaId() {
        List<Section> sections = this.sectionService.findAllByAsignatura(1l);

        assertTrue(sections.size() == 4);
    }

    @Test
    public void addSection() {
        String aux = "TEST ADD SECTION";
        List<Section> sections = this.sectionService.findAllByAsignatura(1l);

        assertTrue(sections.size() == 4);

        Section nuevaSeccion = new Section();
        nuevaSeccion.setName(aux);

        Asignatura asignatura = this.sectionService.addSection(1l, nuevaSeccion);


        List<Section> sectionsStored = this.sectionService.findAllByAsignatura(1l);

        assertEquals(5, sectionsStored.size());
        assertEquals(aux, sectionsStored.get(4).getName());
    }


}