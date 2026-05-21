import BackgroundVideo from "../BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {

    const movieTitle = useSelector(store=>store?.movies?.nowPlayingMovies)
    
  return (
    <div>
      <VideoTitle title={movieTitle?.[0]?.original_title} overview={movieTitle?.[0]?.overview}/>
      <BackgroundVideo movieId={movieTitle?.[0]?.id} />
    </div>
  );
};

export default MainContainer;
