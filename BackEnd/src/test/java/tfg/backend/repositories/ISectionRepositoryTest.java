package tfg.backend.repositories;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Section;

@RunWith(SpringRunner.class)
@DataJpaTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class ISectionRepositoryTest {

    @Autowired
    ISectionRepository sectionRepository;

    @Test
    public void findByIdWithMateriales() {
        Section section = sectionRepository.findByIdWithMateriales(1L).orElse(null);
        assertNotNull(section);
        assertEquals(section.getName(),"Tema 1: Los números naturales");
        assertEquals(section.getAsignatura().getId(),1l,0.001);
        assertEquals(section.getMateriales().size(), 2);
    }

    @Test
    public void findAllByAsignaturaId() {
        assertEquals(sectionRepository.findAllByAsignaturaId(1L).size(),4);
    }
}