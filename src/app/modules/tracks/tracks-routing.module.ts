import { TracksPageComponent } from './pages/trackspage/trackspage.component';
import { Routes } from '@angular/router';

export const tracksRoutes: Routes = [

  {
    path: '',
    component: TracksPageComponent,
  }
];

export class TracksRoutingModule { }
