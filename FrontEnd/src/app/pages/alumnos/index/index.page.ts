import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  profesores=[];
  profesoresFiltrados=[];
  buscado="";

  constructor(private alumnoService:AlumnosService,private router: Router) { }

  ngOnInit() {
    this.alumnoService.getAll().subscribe(
      data=>this.profesores =  this.profesoresFiltrados = data,
      error=>this.profesores=[]
    );
  }

  perfil(id){
    this.router.navigateByUrl('/alumnos/'+id);
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
