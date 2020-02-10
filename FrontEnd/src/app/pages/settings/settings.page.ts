import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  get languages() {
    return [
      {value: 'es', label: this.translateService.instant('Languages.Spanish')},
      {value: 'en', label: this.translateService.instant('Languages.English')},
      {value: 'fr', label: this.translateService.instant('Languages.French')}
    ];
  }

  get themes() {
    return [
      {value: '', label: this.translateService.instant('Themes.Default')},
      {value: 'light-theme', label: this.translateService.instant('Themes.Light')},
      {value: 'dark-theme', label: this.translateService.instant('Themes.Dark')}
    ];
  }

  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService) { }

  ngOnInit() { }

  changeLanguage(language) {
    this.translateService.use(language.detail.value);
  }

  changeTheme(theme) {
    this.themeService.setActiveTheme(theme.detail.value);
  }

}
