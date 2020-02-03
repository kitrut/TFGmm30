import { Component, OnInit } from '@angular/core';
import { ExerciseType } from '@models/exercise-type';
import { Exercise, ExerciseOption } from '@models/exercise';
import { MaterialesService } from '@services/materiales.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-generator',
  templateUrl: './exercise-generator.component.html',
  styleUrls: ['./exercise-generator.component.scss'],
})
export class ExerciseGeneratorComponent implements OnInit {

  EXERCISE_TYPE = ExerciseType;
  exerciseType: ExerciseType;
  pregunta = '';
  opciones: ExerciseOption[] = [];
  nuevaOpt = '';
  materialId: string;

  constructor(private materialService: MaterialesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.materialId = this.route.snapshot.paramMap.get('id');
   }

  addOption() {
    this.opciones.push({option: this.nuevaOpt, answer: 0});
  }

  removeOption(option: ExerciseOption) {
    this.opciones.splice(this.opciones.indexOf(option), 1);
  }

  checkOpt(opt: ExerciseOption) {
    opt.answer = opt.answer === 0 ? 1 : 0;
  }

  createEjer() {
   const exerciseToCreate = {question: this.pregunta, exerciseOptions: this.opciones, exerciseType: this.exerciseType};

   this.materialService.createExercise(this.materialId, exerciseToCreate).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
