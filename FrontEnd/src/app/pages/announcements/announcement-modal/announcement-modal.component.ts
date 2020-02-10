import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { ActionSheetButton } from '@ionic/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AnnouncementService } from '@services/announcement.service';
import { Announcement } from '@models/announcement';

@Component({
  selector: 'app-announcement-modal',
  templateUrl: './announcement-modal.component.html',
  styleUrls: ['./announcement-modal.component.scss'],
})
export class AnnouncementModalComponent implements OnInit {

  @Input() announcement: Announcement;

  announceForm = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    content: new FormControl(null),
    importance: new FormControl(0)
  });

  botones: ActionSheetButton[];
  asignaturas: Asignatura[];
  constructor(public modalCtrl: ModalController,
              public asignaturaService: AsignaturasService,
              public announceService: AnnouncementService) { }

  ngOnInit() {
    this.asignaturaService.getAll().subscribe(data => {
      this.asignaturas = data;
    });

    if (!!this.announcement) {
      this.announceForm.patchValue({
        id : this.announcement.id,
        title : this.announcement.title,
        content : this.announcement.content,
        importance : this.announcement.importance
      });
    }
  }

  async dismiss(info: Announcement) {
    await this.modalCtrl.dismiss({ data: info });
  }

  onSubmit() {
    const announcement: Announcement = {
      id : this.announceForm.value.id,
      title : this.announceForm.value.title,
      content : this.announceForm.value.content,
      importance : this.announceForm.value.importance
    };

    this.announceService.create(announcement).subscribe(data => this.dismiss(data));
  }
}
