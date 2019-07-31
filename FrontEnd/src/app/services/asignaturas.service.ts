import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Asignatura[]>{
    return this.http.get<Asignatura[]>(Constantes.URL_ASIGNATURAS,{});
  }

  getById(id):Observable<Asignatura>{
    return this.http.get<Asignatura>(Constantes.URL_ASIGNATURAS+"/"+id,{});
  }

  create(Asignatura):Observable<Asignatura>{
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS,Asignatura,{});
  }
}
