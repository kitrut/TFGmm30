import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth/auth.service';
import { Usuario } from '@models/usuario';
import { RolMenuService } from '@services/rol-menu.service';
import { ThemeService } from '@services/theme.service';
import { UserRole } from '@models/enums/user-role.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages;
  public rolUsuario: UserRole;
  public user: Usuario;
  public isLoggued;

  public theme;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private storage: Storage,
    private rolMenuService: RolMenuService,
    private auth: AuthService,
    private themeService: ThemeService
  ) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.themeService.theme.subscribe(data => this.theme = data);
      this.configureLang();
      this.auth.checktoken();
      this.auth.user.subscribe(
        () => {
          this.user = this.auth.usuario;
          this.rolUsuario = this.auth.rol;
          this.appPages = this.rolMenuService.getMenu(this.rolUsuario);
        }
      );
      this.auth.isLoggedIn.subscribe(data => {
        this.isLoggued = data;
        if (!data) {
          this.appPages = null;
          this.rolUsuario = null;
          this.user = null;
        }
      });
    });
  }

  salir() {
    this.auth.logout();
  }

  private configureLang() {
    this.translate.addLangs(['es', 'en', 'fr']);
    this.translate.setDefaultLang('es');
    this.storage.get('lang').then(value => {
      if (value) {
        this.translate.use(value);
      }
    });
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.storage.set('lang', event.lang);
      this.translate.use(event.lang);
    });
  }
}
