
import { Header } from "./Header"
import { MovieCard } from '../components/MovieCard';
import '../styles/content.scss';

interface MovieProps {
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
  selectedGenre: string;
}

export function Content({movies, selectedGenre} : MovieProps) {
  return (
    <div className="container">
      <header>
        <Header title={selectedGenre}/>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}