import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movielist = useSelector((store) => store);
  console.log("ds", movielist);

  return (
    <div className="movie-list">
      <MovieCard
        title={"Now Playing"}
        movies={movielist?.movies?.nowPlayingMovies}
      />
      <MovieCard title={"Popular"} movies={movielist?.movies?.popularVideo} />
      <MovieCard title={"Upcoming"} movies={movielist?.movies?.upcomingVideo} />
      <MovieCard
        title={"Top Rated"}
        movies={movielist?.movies?.topratedVideo}
      />
    </div>
  );
};
export default MovieList;
