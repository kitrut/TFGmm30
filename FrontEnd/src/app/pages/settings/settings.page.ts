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

  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService) { }

  ngOnInit() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // this.toggleDarkTheme(prefersDark.matches);
  }

  changeLanguage(language) {
    this.translateService.use(language.detail.value);
  }

  changeTheme($event) {
    const checked = $event.detail.checked;
    this.toggleDarkTheme(checked);
    this.themeService.setActiveTheme(checked ? 'dark' : null);
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

}
