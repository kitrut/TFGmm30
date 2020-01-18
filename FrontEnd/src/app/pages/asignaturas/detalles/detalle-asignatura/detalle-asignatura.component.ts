import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { Profesor } from 'src/app/models/usuario';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.scss'],
})
export class DetalleAsignaturaComponent implements OnInit{

  asignatura: Asignatura = new Asignatura();
  profesores: Profesor[];
  profesorAsignadoID: string;

  constructor(private route: ActivatedRoute,
              private asginaturasService: AsignaturasService,
              private profService: ProfesoresService) { }

              ngOnInit() {
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
