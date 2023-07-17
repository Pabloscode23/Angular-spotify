import { AuthPageComponent } from './pages/authpage/authpage.component';
import { Routes } from '@angular/router';

export const authRroutes: Routes = [

  {
    path: 'login',
    component: AuthPageComponent
  },
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];


export class AuthRoutingModule { }
