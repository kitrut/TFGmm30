import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfesoresService } from '@services/profesores.service';
import { AlumnosService } from '@services/alumnos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios = [];
  usuariosFiltrados = [];
  valorSegmento = 'profesores';
  buscado = '';
  p;

  constructor(
    private profesorService: ProfesoresService,
    private alumnoService: AlumnosService,
    private router: Router
    ) {

    }

  ngOnInit() {
    this.getProfesores();
  }

  getProfesores() {
    this.profesorService.getAll().subscribe(
      data => this.usuarios =  this.usuariosFiltrados = data,
      error => this.usuarios = []
    );
  }

  getAlumnos() {
    this.alumnoService.getAll().subscribe(
      data => this.usuarios =  this.usuariosFiltrados = data,
      error => this.usuarios = []
    );
  }

  getOthers() {
    this.alumnoService.getOthers().subscribe(
      data => this.usuarios =  this.usuariosFiltrados = data,
      error => this.usuarios = []
    );
  }

  perfil(id) {
    this.router.navigateByUrl('/usuarios/' + id);
  }

  segmentChanged(event: any) {
    switch (event.target.value) {
      case 'profesores': this.getProfesores(); break;
      case 'alumnos': this.getAlumnos(); break;
      case 'otros': this.getOthers(); break;
      default: this.usuarios = this.usuariosFiltrados = [];
    }
  }

  buscar() {
    const info = this.buscado.toLowerCase();
    if (this.buscado === '') {
      this.usuariosFiltrados = this.usuarios;
    } else {
      this.usuariosFiltrados = this.usuarios.filter(data => {
        return (
          data.nombre.toLowerCase().includes(info)
          || data.apellidos.toLowerCase().includes(info)
          || data.email.toLowerCase().includes(info));
      });
    }
  }


}
