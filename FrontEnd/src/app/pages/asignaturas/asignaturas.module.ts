import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaPage } from './detalles/detalle-asignatura.page';
import { CreateAsignaturaPage } from './create-asignatura/create-asignatura.page';
import { TranslateModule } from '@ngx-translate/core';
import { IndexAsignaturaPage } from './index-asignatura/index-asignatura.page';
import { AddMaterialesPage } from './add-materiales/add-materiales.page';

import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ViewMaterialPage } from './view-material/view-material.page';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { AsignaturasPage } from './asignaturas/asignaturas.page';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NotasAsignaturaComponent } from './detalles/notas-asignatura/notas-asignatura.component';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarAsignaturaComponent } from './detalles/calendar-asignatura/calendar-asignatura.component';
import { AddSectionComponent } from './add-section/add-section.component';
import { DetalleAsignaturaComponent } from './detalles/detalle-asignatura/detalle-asignatura.component';
import { ExerciseGeneratorComponent } from './ejercicios/exercise-generator/exercise-generator.component';
import { ExerciseViewComponent } from './ejercicios/exercise-view/exercise-view.component';

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
        component: DetalleAsignaturaPage,
        children: [
          { path: 'detalles', component: DetalleAsignaturaComponent, pathMatch: 'full' },
          { path: 'materiales', component: EjerciciosComponent, pathMatch: 'full' },
          { path: 'calendario', component: CalendarAsignaturaComponent, pathMatch: 'full' },
          { path: 'notas', component: NotasAsignaturaComponent, pathMatch: 'full' }
        ]
      },
      { path: ':id/addMaterial', component: AddMaterialesPage },
      { path: ':id/update/:idMat', component: AddMaterialesPage },
      { path: ':id/materiales/:idMat', component: ViewMaterialPage}
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
    MatIconModule,
    NgCalendarModule
  ],
  declarations: [
    DetalleAsignaturaPage,
    CreateAsignaturaPage,
    IndexAsignaturaPage,
    AddMaterialesPage,
    ViewMaterialPage,
    EjerciciosComponent,
    ExerciseViewComponent,
    ExerciseGeneratorComponent,
    AddSectionComponent,
    AsignaturasPage,
    NotasAsignaturaComponent,
    CalendarAsignaturaComponent,
    DetalleAsignaturaComponent
  ],
  entryComponents: [
    AddSectionComponent
  ]
})
export class AsignaturasPageModule { }
