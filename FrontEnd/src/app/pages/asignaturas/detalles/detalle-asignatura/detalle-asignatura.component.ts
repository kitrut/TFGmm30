import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Asignatura } from '@models/asignatura';
import { Profesor, Usuario } from '@models/usuario';
import { AsignaturasService } from '@services/asignaturas.service';
import { ProfesoresService } from '@services/profesores.service';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.component.html',
  styleUrls: ['./detalle-asignatura.component.scss'],
})
export class DetalleAsignaturaComponent implements OnInit {

  asignatura: Asignatura = new Asignatura();
  profesores: Profesor[];
  profesorAsignadoID: string;

  usuariosMatriculados = new MatTableDataSource<Usuario>();

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
    this.asginaturasService.findById(id).subscribe(
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
            this.usuariosMatriculados = new MatTableDataSource<Usuario>(matriculados);
            this.usuariosMatriculados.paginator = this.paginator;
          }
        );
      });
  }

  mostrarProfesores() {
    this.profService.findAll().subscribe(data => this.profesores = data);
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
