import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-profesores',
  templateUrl: './index-profesores.page.html',
  styleUrls: ['./index-profesores.page.scss'],
})
export class IndexProfesoresPage implements OnInit {

  profesores=[];
  profesoresFiltrados=[];
  buscado="";
  
  constructor(private profesorService:ProfesoresService,private router: Router) { }

  ngOnInit() {
    this.profesorService.getAll().subscribe(
      data=>this.profesores =  this.profesoresFiltrados = data,
      error=>this.profesores=[]
    );
  }

  perfil(id){
    this.router.navigateByUrl('/profesores/'+id);
  }

  buscar(){
    let info = this.buscado.toLowerCase();
    if(this.buscado=="")
      this.profesoresFiltrados=this.profesores;
    else{
      this.profesoresFiltrados=this.profesores.filter(data=>{
        return (data.nombre.toLowerCase().includes(info) || data.apellidos.toLowerCase().includes(info) ||data.email.toLowerCase().includes(info));
      })
    }
  }

}
