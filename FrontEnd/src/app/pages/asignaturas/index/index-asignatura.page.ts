import { Component } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Router } from '@angular/router';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-index-asignaturas',
  templateUrl: './index-asignatura.page.html',
  styleUrls: ['./index-asignatura.page.scss'],
})
export class IndexAsignaturaPage {

  asignaturas:Asignatura[]=[];
  asignaturasTodas:Asignatura[]=[];

  constructor(private authService:AuthService, private asignService:AsignaturasService,private profService:ProfesoresService,private router:Router) { }

  ionViewWillEnter() {
      this.getData()
  }
//TODO remplazar el get asignaturas del profesor por el id del usuario
  getData(){
    if(this.authService.isAdmin()){
      this.asignService.getAll().subscribe(data=>{this.asignaturas=this.asignaturasTodas=data;});
    }else if(this.authService.isProfesor()){
      this.profService.getAsignaturas(this.authService.usuario.id).subscribe(
        data=>{this.asignaturas=this.asignaturasTodas=data;}
      )
    }else{
      console.error("No es nada")
    }
  }

  detalles(id){
    this.router.navigateByUrl('/asignaturas/'+id);
  }
  borrar(asignatura){
    this.asignService.deleteAsignatura(asignatura.id).subscribe(
      ()=>{
        this.getData()
      }
    )
  }
  crear(){
    this.router.navigateByUrl('/asignaturas/create');
  }
  filtrar(value){
    if(value.detail.value=="Todos"){
      this.asignaturas = this.asignaturasTodas;
      return;
    }
    this.asignaturas=this.asignaturasTodas.filter(data=>{
      return data.curso==value.detail.value;
    })
  }

}
