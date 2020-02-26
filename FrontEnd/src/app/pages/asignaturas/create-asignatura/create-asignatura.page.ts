import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignaturasService } from '@services/asignaturas.service';
import { Asignatura } from '@models/asignatura';

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
    this.asignaturasService.create(this.asignaturaForm.value).subscribe(
      data => this.router.navigateByUrl('/asignaturas/' + data.id),
      err => console.error(err)
    );
  }
}
