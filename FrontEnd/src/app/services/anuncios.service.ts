import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anuncio } from '../models/anuncio';
import { Constantes } from '../global/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(Constantes.URL_ANUNCIOS, {});
  }

  findById(id: number): Observable<Anuncio> {
    return this.http.get<Anuncio>(Constantes.URL_ANUNCIOS + '/' + id , {});
  }

  create(anuncio: any): Observable<any> {
    return this.http.post<any>(Constantes.URL_ANUNCIOS, anuncio, {});
  }
}
