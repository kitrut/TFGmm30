import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '@services/asignaturas.service';
import { Asignatura } from '@models/asignatura';
import { TutoringService } from '@services/tutoring.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-tutoring',
  templateUrl: './add-tutoring.component.html',
  styleUrls: ['./add-tutoring.component.scss'],
})
export class AddTutoringComponent implements OnInit {

  asignaturas: Asignatura[];

  tutoringForm = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    tutoringMessages: new FormArray([
        new FormGroup({
          message: new FormControl('', Validators.required)
        })
    ]),
    asignatura: new FormControl(null)
  });

  constructor(
    public asignaturaService: AsignaturasService,
    public tutoringService: TutoringService,
    public router: Router
    ) { }

  ngOnInit() {
    this.asignaturaService.findAll().subscribe(data => this.asignaturas = data);
  }

  onSubmit() {
    this.tutoringService.create(this.tutoringForm.value).subscribe(
      tutoring => this.router.navigateByUrl('tutoring')
    );
  }

}
