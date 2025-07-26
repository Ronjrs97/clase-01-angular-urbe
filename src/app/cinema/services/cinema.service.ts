import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { NowPlayingTMDB } from '../interfaces/TMDBMovies.interface';
import { catchError, map, single, tap, throwError } from 'rxjs';
import { MovieMapper } from '../interfaces/mappers/movie.mapper';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private http = inject(HttpClient);

  nowPlayingPage = signal(1);
  moviesUpcoming = signal<Movie[]>([]);
  upcomingPage = signal(1);


  constructor() { }

  getNowPlaying() {
    const url = `${environment.apiUrlTMDB}/movie/now_playing`;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${environment.token}`)

    const params = new HttpParams()
      .set('language', 'es');

    return this.http.get<NowPlayingTMDB>(url, { headers, params })
      .pipe(
        tap((response) => this.nowPlayingPage.set(response.page)),
        map((response) => MovieMapper.mapTMDBMoviesToMovies(response.results)),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error(error))
        })
      )
  }

  getComingSoon() {
    const url = `${environment.apiUrlTMDB}/movie/upcoming`;

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${environment.token}`)

      const params = new HttpParams()
      .set('language', 'es');

    return this.http.get<NowPlayingTMDB>(url, { headers, params })
      .pipe(
        tap((response) => this.upcomingPage.set(response.page)),
        map((response) => MovieMapper.mapTMDBMoviesToMovies(response.results)),
        tap((movies) => this.moviesUpcoming.set(movies)),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error(error))
        })
      )
  }

}
