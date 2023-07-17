import { Routes } from '@angular/router';
import { HistorypageComponent } from './pages/historypage/historypage.component';

export const historyRoutes: Routes = [

  {
    path: '',
    component: HistorypageComponent
  }
];

export class HistoryRoutingModule { }
