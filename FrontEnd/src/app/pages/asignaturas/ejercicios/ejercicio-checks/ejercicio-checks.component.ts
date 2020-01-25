import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-checks',
  templateUrl: './ejercicio-checks.component.html',
  styleUrls: ['./ejercicio-checks.component.scss'],
})
export class EjercicioChecksComponent implements OnInit {

  @Input() pregunta: string;
  @Input() opciones: string[];

  constructor() { }

  ngOnInit() {}

}
