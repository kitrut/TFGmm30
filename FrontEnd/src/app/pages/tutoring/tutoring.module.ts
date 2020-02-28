import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TutoringPage } from './tutoring.page';
import { TranslateModule } from '@ngx-translate/core';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { AddTutoringComponent } from './add-tutoring/add-tutoring.component';

const routes: Routes = [
  {
    path: '',
    component: TutoringPage,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'add',
        component: AddTutoringComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    ReactiveFormsModule
  ],
  declarations: [
    TutoringPage,
    IndexComponent,
    DetailComponent,
    AddTutoringComponent
  ]
})
export class TutoringPageModule {}
