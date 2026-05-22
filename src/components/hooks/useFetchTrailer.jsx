import { useDispatch } from "react-redux";
import { trailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../../utils/constants";

const useFetchTrailer = (movieId) => {
  const dispatch = useDispatch();
  const vid_trailer = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const fetchTrailer = async () => {
    const data = await fetch(vid_trailer, options);
    const json = await data.json();
    const trailer = json.results.filter((vid) => vid.type == "Trailer");
    dispatch(trailerVideo(trailer[0]));
  };
  useEffect(() => {
    if (!movieId) return;
    fetchTrailer();
  }, [movieId]);
};
export default useFetchTrailer;
