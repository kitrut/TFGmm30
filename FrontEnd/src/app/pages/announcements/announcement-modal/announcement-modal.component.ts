import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
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

  asignaturas: Asignatura[];

  constructor(public modalCtrl: ModalController,
              public asignaturaService: AsignaturasService,
              public announceService: AnnouncementService) { }

  ngOnInit() {
    this.asignaturaService.findAll().subscribe(data => this.asignaturas = data);

    if (!!this.announcement) {
      this.announceForm.patchValue(this.announcement);
    }
  }

  async dismiss(info: Announcement) { await this.modalCtrl.dismiss({ data: info }); }

  onSubmit() {
    this.announceService.create(this.announceForm.value).subscribe(data => this.dismiss(data));
  }
}
