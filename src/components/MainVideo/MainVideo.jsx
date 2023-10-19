import videosData from "../../data/video-details.json";
import viewicon from "../../assets/icons/views.svg";
import likeicon from "../../assets/icons/likes.svg";

import "./MainVideo.scss";

function MainVideo(props) {
  console.log(props);

  return (
    <>
      <section className="mainvideo">
        <video
          className="mainvideo__video"
          poster={props.selectedVideo.image}
          controls="controls"
        ></video>
        <h1 className="mainvideo__title">{props.selectedVideo.title}</h1>

        <div className="mainvideo__toptext">
          <h4 className="mainvideo__creator">
            By {props.selectedVideo.channel}
          </h4>
          <h4 className="mainvideo__viewgroup">
            <img src={viewicon} alt="video views icon" />
            {props.selectedVideo.views}
          </h4>
        </div>

        <div className="mainvideo__bottomtext">
          <h4 className="mainvideo__date">{props.selectedVideo.timestamp}</h4>
          <h4 className="mainvideo__likesgroup">
            <img src={likeicon} alt="video likes icon" />
            {props.selectedVideo.likes}
          </h4>
        </div>

        <p className="mainvideo__description">
          {props.selectedVideo.description}
        </p>
      </section>
    </>
  );
}

export default MainVideo;
