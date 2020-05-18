package tfg.backend.services;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.List;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import tfg.backend.models.Announcement;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.services.interfaces.IAnnouncementService;

@RunWith(SpringRunner.class)
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class AnnouncementServiceTest {

    @Autowired
    IAnnouncementService announcementServiceserService;

    @Test(expected = NotFoundException.class)
    public void AnnounceNotFoundException() {
        this.announcementServiceserService.findById(0l);
    }

    @Test
    public void AnnounceFindOK() {
        Announcement announcement = this.announcementServiceserService.findById(1l);

        assertNotNull(announcement);
        long aux = announcement.getId();
        assertEquals(1l, aux);
    }

    @Test
    public void AnnounceFindListOK() {
        List<Announcement> announcement = this.announcementServiceserService.findAll();

        assertTrue(announcement.size() > 0);
    }

    @Test
    public void AnnounceCreateOK() {
        String title = "TEST-AnnounceCreateOK";
        Announcement announcement = new Announcement();
        announcement.setTitle(title);

        Announcement created = this.announcementServiceserService.create(announcement);

        assertNotNull(created);
        assertNotNull(created.getId());
        assertEquals(title, created.getTitle());
    }
}