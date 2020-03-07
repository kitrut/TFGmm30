package tfg.backend.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Announcement;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IAnnouncementRepository;
import tfg.backend.services.interfaces.IAnnouncementService;

@Service
public class AnnouncementService implements IAnnouncementService {

    IAnnouncementRepository announcementRepository;

    @Autowired
    public AnnouncementService(IAnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    @Override
    public Announcement findById(Long id) {

        return announcementRepository.findById(id).orElseThrow(() -> new NotFoundException(id));
    }

    @Override
    public List<Announcement> findAll() {

        return announcementRepository.findAllByOrderByCreateAtDesc();
    }

    @Override
    public Announcement create(Announcement announcement) {

        return announcementRepository.save(announcement);
    }
}
