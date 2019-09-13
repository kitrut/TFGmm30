import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaPage } from './detalles/detalle-asignatura.page';
import { CreateAsignaturaPage } from './create-asignatura/create-asignatura.page';
import { TranslateModule } from '@ngx-translate/core';
import { IndexAsignaturaPage } from './index/index-asignatura.page';
import { AddMaterialesPage } from './add-materiales/add-materiales.page';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ViewMaterialPage } from './view-material/view-material.page';

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
  },
  {
    path: ':id/addMaterial',
    component: AddMaterialesPage
  },
  {
    path: ':id/update/:idMat',
    component: AddMaterialesPage
  },
  {
    path: ':id/materiales/:idMat',
    component: ViewMaterialPage
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
    NgxPaginationModule,
    LMarkdownEditorModule
  ],
  declarations: [
    DetalleAsignaturaPage,
    CreateAsignaturaPage,
    IndexAsignaturaPage,
    AddMaterialesPage,
    ViewMaterialPage
  ]
})
export class AsignaturasPageModule { }
