import { NgModule,LOCALE_ID  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgendaPage } from './agenda.page';
import { TranslateModule } from '@ngx-translate/core';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NgCalendarModule  } from 'ionic2-calendar';

registerLocaleData(es);

const routes: Routes = [
  {
    path: '',
    component: AgendaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    NgCalendarModule
  ],
  declarations: [AgendaPage],
  providers: [ { provide: LOCALE_ID, useValue: 'es-*' } ]
})
export class AgendaPageModule {}
