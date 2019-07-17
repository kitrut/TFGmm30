import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  idiomas: any[]=[
    {value:'es',label:'Español'},
    {value:'en',label:'Inglés'},
    {value:'fr',label:'Francés'}
  ];

  constructor(private translateService:TranslateService) { }

  ngOnInit() {
  }

  cambiarIdioma(idioma){
    this.translateService.use(idioma.detail.value);
  }

}
