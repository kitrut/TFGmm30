package tfg.backend.services.interfaces;

import tfg.backend.models.Announcement;

import java.util.List;

public interface IAnnouncementService {
    Announcement findById(Long id);

    List<Announcement> findAll();

    Announcement create(Announcement announcement);
}
