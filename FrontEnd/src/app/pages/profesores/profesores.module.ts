import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfesoresPage } from './profesores.page';
import { PerfilPage } from './perfil/perfil.page';
import { IndexProfesoresPage } from './index/index-profesores.page';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: IndexProfesoresPage
  },
  {
    path: ':id',
    component: PerfilPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    NgxPaginationModule
  ],
  declarations: [ProfesoresPage,PerfilPage,IndexProfesoresPage]
})
export class ProfesoresPageModule {}
