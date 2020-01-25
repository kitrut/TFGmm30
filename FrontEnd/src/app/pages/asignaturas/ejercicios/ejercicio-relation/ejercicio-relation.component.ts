import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-relation',
  templateUrl: './ejercicio-relation.component.html',
  styleUrls: ['./ejercicio-relation.component.scss'],
})
export class EjercicioRelationComponent implements OnInit {

  @Input() pregunta: string;
  @Input() opciones1: string[];
  @Input() opciones2: string[];

  constructor() { }

  ngOnInit() {}

}
