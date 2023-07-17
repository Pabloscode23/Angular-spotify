import { Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';


export const appRouts: Routes = [
  {
    path: 'auth',
    //esto es una promesa, importa la ruta del modulo que carga
    loadChildren: () => import('./modules/auth/auth-routing.module').then(
      m => m.authRroutes)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home-routing.module').then(
      m => m.homeRoutes),
    canActivate: [SessionGuard]
  }];


export class AppRoutingModule { }
