import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  alumnos=[];
  alumnosFiltrados=[];
  buscado="";

  constructor(private alumnoService:AlumnosService,private router: Router) { }

  ngOnInit() {
    this.alumnoService.getAll().subscribe(
      data=>this.alumnos =  this.alumnosFiltrados = data,
      error=>this.alumnos=[]
    );
  }

  perfil(id){
    this.router.navigateByUrl('/alumnos/'+id);
  }

  buscar(){
    let info = this.buscado.toLowerCase();
    if(this.buscado=="")
      this.alumnosFiltrados=this.alumnos;
    else{
      this.alumnosFiltrados=this.alumnos.filter(data=>{
        return (data.nombre.toLowerCase().includes(info) || data.apellidos.toLowerCase().includes(info) ||data.email.toLowerCase().includes(info));
      })
    }
  }

}
