import { FavoritePageComponent } from './pages/favoritepage/favoritepage.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';


@NgModule({
    imports: [
    CommonModule,
    FavoritesRoutingModule,
    FavoritePageComponent
]
})
export class FavoritesModule { }
