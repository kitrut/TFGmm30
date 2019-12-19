import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Profesor } from 'src/app/models/usuario';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage {

  asignatura: Asignatura = new Asignatura();
  profesores: Profesor[];
  profesorAsignadoID: string;

  constructor(private route: ActivatedRoute,
              private asginaturasService: AsignaturasService,
              private profService: ProfesoresService) { }

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
}
