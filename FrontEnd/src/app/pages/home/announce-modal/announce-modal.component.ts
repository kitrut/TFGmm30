import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { ActionSheetButton } from '@ionic/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { Anuncio } from 'src/app/models/anuncio';

@Component({
  selector: 'app-announce-modal',
  templateUrl: './announce-modal.component.html',
  styleUrls: ['./announce-modal.component.scss'],
})
export class AnnounceModalComponent implements OnInit {

  @Input() anuncio;

  announceForm = new FormGroup({
    id: new FormControl(null),
    titulo: new FormControl(null),
    contenido: new FormControl(null),
    importancia: new FormControl(0)
  });

  botones: ActionSheetButton[];
  asignaturas: Asignatura[];
  constructor(public modalCtrl: ModalController,
              public asignaturaService: AsignaturasService,
              public announceService: AnunciosService) { }

  ngOnInit() {
    this.asignaturaService.getAll().subscribe(data => {
      this.asignaturas = data;
    });

    if (!!this.anuncio) {
      this.announceForm.patchValue({ id : this.anuncio.id});
      this.announceForm.patchValue({ titulo : this.anuncio.titulo});
      this.announceForm.patchValue({ contenido : this.anuncio.contenido});
      this.announceForm.patchValue({ importancia : this.anuncio.importancia});
    }
  }

  async dismiss(info) {
    await this.modalCtrl.dismiss({
      data: info
    });
  }
  onSubmit() {
    const anuncio = {
      id : this.announceForm.value.id,
      titulo : this.announceForm.value.titulo,
      contenido : this.announceForm.value.contenido,
      importancia : this.announceForm.value.importancia
    };

    this.announceService.create(anuncio).subscribe(data => this.dismiss(data));
  }
}
