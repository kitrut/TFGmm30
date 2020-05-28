import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from './guards/alumno.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'announcements',
    loadChildren: () => import('./pages/announcements/announcements.module').then(m => m.AnnouncementsPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'materiales',
    loadChildren: () => import('./pages/materiales/materiales.module').then(m => m.MaterialesPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'tutoring',
    loadChildren: () => import('./pages/tutoring/tutoring.module').then(m => m.TutoringPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'ratings',
    loadChildren: () => import('./pages/ratings/ratings.module').then(m => m.RatingsPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule),
    canActivate: [AlumnoGuard]
  },

  // ASIGNATURAS
  {
    path: 'asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then(m => m.AsignaturasPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosPageModule),
    canActivate: [AlumnoGuard] },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found404/not-found404.module').then(m => m.NotFound404PageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
