import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaPage } from './detalle-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAsignaturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalleAsignaturaPage]
})
export class DetalleAsignaturaPageModule {}
