package tfg.backend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tfg.backend.models.Announcement;
import tfg.backend.services.interfaces.IAnnouncementService;

@RestController
@RequestMapping("/api/private/announcements")
public class AnnouncementController {

    IAnnouncementService announcementService;

    @Autowired
    public AnnouncementController(IAnnouncementService announcementService) {
        this.announcementService = announcementService;
    }

    @GetMapping()
    public List<Announcement> index() {
        return announcementService.findAll();
    }

    @GetMapping("/{id}")
    public Announcement find(@PathVariable("id") Long id) {
        return announcementService.findById(id);
    }

    @PostMapping()
    public Announcement create(@RequestBody Announcement announcement) {
        return announcementService.create(announcement);
    }

}
