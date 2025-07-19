import { Component, inject, OnInit, signal } from '@angular/core';
import { CinemaService } from '../../services/cinema.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-now-playing-pages',
  imports: [MovieCardComponent, RouterLink],
  templateUrl: './now-playing-page.component.html',
  styleUrl: './now-playing-page.component.css',
})
export class NowPlayingPageComponent implements OnInit{

  movies = signal<Movie[]>([]);
  isLoading = signal<boolean>(true);
  hasError = signal<string>('')
  private cinemaService = inject(CinemaService);

  constructor(){

  }

  ngOnInit(){
    this.loadNowPlaying();
  }

  loadNowPlaying(){
    this.cinemaService.getNowPlaying().subscribe({
      next: (movies) => {
        this.movies.set(movies);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.hasError.set(error);
        this.isLoading.set(false)
      }
    })
  }

 }
