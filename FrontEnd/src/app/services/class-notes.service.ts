import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassNotes } from '@models/class-notes';
import { Constantes } from '../global/constantes';

@Injectable({
  providedIn: 'root'
})
export class ClassNotesService {

  constructor(private http: HttpClient) { }

  getById(materialId: string): Observable<ClassNotes> {
    return this.http.get<ClassNotes>(Constantes.URL_CLASSNOTES + '/' + materialId, {});
  }

  create(classNotes: ClassNotes): Observable<ClassNotes> {
    return this.http.post<ClassNotes>(Constantes.URL_CLASSNOTES, classNotes, {});
  }
}
