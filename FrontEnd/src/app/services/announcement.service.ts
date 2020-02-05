import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Announcement } from '../models/announcement';
import { Constantes } from '../global/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(Constantes.URL_ANNOUNCEMENTS, {});
  }

  findById(id: number): Observable<Announcement> {
    return this.http.get<Announcement>(Constantes.URL_ANNOUNCEMENTS + '/' + id , {});
  }

  create(announcement: any): Observable<any> {
    return this.http.post<any>(Constantes.URL_ANNOUNCEMENTS, announcement, {});
  }
}
