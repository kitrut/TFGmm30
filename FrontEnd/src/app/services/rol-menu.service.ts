import { Injectable } from '@angular/core';
import { UserRole } from '@models/enums/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class RolMenuService {
  public commonPrePages = [
    { title: 'Announcements', url: '/announcements', icon: 'mail' },
    { title: 'Asignaturas', url: '/asignaturas', icon: 'book' }
  ];

  public commonPostPages = [
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'Salir', url: '/login', icon: 'log-out' }
  ];

  public userPages = [
    ...this.commonPrePages,
    { title: 'Tutoring', url: '/tutoring', icon: 'chatbubbles' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    { title: 'Ratings', url: '/ratings', icon: 'school' },
    ...this.commonPostPages
  ];

  public profesorPages = [
    ...this.commonPrePages,
    { title: 'Alumnos', url: '/alumnos', icon: 'people' },
    { title: 'Tutoring', url: '/tutoring', icon: 'chatbubbles' },
    { title: 'Calendar', url: '/calendar', icon: 'calendar' },
    ...this.commonPostPages
  ];

  public adminPages = [
    ...this.commonPrePages,
    { title: 'Usuarios', url: '/usuarios', icon: 'people' },
    ...this.commonPostPages
  ];

  constructor() { }

  getMenu(data: UserRole) {
    if (!data) {
      return;
    }
    switch (data) {
      case UserRole.ADMIN: return this.adminPages;
      case UserRole.PROFESOR: return this.profesorPages;
      case UserRole.ALUMNO: return this.userPages;
      default: return null;
    }
  }
}
