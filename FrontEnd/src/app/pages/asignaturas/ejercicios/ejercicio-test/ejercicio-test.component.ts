import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ejercicio-test',
  templateUrl: './ejercicio-test.component.html',
  styleUrls: ['./ejercicio-test.component.scss'],
})
export class EjercicioTestComponent implements OnInit {

  @Input() pregunta: string;
  @Input() opciones: string[];
  @Output() opcionSeleccionada: string;

  constructor() { }
  ngOnInit() {}
}
