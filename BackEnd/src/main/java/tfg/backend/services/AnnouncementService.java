package tfg.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tfg.backend.models.Announcement;
import tfg.backend.models.exceptions.NotFoundException;
import tfg.backend.reposiroties.IAnnouncementRepository;
import tfg.backend.services.interfaces.IAnnouncementService;

import java.util.List;

@Service
public class AnnouncementService implements IAnnouncementService {

    @Autowired
    IAnnouncementRepository announcementRepository;

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
