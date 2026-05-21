import { useEffect, useState } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { trailerVideo } from "../utils/movieSlice";

const BackgroundVideo = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector((store) => store?.movies?.trailerVideos?.key);
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

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}?si=kUqP8YaYgRzo7kbe`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default BackgroundVideo;
