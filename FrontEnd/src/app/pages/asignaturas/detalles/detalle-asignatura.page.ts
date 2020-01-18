import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Profesor } from 'src/app/models/usuario';

@Component({
  selector: 'app-detalle-asignatura-page',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage {

  constructor(private route: ActivatedRoute) { }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
  }
}
