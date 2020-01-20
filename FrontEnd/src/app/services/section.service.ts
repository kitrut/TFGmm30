import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../models/section';
import { Constantes } from '../global/constantes';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) { }

  getSections(idAsig: string): Observable<Section[]> {
    return this.http.get<Section[]>(Constantes.URL_ASIGNATURAS + '/' + idAsig + '/sections', {});
    // return this.http.get<Section[]>(Constantes.URL_SECTIONS + '/' + idAsig + '/sections', {});
  }

  addSection(idAsig: string, section: Section): Observable<Asignatura> {
    return this.http.post<Asignatura>(Constantes.URL_SECTIONS + '/' + idAsig , section);
  }
}
