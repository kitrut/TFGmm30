import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { ListPage } from '../list/list.page';

const routes: Routes = [
  { path: '', component: HomePage },  
  { path: 'list',  component:ListPage}, //TODO mirar outlets
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomePageRoutingModule { }