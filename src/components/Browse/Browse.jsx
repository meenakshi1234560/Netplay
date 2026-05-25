import LoginHeader from "../LoginHeader/LoginHeader";
import "./Browse.css";

import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { user_avatar } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useNowPlayingMovies from "../hooks/nowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
const Browse = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        Navigate("/error");
      });
  };
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <div className="browserHeader">
        <LoginHeader browse={true} />
        <div className="userSection">
          <img src={user_avatar} />
          <button className="signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      <MainContainer />
      <SecondContainer />
    </div>
  );
};
export default Browse;
