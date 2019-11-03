import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio-reorder',
  templateUrl: './ejercicio-reorder.component.html',
  styleUrls: ['./ejercicio-reorder.component.scss'],
})
export class EjercicioReorderComponent implements OnInit {

  @Input('pregunta') pregunta: string;
  @Input('opciones') opciones: string[];

  constructor() { }

  ngOnInit() {}

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

}
