import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { upcomingVideo } from "../../utils/movieSlice";
import { options, upcoming_vid_url } from "../../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchMovies = async () => {
    const data = await fetch(upcoming_vid_url, options);
    const json = await data.json();
    dispatch(upcomingVideo(json.results));
  };
  useEffect(() => {
    fetchMovies();
  }, []);
};
export default useUpcomingMovies;
