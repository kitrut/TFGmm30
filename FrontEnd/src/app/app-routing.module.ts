import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule'},
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'materiales', loadChildren: './pages/materiales/materiales.module#MaterialesPageModule' },
  { path: 'tutorias', loadChildren: './pages/tutorias/tutorias.module#TutoriasPageModule' },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },
  { path: 'notas', loadChildren: './pages/notas/notas.module#NotasPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
