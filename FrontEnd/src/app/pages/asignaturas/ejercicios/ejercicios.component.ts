import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { IonReorderGroup, AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { GeneradorEjerciciosComponent } from './generador-ejercicios/generador-ejercicios.component';
import { Section } from 'src/app/models/section';
import { SectionService } from 'src/app/services/section.service';
import { MaterialesService } from 'src/app/services/materiales.service';
import { AddSectionComponent } from '../add-section/add-section.component';

const groupBy = function groupBy2<T extends any, K extends keyof T>(array: T[], key: K | ((obj: T) => number)): Record<string, T[]> {
  const keyFn = key instanceof Function ? key : (obj: T) => obj[key];
  return array.reduce(
    (objectsByKeyValue, obj) => {
      const value = keyFn(obj);
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    },
    {} as Record<string, T[]>
  );
};

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss'],
})
export class EjerciciosComponent implements OnInit {

  @ViewChild(IonReorderGroup, { static: false }) reorderGroup: IonReorderGroup;
  @Input() asignatura: Asignatura = new Asignatura();
  id: any;

  secciones = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private asignaturasService: AsignaturasService,
              private materialesService: MaterialesService,
              private sectionsService: SectionService,
              private alertController: AlertController,
              public modalController: ModalController) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData(this.id);
  }

  getData(id) {
    this.sectionsService.getSections(id).subscribe(
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

  addMaterial() {
    this.router.navigateByUrl('/asignaturas/' + this.asignatura.id + '/addMaterial');
  }

  editMaterial(idMat) {
    this.router.navigateByUrl('/asignaturas/' + this.asignatura.id + '/update/' + idMat);
  }
  deleteMaterial(idMat) {
    this.materialesService.deleteMaterial(idMat).subscribe(data => this.getData(this.asignatura.id));
  }

  async addSection() {
    const modal = await this.modalController.create({
      component: AddSectionComponent,
      componentProps: {
        id : this.asignatura.id
      }
    });
    await modal.present();
    await modal.onWillDismiss();
    this.getData(this.asignatura.id);
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: GeneradorEjerciciosComponent,

    });
    return await modal.present();
  }

  verMaterial(id) {
    this.router.navigateByUrl('/asignaturas/' + this.asignatura.id + '/materiales/' + id);
  }

}
