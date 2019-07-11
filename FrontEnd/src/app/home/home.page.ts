import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = [
    { title: 'Home',          url: '/home',      icon: 'home'},
    { title: 'List',          url: '/home/list', icon: 'list'},
    { title: 'Cerrar sesión', url: '/login', icon: 'log-out'}
  ];

  constructor() {}

}
