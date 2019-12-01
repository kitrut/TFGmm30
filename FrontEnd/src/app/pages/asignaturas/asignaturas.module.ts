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
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { EjercicioTestComponent } from './ejercicios/ejercicio-test/ejercicio-test.component';
import { EjercicioReorderComponent } from './ejercicios/ejercicio-reorder/ejercicio-reorder.component';
import { EjercicioRelationComponent } from './ejercicios/ejercicio-relation/ejercicio-relation.component';
import { EjercicioRedactionComponent } from './ejercicios/ejercicio-redaction/ejercicio-redaction.component';
import { EjercicioChecksComponent } from './ejercicios/ejercicio-checks/ejercicio-checks.component';
import { GeneradorEjerciciosComponent } from './ejercicios/generador-ejercicios/generador-ejercicios.component';
import { AsignaturasPage } from './asignaturas/asignaturas.page';
import { MatMenuModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { NotasAsignaturaComponent } from './detalles/notas-asignatura/notas-asignatura.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarAsignaturaComponent } from './detalles/calendar-asignatura/calendar-asignatura.component';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasPage,
    children: [
      {
        path: '',
        component: IndexAsignaturaPage
      },
      {
        path: 'list',
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
    ]
  },
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
    LMarkdownEditorModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgCalendarModule
  ],
  declarations: [
    DetalleAsignaturaPage,
    CreateAsignaturaPage,
    IndexAsignaturaPage,
    AddMaterialesPage,
    ViewMaterialPage,
    EjerciciosComponent,
    EjercicioTestComponent,
    EjercicioReorderComponent,
    EjercicioRelationComponent,
    EjercicioRedactionComponent,
    EjercicioChecksComponent,
    GeneradorEjerciciosComponent,
    AsignaturasPage,
    NotasAsignaturaComponent,
    CalendarAsignaturaComponent
  ],
  entryComponents: [
    GeneradorEjerciciosComponent
  ]
})
export class AsignaturasPageModule { }
