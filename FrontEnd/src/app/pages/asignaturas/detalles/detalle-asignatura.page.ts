import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Materiales } from 'src/app/models/materiales';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Usuario, Profesor } from 'src/app/models/usuario';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage {

  asignatura: Asignatura = new Asignatura();
  materiales: Materiales[] = [];
  profesores: Profesor[];
  profesorAsignadoID: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private asginaturasService: AsignaturasService,
              private profService: ProfesoresService,
              private alertController: AlertController) { }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getData(id);
  }

  getData(id) {
    this.asginaturasService.getById(id).subscribe(
      data => {
        this.asignatura = data;
        this.asginaturasService.getProfesor(id).subscribe(
          data2 => {
            if (data2) {
              this.asignatura.profesor = data2;
            }
            if (this.asignatura.profesor == null) {
              this.mostrarProfesores();
            }
          }
        );
        this.asginaturasService.getMateriales(id).subscribe(
          data3 => {
            this.materiales = data3.sort((a, b) => (a.titulo > b.titulo) ? 1 : -1);
          }
        );

      });
  }

  mostrarProfesores() {
    this.profService.getAll().subscribe(data => this.profesores = data);
  }

  asignarProfesor() {
    this.asginaturasService.asignProfesor(this.asignatura.id, this.profesorAsignadoID).subscribe(
      data => {
        this.asignatura = data;
        this.getData(this.asignatura.id);
      }
    );
  }

  addMaterial() {
    this.router.navigateByUrl('/asignaturas/' + this.asignatura.id + '/addMaterial');
  }
  editMaterial(idMat) {
    this.router.navigateByUrl('/asignaturas/' + this.asignatura.id + '/update/' + idMat);
  }
  deleteMaterial(idMat) {
    this.asginaturasService.deleteMaterial(this.asignatura.id, idMat).subscribe(
      data => this.getData(this.asignatura.id)
    );
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
          handler: (blah) => console.log('Confirm Cancel: blah')
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => this.deleteMaterial(idMat)
        }
      ]
    });

    await alert.present();
  }

  verMaterial(id) {
    this.router.navigateByUrl('/asignaturas/' + this.asignatura.id + '/materiales/' + id);
  }
}
