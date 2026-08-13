import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./features/home/about/about.component')
        .then(m => m.AboutComponent)
  },

  {
    path: '**',
    redirectTo: ''
  }

];