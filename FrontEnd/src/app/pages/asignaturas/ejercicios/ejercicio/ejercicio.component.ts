import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '@models/exercise';
import { ExerciseType } from '@models/exercise-type';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
})
export class EjercicioComponent implements OnInit {

  @Input() exercise: Exercise;
  EXERCISE_TYPE = ExerciseType;

  constructor() { }

  ngOnInit() { }

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
