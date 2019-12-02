import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Router } from '@angular/router';

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

  constructor(private asignaturasService: AsignaturasService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const asig: Asignatura = {
      id: null,
      nombre: this.asignaturaForm.value.nombre,
      descripcion: this.asignaturaForm.value.descripcion,
      curso: this.asignaturaForm.value.curso,
      profesor: null,
      materiales: null,
      matriculas : null
    };

    this.asignaturasService.create(asig).subscribe(
      data => this.router.navigateByUrl('/asignaturas/' + data.id),
      err => console.error(err)
    );
  }
}
