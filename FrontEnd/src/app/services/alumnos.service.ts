import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Constantes } from '../global/constantes';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(Constantes.URL_ALUMNOS,{});
  }

  getById(id):Observable<Usuario>{
    return this.http.get<Usuario>(Constantes.URL_ALUMNOS+"/"+id,{});
  }
}
