import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../global/constantes';
import { Usuario, Profesor } from '../models/usuario';
import { Observable } from 'rxjs';

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
}
