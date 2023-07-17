import { TrackModel } from '@core/models/tracks.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';


@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css'],
  standalone: true,
  imports: [SectionGenericComponent]
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private _tracksService: TracksService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this._tracksService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    this._tracksService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }

  ngOnDestroy(): void {

  }
}
