import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup, AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AddSectionComponent } from '../add-section/add-section.component';
import { MaterialesService } from '@services/materiales.service';
import { SectionService } from '@services/section.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss'],
})
export class EjerciciosComponent implements OnInit {

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  id: any;

  secciones = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private materialesService: MaterialesService,
              private sectionsService: SectionService,
              private alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData(this.id);
  }

  getData(id) {
    this.sectionsService.findAllByAsignaturaId(id).subscribe(
      data => {
        // console.log(data.sections)
        this.secciones = data;
      }
    );
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  addMaterial(idSection: string) {
    this.router.navigate(['asignaturas', this.id, 'addMaterial'], {state: {sectionId: idSection}});
  }

  editMaterial(idMat) {
    this.router.navigateByUrl('/asignaturas/' + this.id + '/update/' + idMat);
  }
  deleteMaterial(idMat) {
    this.materialesService.delete(idMat).subscribe(data => this.getData(this.id));
  }

  async addSection() {
    const modal = await this.modalController.create({
      component: AddSectionComponent,
      componentProps: {
        id : this.id
      }
    });
    await modal.present();
    await modal.onWillDismiss();
    this.getData(this.id);
  }

  async presentAlertConfirm(idMat) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>No es recuperable</strong>!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.deleteMaterial(idMat);
          }
        }
      ]
    });

    await alert.present();
  }

  moveMat(mat, sec, numb) {
    const mats = this.secciones[this.secciones.indexOf(sec)].materiales;
    mats.splice(mats.indexOf(mat), mats.indexOf(mat) + 1);
    this.secciones[this.secciones.indexOf(sec) + numb].materiales.push(mat);
  }

  verMaterial(id) {
    this.router.navigateByUrl('/asignaturas/' + this.id + '/materiales/' + id);
  }

}
