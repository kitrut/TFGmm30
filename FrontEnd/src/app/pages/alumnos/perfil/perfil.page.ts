import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Profesor, Usuario } from 'src/app/models/usuario';
import { Asignatura } from 'src/app/models/asignatura';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id: string;
  profesor:Usuario={id:null,nombre:null,apellidos:null,email:null};
  asignaturas:Asignatura[];

  constructor(private route: ActivatedRoute, private alumnoService:AlumnosService) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.alumnoService.getById(this.id).subscribe(data=>this.profesor = data);
  }

}
