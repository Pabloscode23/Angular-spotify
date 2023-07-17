import { MultimediaService } from './../../services/multimedia.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')

  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  public _multimediaService = inject(MultimediaService)

  constructor() {
    const observer1$ = this._multimediaService.playerStatus$
      .subscribe(status => this.state = status)
    //desuscribir
    this.listObservers$ = [observer1$]

  }



  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    //de la coordenada en x
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x
    const percentageFromX = (clickX * 100) / width
    console.log(percentageFromX);
    this._multimediaService.seekAudio(percentageFromX)
  }
}
