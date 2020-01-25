import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Constantes } from '../global/constantes';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(Constantes.URL_ALUMNOS, {});
  }

  getOthers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(Constantes.URL_BACKEND + 'private/admins', {});
  }

  create(user: Usuario, rol: string): Observable<Usuario> {
    return this.http.post<Usuario>(Constantes.URL_BACKEND + 'private/usuarios', {user, rol}, {});
  }

  getById(id): Observable<Usuario> {
    return this.http.get<Usuario>(Constantes.URL_ALUMNOS + '/' + id, {});
  }

  addPhoto(id: string, photoBase64: string): Observable<Usuario> {
    return this.http.post<Usuario>(Constantes.URL_BACKEND + 'private/usuarios/' + id + '/photo', photoBase64, {});
  }
}
