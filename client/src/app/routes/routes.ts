import { Routes } from '@angular/router';

import { LoginContainer } from '../containers/login';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginContainer,
    resolve: [],
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
