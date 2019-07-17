import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Home',      url: '/home',      icon: 'home'     },
    { title: 'Materiales',url: '/materiales',      icon: 'book'     },
    { title: 'Tutorías',  url: '/tutorias',      icon: 'chatboxes'},
    { title: 'Agenda',    url: '/agenda',      icon: 'calendar' },
    { title: 'Notas',     url: '/notas',      icon: 'school'   },
    { title: 'Ajustes',     url: '/ajustes',      icon: 'settings'   },
    { title: 'Salir',     url: '/login',     icon: 'log-out'  }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.addLangs(['es','en','fr']);
      this.translate.setDefaultLang('es');
      this.storage.get('lang').then(value=>{this.translate.use(value)})
      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.storage.set('lang', event.lang);
        this.translate.use(event.lang)
      });
    });
  }
}
