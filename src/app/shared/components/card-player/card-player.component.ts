import { MultimediaService } from './../../services/multimedia.service';
import { TrackModel } from '@core/models/tracks.model';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
  standalone: true,
  imports: [NgIf, NgClass, ImgBrokenDirective]
})
export class CardPlayerComponent {

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, album: '', cover: '', name: '', url: '' }

  private _multimediaService = inject(MultimediaService)



  sendPlay(track: TrackModel): void {
    this._multimediaService.trackInfo$.next(track)
    // this._multimediaService.trackInfoSignal.set(track)
  }
}
