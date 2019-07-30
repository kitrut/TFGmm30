import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {

  profesores=[];
  buscado="";
  
  constructor(private profesorService:ProfesoresService,private router: Router) { }

  ngOnInit() {
    this.profesores = this.profesorService.getAll();
  }

  perfil(id){
    this.router.navigateByUrl('/profesores/'+id);
  }

  buscar(){
    this.profesores = this.profesorService.search(this.buscado.toLowerCase());
  }

}
