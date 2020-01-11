import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Materiales } from '../models/materiales';
import { Profesor } from '../models/usuario';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(Constantes.URL_ASIGNATURAS, {});
  }

  getById(id: string): Observable<Asignatura> {
    return this.http.get<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + id, {});
  }

  create(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS, asignatura, {});
  }

  deleteAsignatura(idAsignatura: string): Observable<any> {
    return this.http.delete(Constantes.URL_ASIGNATURAS + '/' + idAsignatura);
  }

  createMaterial(id: string, mat: Materiales): Observable<Asignatura> {
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + id + '/materiales', mat, {});
  }

  updateMaterial(id: string, mat: Materiales): Observable<Asignatura> {
    return this.http.put<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + id + '/materiales', mat, {});
  }
  deleteMaterial(idAsignatura: string, idMaterial: string): Observable<any> {
    return this.http.delete(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/materiales/' + idMaterial, {});
  }

  asignProfesor(idAsignatura: string, idProfesor: string): Observable<any> {
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/profesor/' + idProfesor, {});
  }
  getProfesor(idAsignatura: string): Observable<Profesor> {
    return this.http.get<Profesor>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/profesor', {});
  }

  getMaterial(idAsig: string, idMat: string): Observable<Materiales> {
    return this.http.get<Materiales>(Constantes.URL_ASIGNATURAS + '/' + idAsig + '/materiales/' + idMat, {});
  }
}
