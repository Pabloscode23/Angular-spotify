import { Validators } from '@angular/forms';
import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject, single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)

  // public trackInfoSignal = signal<TrackModel | undefined>(undefined)

  public audio!: HTMLAudioElement
  public timeElapsed$: BehaviorSubject<any> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<any> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<any> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOK => {
      if (responseOK) {
        this.setAudio(responseOK)
      }
    })

    this.listenAllEvents()
  }

  public setAudio(track: TrackModel): void {
    console.log('df', track);
    this.audio.src = track.url
    this.audio.play()
  }
  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false)
    this.audio.addEventListener('playing', this.setPlayerStatus, false)
    this.audio.addEventListener('play', this.setPlayerStatus, false)
    this.audio.addEventListener('pause', this.setPlayerStatus, false)
    this.audio.addEventListener('ended', this.setPlayerStatus, false)
  }
  private setPlayerStatus = (state: any) => {

    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play')
        break;
      case 'playing':
        this.playerStatus$.next('playing')
        break;
      case 'ended':
        this.playerStatus$.next('ended')
        break;

      default:
        this.playerStatus$.next('paused')
        break;
    }
  }
  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {

    const { duration } = this.audio
    console.log(duration, percentage);

    const percentageToSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageToSecond

  }

  private setPercentage(currentTIme: number, duration: number): void {

    let percentage = (currentTIme * 100) / duration;
    this.playerPercentage$.next(percentage)

  }


  //necesario hacer una funcion de flecha porque es lo que
  //recibe el addEventListener

  private calculateTime = () => {
    console.log('disparo evento');
    const { duration, currentTime } = this.audio
    console.table([duration, currentTime])
    this.setTimeElapsed(currentTime)
    this.setTImeRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setTimeElapsed(currentTime: number): void {

    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat)
  }
  private setTImeRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime

    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    this.timeRemaining$.next(displayFormat)
  }


}