import { useEffect, useState } from "react";
import { options } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { trailerVideo } from "../../utils/movieSlice";
import useFetchTrailer from "../hooks/useFetchTrailer";

const BackgroundVideo = ({ movieId }) => {
  const trailerKey = useSelector((store) => store?.movies?.trailerVideos?.key);

  useFetchTrailer(movieId);

  return (
    <div>
      <iframe
        className="trailer"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1?si=kUqP8YaYgRzo7kbe`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default BackgroundVideo;
