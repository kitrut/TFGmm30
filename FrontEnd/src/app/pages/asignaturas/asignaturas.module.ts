import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AsignaturasPage } from './asignaturas.page';
import { DetalleAsignaturaPage } from './detalles/detalle-asignatura.page';
import { CreateAsignaturaPage } from './create-asignatura/create-asignatura.page';
import { TranslateModule } from '@ngx-translate/core';
import { IndexAsignaturaPage } from './index/index-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: IndexAsignaturaPage
  },
  {
    path: 'create',
    component: CreateAsignaturaPage
  },
  {
    path: ':id',
    component: DetalleAsignaturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [AsignaturasPage,DetalleAsignaturaPage,CreateAsignaturaPage,IndexAsignaturaPage]
})
export class AsignaturasPageModule {}
