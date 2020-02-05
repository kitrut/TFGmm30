import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from './guards/alumno.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'announcements', loadChildren: './pages/announcements/announcements.module#AnnouncementsPageModule', canActivate: [AlumnoGuard] },
  { path: 'materiales', loadChildren: './pages/materiales/materiales.module#MaterialesPageModule', canActivate: [AlumnoGuard] },
  { path: 'tutorias', loadChildren: './pages/tutorias/tutorias.module#TutoriasPageModule', canActivate: [AlumnoGuard] },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule', canActivate: [AlumnoGuard] },
  { path: 'ratings', loadChildren: './pages/ratings/ratings.module#RatingsPageModule', canActivate: [AlumnoGuard] },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule', canActivate: [AlumnoGuard] },

  // ASIGNATURAS
  { path: 'asignaturas', loadChildren: './pages/asignaturas/asignaturas.module#AsignaturasPageModule' },
  { path: 'perfil', loadChildren: './pages/perfil/perfil.module#PerfilPageModule' },
  { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
  { path: '**', loadChildren: './pages/not-found404/not-found404.module#NotFound404PageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
