import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  id: string;
  profesor:Usuario={id:null,nombre:null,apellidos:null,email:null};

  constructor(private route: ActivatedRoute, private profesorService:ProfesoresService) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.profesorService.getById(this.id).subscribe(data=>this.profesor = data);
  }

}
