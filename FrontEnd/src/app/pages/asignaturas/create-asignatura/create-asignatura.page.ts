import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';

@Component({
  selector: 'app-create-asignatura',
  templateUrl: './create-asignatura.page.html',
  styleUrls: ['./create-asignatura.page.scss'],
})
export class CreateAsignaturaPage implements OnInit {

  asignaturaForm = new FormGroup({
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    curso: new FormControl('')
  });

  constructor(private asignaturasService:AsignaturasService) { }

  ngOnInit() {
  }

  onSubmit() {
    let asig:Asignatura={
      id:null,
      nombre:this.asignaturaForm.value.nombre,
      descripcion:this.asignaturaForm.value.descripcion,
      curso:this.asignaturaForm.value.curso
    }

    this.asignaturasService.create(asig).subscribe(
      data => console.log(data),
      err => console.error(err)
    )
    // TODO: Use EventEmitter with form value
    //console.warn(this.asignaturaForm.value);
  }
}
