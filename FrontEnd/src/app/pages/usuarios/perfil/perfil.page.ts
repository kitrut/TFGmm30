import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Usuario, Profesor } from 'src/app/models/usuario';
import { Asignatura } from 'src/app/models/asignatura';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id: string;
  profesor:Profesor={id:null,nombre:null,apellidos:null,email:null,asignaturas:[]};
  asignaturas:Asignatura[];

  constructor(private route: ActivatedRoute, private profesorService:ProfesoresService) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profesorService.getById(this.id).subscribe(data=>this.profesor = data);
    this.profesorService.getAsignaturas(this.id).subscribe(data=>this.asignaturas=data);
  }

}
