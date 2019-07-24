import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { RolMenuService } from './services/rol-menu.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages;
  public rolUsuario;
  public isLoggued;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage,
    private rolMenuService:RolMenuService,
    private auth:AuthService
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
      this.getRoles();
      this.auth.configObservable.subscribe(() => {
        this.isLoggued = this.auth.isLoggedIn;
        setTimeout(()=>{ this.getRoles(); }, 200);//espera para que se actualice el storage
        
      })
      
    });
  }

  getRoles(){
    this.storage.get("ROLES").then(data=>{
      if(data!=null){
        this.rolUsuario = data[0];
        this.appPages = this.rolMenuService.getMenu(data[0]);
      }      
    })
  }

  salir(){
    this.auth.logout();
  }
}
