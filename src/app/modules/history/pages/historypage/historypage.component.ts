import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from './../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
    selector: 'app-historypage',
    templateUrl: './historypage.component.html',
    styleUrls: ['./historypage.component.css'],
    standalone: true,
    imports: [SearchComponent, PlayListBodyComponent, AsyncPipe]
})
export class HistorypageComponent implements OnInit {

  listResults$: Observable<any> = of([])

  constructor(private _searchService: SearchService) { }
  ngOnInit(): void {

  }
  receiveData(event: string): void {
    console.log(event);
    this.listResults$ = this._searchService.searchTracks$(event)

  }
}
