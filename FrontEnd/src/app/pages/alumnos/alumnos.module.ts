import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { PerfilPage } from './perfil/perfil.page';
import { IndexPage } from './index/index.page';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  { path: '', component: IndexPage},
  { path: ':id', component: PerfilPage}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    NgxPaginationModule
  ],
  declarations: [PerfilPage,IndexPage]
})
export class AlumnosPageModule {}
