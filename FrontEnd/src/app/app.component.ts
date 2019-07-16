import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Home',      url: '/home',      icon: 'home'     },
    { title: 'Materiales',url: '/list',      icon: 'book'     },
    { title: 'Tutorías',  url: '/list',      icon: 'chatboxes'},
    { title: 'Agenda',    url: '/list',      icon: 'calendar' },
    { title: 'Notas',     url: '/list',      icon: 'school'   },
    { title: 'Salir',     url: '/login',     icon: 'log-out'  }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
