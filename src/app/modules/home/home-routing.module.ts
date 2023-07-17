import { Routes } from '@angular/router';


export const homeRoutes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks-routing.module').then(
      m => m.tracksRoutes)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites-routing.module').then(
      m => m.favRoutes)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history-routing.module').then(
      m => m.historyRoutes)
  },
  {
    path: '**',//TODO 404 cuando no existe la ruta
    redirectTo: '/tracks'
  }

];

export class HomeRoutingModule { }
