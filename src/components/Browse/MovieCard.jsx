import { IMG_Path } from "../../utils/constants";

const MovieCard = (props) => {
  console.log("ppp", props);
  return (
    <div className="movie-card">
      <h4>{props?.title}</h4>
      <div className="movie_lists">
        {props?.movies?.map((movie) => (
          <img src={IMG_Path + movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};
export default MovieCard;
