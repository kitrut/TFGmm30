import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Materiales } from '../models/materiales';
import { Profesor } from '../models/usuario';
import { Section } from '../models/section';
import { Matricula } from '../models/matricula';

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

  asignProfesor(idAsignatura: string, idProfesor: string): Observable<any> {
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/profesor/' + idProfesor, {});
  }
  getProfesor(idAsignatura: string): Observable<Profesor> {
    return this.http.get<Profesor>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/profesor', {});
  }

  getMatriculados(idAsignatura: string): Observable<any> {
    return this.http.get<Profesor>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/matriculas', {});
  }

  getMatriculasAlumno(idAlumno: string): Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(Constantes.URL_ALUMNOS + '/' + idAlumno + '/asignaturas', {});
  }

}
