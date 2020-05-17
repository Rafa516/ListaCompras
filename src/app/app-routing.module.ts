import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jan',
    loadChildren: () => import('./pages/start/jan/jan.module').then( m => m.JanPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'reset',
    loadChildren: () => import('./pages/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
 
  {
    path: 'feb',
    loadChildren: () => import('./pages/start/feb/feb.module').then( m => m.FebPageModule)
  },
  {
    path: 'march',
    loadChildren: () => import('./pages/start/march/march.module').then( m => m.MarchPageModule)
  },
  {
    path: 'april',
    loadChildren: () => import('./pages/start/april/april.module').then( m => m.AprilPageModule)
  },
  {
    path: 'may',
    loadChildren: () => import('./pages/start/may/may.module').then( m => m.MayPageModule)
  },
  {
    path: 'jun',
    loadChildren: () => import('./pages/start/jun/jun.module').then( m => m.JunPageModule)
  },
  {
    path: 'jul',
    loadChildren: () => import('./pages/start/jul/jul.module').then( m => m.JulPageModule)
  },
  {
    path: 'aug',
    loadChildren: () => import('./pages/start/aug/aug.module').then( m => m.AugPageModule)
  },
  {
    path: 'sept',
    loadChildren: () => import('./pages/start/sept/sept.module').then( m => m.SeptPageModule)
  },
  {
    path: 'oct',
    loadChildren: () => import('./pages/start/oct/oct.module').then( m => m.OctPageModule)
  },
  {
    path: 'nov',
    loadChildren: () => import('./pages//start/nov/nov.module').then( m => m.NovPageModule)
  },
  {
    path: 'dec',
    loadChildren: () => import('./pages/start/dec/dec.module').then( m => m.DecPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
