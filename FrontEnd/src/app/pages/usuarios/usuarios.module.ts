import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuariosPage } from './usuarios.page';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfilPage } from './perfil/perfil.page';

const routes: Routes = [
  { path: '', component: UsuariosPage },
  { path: ':id', component: PerfilPage}
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
  declarations: [UsuariosPage,PerfilPage]
})
export class UsuariosPageModule {}
