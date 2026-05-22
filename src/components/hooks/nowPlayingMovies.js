import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { now_playing_vids_url, options } from "../../utils/constants";

const nowPlayingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const data = await fetch(now_playing_vids_url, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default nowPlayingMovies;
