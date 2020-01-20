import { Component, OnInit, ViewChild } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { Profesor } from 'src/app/models/usuario';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Matricula } from 'src/app/models/matricula';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.scss'],
})
export class DetalleAsignaturaComponent implements OnInit{

  asignatura: Asignatura = new Asignatura();
  profesores: Profesor[];
  profesorAsignadoID: string;

  matriculas = new MatTableDataSource<Matricula>();

  displayedColumns = ['name', 'surname', 'email'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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
        this.asginaturasService.getMatriculados(id).subscribe(
          matriculados => {
            this.matriculas = new MatTableDataSource<Matricula>(matriculados);
            this.matriculas.paginator = this.paginator;
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
