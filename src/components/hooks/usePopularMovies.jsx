import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { popularVideo } from "../../utils/movieSlice";
import { now_popular_vids_url, options } from "../../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const data = await fetch(now_popular_vids_url, options);
    const json = await data.json();
    dispatch(popularVideo(json.results));
  };
  useEffect(() => {
    console.log("asdfsdf");
    fetchMovies();
  }, []);
};
export default usePopularMovies;
