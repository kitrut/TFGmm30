import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiales } from '@models/materiales';
import { MaterialesService } from '@services/materiales.service';
import { Exercise } from '@models/exercise';
import { ExerciseType } from '@models/exercise-type';
import { ClassNotesService } from '@services/class-notes.service';
import { ClassNotes } from '@models/class-notes';

@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.page.html',
  styleUrls: ['./view-material.page.scss'],
})
export class ViewMaterialPage implements OnInit {
  asignaturaId;
  titulo = '';
  mode = 'preview';
  material: Materiales = new Materiales(null, null, null);
  content = this.material.contenido;
  exercices: Exercise[] = [];
  classNotes: ClassNotes;
  classNotesContent = '';
  EXERCISE_TYPE = ExerciseType;

  options = {
    resizable: true,
    enablePreviewContentClick: true,
    showLineNumbers: false

  };
  constructor(private route: ActivatedRoute, private materialesService: MaterialesService, private classNotesService: ClassNotesService) { }

  ngOnInit() {
    this.asignaturaId = this.route.snapshot.paramMap.get('id');
    const idMat = this.route.snapshot.paramMap.get('idMat');
    this.materialesService.findById(idMat).subscribe(
      data => {
        this.material = data;
        this.titulo = data.titulo;
        this.content = data.contenido;
      }
    );

    this.materialesService.getExercisesOfMaterial(idMat).subscribe(
      exercises => {
        this.exercices = exercises;
      }
    );

    this.classNotesService.findByMaterialId(idMat).subscribe(
      classNotes => {
        this.classNotes = {
          id: null,
          material: idMat,
          user: null,
          content: this.content
        };
        this.classNotesContent = classNotes.content;
      }, error => {
        this.classNotesContent = this.content;
      }
    );
  }

  saveClassNotes() {
    if ( this.classNotes ) {
      this.classNotes.content = this.classNotesContent;
    } else {
      this.classNotes = {
        id: null,
        material: this.route.snapshot.paramMap.get('idMat'),
        user: null,
        content: this.classNotesContent
      };
    }

    this.classNotesService.create(this.classNotes).subscribe(
      data => {
        this.classNotes = data;
      }
    );
  }

  editorLoad($event) {
    console.log($event);
  }

}
