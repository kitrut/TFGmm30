import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { RolMenuService } from './services/rol-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages;
  public rolUsuario;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage,
    private rolMenuService:RolMenuService
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
      this.storage.get("ROLES").then(data=>{
        this.rolUsuario = data[0];
        this.appPages = this.rolMenuService.getMenu(data[0]);
      })
      
    });
  }
}
