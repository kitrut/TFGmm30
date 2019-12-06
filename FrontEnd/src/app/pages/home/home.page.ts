import { Component, OnInit } from '@angular/core';
import { AnunciosService } from 'src/app/services/anuncios.service';
import { ModalController } from '@ionic/angular';
import { AnnounceModalComponent } from './announce-modal/announce-modal.component';
import { Anuncio } from 'src/app/models/anuncio';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  anuncios = [];
  constructor(private anuncioService: AnunciosService, public modalController: ModalController) {}

  ngOnInit(): void {
    this.anuncioService.getAll().subscribe(data => this.anuncios = data);
  }

  async createAnnounce(announce: Anuncio) {
    const modal = await this.modalController.create({
      component: AnnounceModalComponent,
      componentProps: {
        anuncio: announce
      }
    });
    modal.onWillDismiss().then((info) => info ? this.ngOnInit() : null);

    return await modal.present();
  }
}
