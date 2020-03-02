import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../global/constantes';
import { Tutoring } from '@models/tutoring';
import { TutoringMessage } from '@models/tutoring-message';

@Injectable({
  providedIn: 'root'
})
export class TutoringService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tutoring[]> {
    return this.http.get<Tutoring[]>(Constantes.URL_TUTORINGS, {});
  }

  create(tutoring: Tutoring): Observable<Tutoring> {
    return this.http.post<Tutoring>(Constantes.URL_TUTORINGS, tutoring, {});
  }

  getMessagesByTutoringId(id: string): Observable<TutoringMessage[]> {
    return this.http.get<TutoringMessage[]>(Constantes.URL_TUTORINGS + '/' + id + '/messages', {});
  }

  createMessage(tutoringId: string, tutoringMessage: TutoringMessage): Observable<Tutoring> {
    return this.http.post<Tutoring>(Constantes.URL_TUTORINGS + '/' + tutoringId + '/messages', tutoringMessage, {});
  }

}
