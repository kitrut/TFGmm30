import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from './guards/alumno.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule'},
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule',canActivate:[AlumnoGuard]},
  { path: 'materiales', loadChildren: './pages/materiales/materiales.module#MaterialesPageModule',canActivate:[AlumnoGuard]},
  { path: 'tutorias', loadChildren: './pages/tutorias/tutorias.module#TutoriasPageModule',canActivate:[AlumnoGuard] },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule',canActivate:[AlumnoGuard] },
  { path: 'notas', loadChildren: './pages/notas/notas.module#NotasPageModule',canActivate:[AlumnoGuard] },
  { path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule',canActivate:[AlumnoGuard]},
  
  //ASIGNATURAS
  { path: 'asignaturas', loadChildren: './pages/asignaturas/asignaturas.module#AsignaturasPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
