import infoIcon from "../../assets/information.png"


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="viddes">
      <h1 className="vidtitle">{title}</h1>
      <p className="overview">{overview}</p>
      <div className="btns">
        <button className="play">
          <span className="play-icon">&#9654;</span>
          Play
        </button>
        <button className="more-info">
          <span className="info-icon"><img src={infoIcon} /></span>
          More Info
        </button>
        
      </div>
    </div>
  );
};

export default VideoTitle;
