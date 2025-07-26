import { Component, inject, signal } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { CinemaService } from '../../services/cinema.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'coming-soon-page',
  imports: [MovieCardComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './coming-soon-page.component.html',
  styleUrl: './coming-soon-page.component.css',
})
export default class ComingSoonPageComponent {

  private cinemaService = inject(CinemaService);

  movies = signal<Movie[]>([]);
  isLoading = signal<boolean>(true);
  hasError = signal<string>('')

  get moviesUpcoming(){
    return this.cinemaService.moviesUpcoming;
  }
  moviesFiltered = signal<Movie[]>([]);

  searchControl = new FormControl('');

  constructor(){

  }

  ngOnInit(){
    if (this.moviesUpcoming().length == 0) {
      this.loadUpcoming();
      return;
    }

    this.isLoading.set(false);
    this.moviesFiltered.set(this.moviesUpcoming());
  }

  loadUpcoming(){
    this.cinemaService.getComingSoon().subscribe({
      next: (movies) => {
        this.movies.set(movies);
        this.moviesFiltered.set(this.moviesUpcoming())
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.hasError.set(error);
        this.isLoading.set(false)
      }
    })
  }

  filterMovies(){

    const movieName = this.searchControl.value ?? '';


    if (movieName == '') this.moviesFiltered.set(this.moviesUpcoming());

    const movies = this.moviesUpcoming().filter(
      movie => movie.name.toLowerCase().includes(movieName.toLowerCase()));

    this.moviesFiltered.set(movies)
  }
}
