import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignaturas:Asignatura[]=[];
  asignaturasTodas:Asignatura[]=[];

  constructor(private asignService:AsignaturasService,private router:Router) { }

  ngOnInit() {
    this.asignService.getAll().subscribe(
      data=>{this.asignaturas=this.asignaturasTodas=data;}
    )
  }

  detalles(id){
    this.router.navigateByUrl('/asignaturas/'+id);
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
