import { Routes } from '@angular/router';

import { LoginContainer } from '../containers/login';
import { NewsLandingPageContainer } from '../containers/news-landing-page';


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
    path: 'news',
    component: NewsLandingPageContainer,
    resolve: [],
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'news'
  }
];
