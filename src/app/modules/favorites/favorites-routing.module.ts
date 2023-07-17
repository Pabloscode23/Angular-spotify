import { FavoritePageComponent } from './pages/favoritepage/favoritepage.component';
import { Routes } from '@angular/router';

export const favRoutes: Routes = [

  {
    path: '',
    component: FavoritePageComponent
  }
];

export class FavoritesRoutingModule { }
