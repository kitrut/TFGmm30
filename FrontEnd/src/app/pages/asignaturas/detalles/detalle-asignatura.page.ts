import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Materiales } from 'src/app/models/materiales';
import { ProfesoresService } from 'src/app/services/profesores.service';
import { Usuario, Profesor } from 'src/app/models/usuario';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  asignatura:Asignatura=new Asignatura();
  materiales:Materiales[]=[];
  profesores:Profesor[];
  profesorAsignadoID:number;
  constructor(private router:Router,private route: ActivatedRoute,private asginaturasService:AsignaturasService,private profService:ProfesoresService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getData(id)
    this.asginaturasService.getMateriales(id).subscribe(
      data =>{
        this.materiales = data.sort((a, b) => (a.titulo > b.titulo) ? 1 : -1)
      }
    )    
  }

  getData(id){
    this.asginaturasService.getById(id).subscribe(
      data=>{        
        this.asignatura = data
        this.asginaturasService.getProfesor(id).subscribe(
          data =>{
            if(data)
              this.asignatura.profesor = data;
            if(this.asignatura.profesor==null){
              this.mostrarProfesores();
            }
          }
        )
        
    });
  }

  mostrarProfesores(){
    this.profService.getAll().subscribe(
      data=>{
        this.profesores = data;
      }
    )
  }

  asignarProfesor(){
    this.asginaturasService.asignProfesor(this.asignatura.id,this.profesorAsignadoID).subscribe(
      data=>{
        this.asignatura=data;
        this.getData(this.asignatura.id)
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
