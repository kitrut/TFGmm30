import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../global/constantes';
import { Observable } from 'rxjs';
import { Profesor } from '@models/usuario';
import { Asignatura } from '@models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(Constantes.URL_PROFESORES, {});
  }

  findById(id): Observable<Profesor> {
    return this.http.get<Profesor>(Constantes.URL_PROFESORES + '/' + id, {});
  }

  getAsignaturas(id): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(Constantes.URL_PROFESORES + '/' + id + '/asignaturas', {});
  }
}
