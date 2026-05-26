import LoginHeader from "../LoginHeader/LoginHeader";
import "./Browse.css";

import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { user_avatar } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import useNowPlayingMovies from "../hooks/nowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { lang, showSearch } from "../../utils/gptSlice";
import GptSearchPage from "./GptSearchPage";
import { languages } from "../../utils/constants";
const Browse = () => {
  const dispatch = useDispatch();
  const showSearchButton = useSelector((store) => store?.gpt?.showSearch);
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
  const handleGPTClick = () => {
    dispatch(showSearch());
  };
  const handleonChange = (e) => {
    dispatch(lang(e.target.value));
  };

  return (
    <div>
      <div className="browserHeader">
        <LoginHeader browse={true} />
        <div className="userSection">
          {showSearchButton && (
            <select onChange={handleonChange}>
              {languages.map((lang) => (
                <option key={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}
          <button className="gpt-search" onClick={handleGPTClick}>
            {!showSearchButton ? "GPT Search" : "Home"}
          </button>
          <img src={user_avatar} />
          <button className="signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
      {showSearchButton ? (
        <GptSearchPage />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
