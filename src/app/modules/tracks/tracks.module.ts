
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/trackspage/trackspage.component';


@NgModule({
    imports: [
    CommonModule,
    TracksRoutingModule,
    TracksPageComponent
]
})
export class TracksModule { }
