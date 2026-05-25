import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movielist = useSelector((store) => store?.movies?.nowPlayingMovies);

  return (
    <div className="movie-list">
      <MovieCard title={"Now Playing"} movies={movielist} />
      <MovieCard title={"Desi & Chill"} movies={movielist} />
      <MovieCard title={"Your Next Watch"} movies={movielist} />
      <MovieCard title={"New on Netplay"} movies={movielist} />
      <MovieCard title={"Comedy"} movies={movielist} />
    </div>
  );
};
export default MovieList;
