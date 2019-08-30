import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  asignatura:Asignatura=new Asignatura();
  constructor(private router:Router,private route: ActivatedRoute,private asginaturasService:AsignaturasService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.asginaturasService.getById(id).subscribe(data=>this.asignatura = data);
  }

  addMaterial(){
    this.router.navigateByUrl("/asignaturas/"+this.asignatura.id+"/addMaterial");
  }

  verMaterial(id){
    console.log(id)
    this.router.navigateByUrl("/asignaturas/"+this.asignatura.id+"/materiales/"+id);
  }

}
