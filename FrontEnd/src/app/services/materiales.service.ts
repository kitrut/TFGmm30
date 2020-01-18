import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materiales } from '../models/materiales';
import { Constantes } from '../global/constantes';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor(private http: HttpClient) { }

  getMaterial(idMat: string): Observable<Materiales> {
    return this.http.get<Materiales>(Constantes.URL_MATERIALES + '/' + idMat, {});
  }

  deleteMaterial(idMat: string): Observable<any> {
    return this.http.delete(Constantes.URL_MATERIALES + '/' + idMat, {});
  }

  createMaterial(sectionId: string, mat: Materiales): Observable<Section> {
    return this.http.post<Section>(Constantes.URL_SECTIONS + '/' + sectionId + '/materiales' , mat, {});
  }

  updateMaterial(mat: Materiales): Observable<Materiales> {
    return this.http.put<Materiales>(Constantes.URL_MATERIALES, mat, {});
  }
}
