import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { SearchComponent } from './components/search/search.component';

import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    HistorypageComponent,
    SearchComponent
]
})
export class HistoryModule { }
