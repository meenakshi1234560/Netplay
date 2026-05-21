import LoginHeader from "../LoginHeader/LoginHeader";
import "./Browse.css";

import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { user_avatar } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import nowPlayingMovies from "../hooks/nowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
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
  nowPlayingMovies();
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
