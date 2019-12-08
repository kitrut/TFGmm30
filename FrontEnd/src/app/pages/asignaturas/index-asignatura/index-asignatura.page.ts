import { Component, ViewChild } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index-asignaturas',
  templateUrl: './index-asignatura.page.html',
  styleUrls: ['./index-asignatura.page.scss'],
})
export class IndexAsignaturaPage {

  asignaturas: Asignatura[] = [];
  asignaturasTodas: Asignatura[] = [];

  displayedColumns: string[] = ['name', 'course', 'description', 'actions'];
  dataSource = new MatTableDataSource<Asignatura>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private authService: AuthService,
              private asignService: AsignaturasService,
              private profService: ProfesoresService,
              private router: Router) { }

  ionViewWillEnter() {
      this.getData();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  getData() {
    if(this.authService.usuario === null){
      this.authService.user.subscribe(() => this.getData());
    }
    if (this.authService.isAdmin()) {
      this.asignService.getAll().subscribe(data => {
        this.dataSource = new MatTableDataSource<Asignatura>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else if (this.authService.isProfesor()) {
      this.profService.getAsignaturas(this.authService.usuario.id).subscribe(
        data => {
          this.dataSource = new MatTableDataSource<Asignatura>(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      }
      );
    } else {
      console.error('No es nada');
    }
  }

  detalles(id) {
    this.router.navigateByUrl('/asignaturas/' + id);
  }
  borrar(asignatura) {
    this.asignService.deleteAsignatura(asignatura.id).subscribe(
      () => {
        this.getData();
      }
    );
  }
  crear() {
    this.router.navigateByUrl('/asignaturas/create');
  }
  filtrar(value) {
    if (value.detail.value === 'Todos') {
      this.asignaturas = this.asignaturasTodas;
      return;
    }
    this.asignaturas = this.asignaturasTodas.filter(data => {
      return data.curso === value.detail.value;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
