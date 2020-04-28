import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Materiales } from '@models/materiales';
import { Constantes } from '../global/constantes';
import { Section } from '@models/section';
import { Exercise } from '@models/exercise';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor(private http: HttpClient) { }

  findById(materialId: string): Observable<Materiales> {
    return this.http.get<Materiales>(Constantes.URL_MATERIALES + '/' + materialId, {});
  }

  getExercisesOfMaterial(materialId: string): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(Constantes.URL_MATERIALES + '/' + materialId + '/exercises', {});
  }

  createExercise(materialId: string, exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(Constantes.URL_MATERIALES + '/' + materialId + '/exercises', exercise, {});
  }

  delete(materialId: string): Observable<any> {
    return this.http.delete(Constantes.URL_MATERIALES + '/' + materialId, {});
  }

  create(sectionId: string, materiales: Materiales): Observable<Section> {
    return this.http.post<Section>(Constantes.URL_SECTIONS + '/' + sectionId + '/materiales' , materiales, {});
  }

  update(materiales: Materiales): Observable<Materiales> {
    return this.http.put<Materiales>(Constantes.URL_MATERIALES, materiales, {});
  }
}
