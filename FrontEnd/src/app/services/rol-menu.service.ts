import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolMenuService {
  public userPages = [
    { title: 'Home',      url: '/home',      icon: 'home'     },
    { title: 'Materiales',url: '/materiales',      icon: 'book'     },
    { title: 'Tutorías',  url: '/tutorias',      icon: 'chatboxes'},
    { title: 'Agenda',    url: '/agenda',      icon: 'calendar' },
    { title: 'Notas',     url: '/notas',      icon: 'school'   },
    { title: 'Ajustes',     url: '/ajustes',      icon: 'settings'   },
    { title: 'Salir',     url: '/login',     icon: 'log-out'  }
  ];
  public profesorPages = [
    { title: 'Profesor',      url: '/home',      icon: 'home'     },
    { title: 'Materiales',url: '/materiales',      icon: 'book'     },
    { title: 'Tutorías',  url: '/tutorias',      icon: 'chatboxes'},
    { title: 'Agenda',    url: '/agenda',      icon: 'calendar' },
    { title: 'Notas',     url: '/notas',      icon: 'school'   },
    { title: 'Ajustes',     url: '/ajustes',      icon: 'settings'   },
    { title: 'Salir',     url: '/login',     icon: 'log-out'  }
  ];
  public adminPages = [
    { title: 'Home',      url: '/home',      icon: 'home'     },
    { title: 'Profesores',url: '/materiales',      icon: 'book'     },
    { title: 'Alumnos',  url: '/tutorias',      icon: 'chatboxes'},
    { title: 'Ajustes',     url: '/ajustes',      icon: 'settings'   },
    { title: 'Salir',     url: '/login',     icon: 'log-out'  }
  ];

  constructor() { }

  getMainMenu(){
    return this.adminPages;
  }
  getMenu(data){
    if(data){
      switch(data){
        case "ADMIN":return this.adminPages;
        case "PROFESOR":return (this.profesorPages);
        case "ALUMNO":return (this.userPages);
        default:return (null);
      }
    }
    
  }
}
