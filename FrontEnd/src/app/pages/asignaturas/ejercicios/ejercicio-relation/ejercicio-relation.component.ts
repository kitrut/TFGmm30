import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-relation',
  templateUrl: './ejercicio-relation.component.html',
  styleUrls: ['./ejercicio-relation.component.scss'],
})
export class EjercicioRelationComponent implements OnInit {

  @Input('pregunta') pregunta: string;
  @Input('opciones1') opciones1: string[];
  @Input('opciones2') opciones2: string[];
  
  constructor() { }

  ngOnInit() {}

}
