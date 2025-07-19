import { environment } from '../../../../environments/environments';
import { TMDBMovie } from '../TMDBMovies.interface';
import { Movie } from '../movie.interface';
export class MovieMapper {

  static mapTMDBMovieToMovie(TMDBMovie: TMDBMovie): Movie {
    return {
      id: TMDBMovie.id,
      name: TMDBMovie.title,
      genres: TMDBMovie.genre_ids,
      rating: TMDBMovie.vote_average,
      description: TMDBMovie.overview,
      posterImg: `${environment.imageUrl}${TMDBMovie.poster_path}`,
      popularity: TMDBMovie.popularity
    }
  }

  static mapTMDBMoviesToMovies(TMDBMovies: TMDBMovie[]): Movie[] {
    return TMDBMovies.map(TMDBMovie => MovieMapper.mapTMDBMovieToMovie(TMDBMovie));
  }
}
