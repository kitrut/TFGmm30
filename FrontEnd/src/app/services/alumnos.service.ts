import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Usuario } from '@models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(Constantes.URL_ALUMNOS, {});
  }

  findById(id): Observable<Usuario> {
    return this.http.get<Usuario>(Constantes.URL_ALUMNOS + '/' + id, {});
  }

  getOthers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(Constantes.URL_BACKEND + 'private/admins', {});
  }

  create(user: Usuario, rol: string): Observable<Usuario> {
    return this.http.post<Usuario>(Constantes.URL_BACKEND + 'private/usuarios', {user, rol}, {});
  }

  addPhoto(id: string, photoBase64: string): Observable<Usuario> {
    return this.http.post<Usuario>(Constantes.URL_BACKEND + 'private/usuarios/' + id + '/photo', photoBase64, {});
  }
}
