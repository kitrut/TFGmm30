import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../global/constantes';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(Constantes.URL_PROFESORES,{});
  }

  getById(id):Observable<Usuario>{
    return this.http.get<Usuario>(Constantes.URL_PROFESORES+"/"+id,{});
  }
}
