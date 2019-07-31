import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  asignatura:{}=null;
  constructor(private route: ActivatedRoute,private asginaturasService:AsignaturasService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.asginaturasService.getById(id).subscribe(data=>this.asignatura = data);
  }

}
