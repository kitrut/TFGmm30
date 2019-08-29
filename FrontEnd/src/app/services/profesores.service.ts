import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../global/constantes';
import { Profesor } from '../models/usuario';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Profesor[]>{
    return this.http.get<Profesor[]>(Constantes.URL_PROFESORES,{});
  }

  getById(id):Observable<Profesor>{
    return this.http.get<Profesor>(Constantes.URL_PROFESORES+"/"+id,{});
  }

  getAsignaturas(id):Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(Constantes.URL_PROFESORES+"/"+id+"/asignaturas",{});
  }
}
