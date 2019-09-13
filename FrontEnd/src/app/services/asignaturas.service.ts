import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Materiales } from '../models/materiales';
import { Profesor } from '../models/usuario';

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

  deleteAsignatura(idAsignatura):Observable<any>{
    return this.http.delete(Constantes.URL_ASIGNATURAS+"/"+idAsignatura);
  }

  createMaterial(id,mat:Materiales):Observable<Asignatura>{
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS+"/"+id+"/materiales",mat,{});
  }

  updateMaterial(id,mat:Materiales):Observable<Asignatura>{
    return this.http.put<Asignatura>(Constantes.URL_ASIGNATURAS+"/"+id+"/materiales",mat,{});
  }
  deleteMaterial(idAsignatura,idMaterial):Observable<any>{
    return this.http.delete(Constantes.URL_ASIGNATURAS+"/"+idAsignatura+"/materiales/"+idMaterial,{});
  }

  asignProfesor(idAsignatura,idProfesor):Observable<any>{
    return this.http.post<Asignatura>(Constantes.URL_ASIGNATURAS+"/"+idAsignatura+"/profesor/"+idProfesor,{});
  }
  getProfesor(idAsignatura):Observable<Profesor>{
    return this.http.get<Profesor>(Constantes.URL_ASIGNATURAS+"/"+idAsignatura+"/profesor",{});
  }

  getMaterial(idAsig,idMat):Observable<Materiales>{
    return this.http.get<Materiales>(Constantes.URL_ASIGNATURAS+"/"+idAsig+"/materiales/"+idMat,{});
  }
  getMateriales(idAsig):Observable<Materiales[]>{
    return this.http.get<Materiales[]>(Constantes.URL_ASIGNATURAS+"/"+idAsig+"/materiales",{});
  }
}
