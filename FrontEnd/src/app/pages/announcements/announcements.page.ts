import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnnouncementService } from '@services/announcement.service';
import { Announcement } from '@models/announcement';
import { AnnouncementModalComponent } from './announcement-modal/announcement-modal.component';

@Component({
  selector: 'app-announcements',
  templateUrl: 'announcements.page.html',
  styleUrls: ['announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit {

  announcements = [];
  constructor(private announcementService: AnnouncementService, public modalController: ModalController) {}

  ngOnInit(): void {
    this.announcementService.findAll().subscribe(data => this.announcements = data);
  }

  async createAnnouncement(announcement: Announcement) {
    const modal = await this.modalController.create({
      component: AnnouncementModalComponent,
      componentProps: {
        announcement
      }
    });
    modal.onWillDismiss().then((info) => info ? this.ngOnInit() : null);

    return await modal.present();
  }
}
