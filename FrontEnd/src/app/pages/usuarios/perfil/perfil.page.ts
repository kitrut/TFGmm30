import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profesor } from '@models/usuario';
import { Asignatura } from '@models/asignatura';
import { ProfesoresService } from '@services/profesores.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id: string;
  profesor: Profesor = {id: null, nombre: null, apellidos: null, email: null, asignaturas: []};
  asignaturas: Asignatura[];
  p;
  p2;

  constructor(private route: ActivatedRoute, private profesorService: ProfesoresService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profesorService.findById(this.id).subscribe(data => this.profesor = data);
    this.profesorService.getAsignaturas(this.id).subscribe(data => this.asignaturas = data);
  }

}
