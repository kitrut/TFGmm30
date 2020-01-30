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

  getMaterial(materialId: string): Observable<Materiales> {
    return this.http.get<Materiales>(Constantes.URL_MATERIALES + '/' + materialId, {});
  }

  getExercisesOfMaterial(materialId: string): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(Constantes.URL_MATERIALES + '/' + materialId + '/exercises', {});
  }

  deleteMaterial(materialId: string): Observable<any> {
    return this.http.delete(Constantes.URL_MATERIALES + '/' + materialId, {});
  }

  createMaterial(sectionId: string, materiales: Materiales): Observable<Section> {
    return this.http.post<Section>(Constantes.URL_SECTIONS + '/' + sectionId + '/materiales' , materiales, {});
  }

  updateMaterial(materiales: Materiales): Observable<Materiales> {
    return this.http.put<Materiales>(Constantes.URL_MATERIALES, materiales, {});
  }
}
