import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  idiomas: any[] = [
    {value: 'es', label: 'Español'},
    {value: 'en', label: 'Inglés'},
    {value: 'fr', label: 'Francés'}
  ];
  themes: any[] = [
    {value: '', label: 'Defecto'},
    {value: 'light-theme', label: 'Claro'},
    {value: 'dark-theme', label: 'Oscuro'},
    {value: 'silvia-theme', label: 'Silvia'}
  ];

  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService) { }

  ngOnInit() {
  }

  cambiarIdioma(idioma) {
    this.translateService.use(idioma.detail.value);
  }
  cambiarTheme(theme) {
    this.themeService.setActiveTheme(theme.detail.value);
  }

}
