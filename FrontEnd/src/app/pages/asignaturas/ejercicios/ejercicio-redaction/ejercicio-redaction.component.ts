import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-redaction',
  templateUrl: './ejercicio-redaction.component.html',
  styleUrls: ['./ejercicio-redaction.component.scss'],
})
export class EjercicioRedactionComponent implements OnInit {

  @Input('pregunta') pregunta: string;
  constructor() { }

  ngOnInit() {}

}
