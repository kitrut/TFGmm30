package tfg.backend.services.interfaces;

import java.util.List;
import tfg.backend.models.Announcement;

public interface IAnnouncementService {
    Announcement findById(Long id);

    List<Announcement> findAll();

    Announcement create(Announcement announcement);
}
