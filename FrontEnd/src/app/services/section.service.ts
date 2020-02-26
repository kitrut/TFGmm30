import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '@models/asignatura';
import { Section } from '@models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  findAllByAsignaturaId(idAsig: string): Observable<Section[]> {
    return this.http.get<Section[]>(Constantes.URL_ASIGNATURAS + '/' + idAsig + '/sections', {});
  }

  create(idAsig: string, section: Section): Observable<Asignatura> {
    return this.http.post<Asignatura>(Constantes.URL_SECTIONS + '/' + idAsig , section);
  }
}
