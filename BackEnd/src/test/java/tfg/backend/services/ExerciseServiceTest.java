package tfg.backend.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Exercise;
import tfg.backend.models.ExerciseOption;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.services.interfaces.IExerciceService;

@RunWith(SpringRunner.class)
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class ExerciseServiceTest {

    @Autowired
    IExerciceService exerciceService;

    @Test(expected = NotFoundException.class)
    public void exercise404() {
        this.exerciceService.create(-1l, null);
    }

    @Test
    public void createExercise() {
        Exercise exercise = new Exercise();
        String question = "TEST CREATE EXERCISE";
        exercise.setQuestion(question);
        Set<ExerciseOption> options = new HashSet<>();
        options.add(new ExerciseOption());
        options.add(new ExerciseOption());
        exercise.setExerciseOptions(options);

        Exercise created = this.exerciceService.create(1l, exercise);

        assertNotNull(created.getId());
        assertEquals(question, created.getQuestion());
        assertEquals(2, created.getExerciseOptions().size());
    }

    @Test
    public void findExercisesByMaterialId() {
        Set<Exercise> exerciseSet = this.exerciceService.findExercisesByMaterialId(1l);
        assertTrue(exerciseSet.size() > 0);
    }

    @Test
    public void findExercisesByMaterialId404() {
        Set<Exercise> exerciseSet = this.exerciceService.findExercisesByMaterialId(-1l);
        assertTrue(exerciseSet.isEmpty());
    }
}