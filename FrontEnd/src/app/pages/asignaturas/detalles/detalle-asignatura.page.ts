import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Materiales } from 'src/app/models/materiales';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  asignatura:Asignatura=new Asignatura();
  materiales:Materiales[]=[];
  constructor(private router:Router,private route: ActivatedRoute,private asginaturasService:AsignaturasService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.asginaturasService.getById(id).subscribe(
      data=>{
        
        this.asignatura = data
    });
    this.asginaturasService.getMateriales(id).subscribe(
      data =>{
        this.materiales = data.sort((a, b) => (a.titulo > b.titulo) ? 1 : -1)
      }
    )
    
    
  }

  addMaterial(){
    this.router.navigateByUrl("/asignaturas/"+this.asignatura.id+"/addMaterial");
  }

  verMaterial(id){
    console.log(id)
    this.router.navigateByUrl("/asignaturas/"+this.asignatura.id+"/materiales/"+id);
  }

}
