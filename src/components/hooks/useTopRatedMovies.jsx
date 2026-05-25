import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { topRatedVideo } from "../../utils/movieSlice";
import { options, toprated_url } from "../../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const data = await fetch(toprated_url, options);
    const json = await data.json();
    dispatch(topRatedVideo(json.results));
  };
  useEffect(() => {
    console.log("asdfsdf");
    fetchMovies();
  }, []);
};
export default useTopRatedMovies;
