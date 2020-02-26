import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Asignatura } from '@models/asignatura';
import { Profesor, Usuario } from '@models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(Constantes.URL_ASIGNATURAS, {});
  }

  findById(id: string): Observable<Asignatura> {
    return this.http.get<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + id, {});
  }

  create(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS, asignatura, {});
  }

  delete(idAsignatura: string): Observable<any> {
    return this.http.delete(Constantes.URL_ASIGNATURAS + '/' + idAsignatura);
  }

  asignProfesor(idAsignatura: string, idProfesor: string): Observable<any> {
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/profesor/' + idProfesor, {});
  }

  getProfesor(idAsignatura: string): Observable<Profesor> {
    return this.http.get<Profesor>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/profesor', {});
  }

  getMatriculados(idAsignatura: string): Observable<any> {
    return this.http.get<Usuario>(Constantes.URL_ASIGNATURAS + '/' + idAsignatura + '/alumnos', {});
  }

  getMatriculasAlumno(idAlumno: string): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(Constantes.URL_ALUMNOS + '/' + idAlumno + '/asignaturas', {});
  }

}
