import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private readonly URL = environment.api;

  constructor(private _http: HttpClient) {

  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)

    })
  }
  //metodo Observable
  //puedo desetructurar {data}
  getAllTracks$(): Observable<any> {

    return this._http.get(`${this.URL}/tracks`)
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.data
        }),
        catchError((err) => {
          console.log('Algo pasa, revisa !!!', err);

          return of([])
        })
      )
  }

  getAllRandom$(): Observable<any> {

    return this._http.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 1)),

        tap(data => console.log(data)),

        catchError((err) => {
          console.log('Algo pasa, revisa !!!', err);

          return of([])
        })

      )
  }
}

