import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { NowPlayingTMDB } from '../interfaces/TMDBMovies.interface';
import { catchError, map, tap, throwError } from 'rxjs';
import { MovieMapper } from '../interfaces/mappers/movie.mapper';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private http = inject(HttpClient);

  nowPlayingPage = signal(1);

  constructor() { }

  getNowPlaying() {
    const url = `${environment.apiUrlTMDB}/movie/now_playing`;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${environment.token}`)

    return this.http.get<NowPlayingTMDB>(url, { headers })
      .pipe(
        tap((response) => this.nowPlayingPage.set(response.page)),
        map((response) => MovieMapper.mapTMDBMoviesToMovies(response.results)),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error(error))
        })
      )
  }

}
