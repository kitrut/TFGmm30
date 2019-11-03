import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-checks',
  templateUrl: './ejercicio-checks.component.html',
  styleUrls: ['./ejercicio-checks.component.scss'],
})
export class EjercicioChecksComponent implements OnInit {

  @Input('pregunta') pregunta: string;
  @Input('opciones') opciones: string[];
  
  constructor() { }

  ngOnInit() {}

}
