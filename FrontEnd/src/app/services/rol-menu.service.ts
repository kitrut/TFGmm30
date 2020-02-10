import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolMenuService {
  public userPages = [
    { title: 'Announcements', url: '/announcements', icon: 'mail' },
    { title: 'Asignaturas', url: '/asignaturas', icon: 'book' },
    { title: 'Tutoring', url: '/tutoring', icon: 'chatboxes' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    { title: 'Ratings', url: '/ratings', icon: 'school' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Salir', url: '/login', icon: 'log-out' }
  ];
  public profesorPages = [
    { title: 'Announcements', url: '/announcements', icon: 'mail' },
    { title: 'Asignaturas', url: '/asignaturas', icon: 'book' },
    { title: 'Alumnos', url: '/alumnos', icon: 'contacts' },
    { title: 'Tutoring', url: '/tutoring', icon: 'chatboxes' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Salir', url: '/login', icon: 'log-out' }
  ];
  public adminPages = [
    { title: 'Announcements', url: '/announcements', icon: 'mail' },
    { title: 'Asignaturas', url: '/asignaturas', icon: 'color-palette' },
    { title: 'Usuarios', url: '/usuarios', icon: 'contacts' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Salir', url: '/login', icon: 'log-out' }
  ];

  constructor() { }

  getMenu(data) {
    if (data) {
      switch (data) {
        case 'ADMIN': return this.adminPages;
        case 'PROFESOR': return this.profesorPages;
        case 'ALUMNO': return this.userPages;
        default: return null;
      }
    }
  }
}
