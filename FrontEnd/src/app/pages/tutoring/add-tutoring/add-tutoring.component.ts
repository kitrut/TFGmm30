import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '@services/asignaturas.service';
import { Asignatura } from '@models/asignatura';

@Component({
  selector: 'app-add-tutoring',
  templateUrl: './add-tutoring.component.html',
  styleUrls: ['./add-tutoring.component.scss'],
})
export class AddTutoringComponent implements OnInit {

  asignaturas: Asignatura[];
  constructor(
    public asignaturaService: AsignaturasService) { }

  ngOnInit() {
    this.asignaturaService.findAll().subscribe(data => this.asignaturas = data);
  }

}
