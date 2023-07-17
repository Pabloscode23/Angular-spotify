import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
    imports: [
    CommonModule,
    HomeRoutingModule,
    HomePageComponent
]
})
export class HomeModule { }
