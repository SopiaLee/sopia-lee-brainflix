import viewicon from "../../assets/icons/views.svg";
import likeicon from "../../assets/icons/likes.svg";

import "./MainVideo.scss";

function MainVideo(props) {
  // console.log(props);

  return (
    <>
      <section className="mainvideotext">
        {/* <video
          className="mainvideo__video"
          poster={props.selectedVideo.image}
          controls="controls"
        ></video> */}
        <h1 className="mainvideotext__title">{props.selectedVideo.title}</h1>

        <div className="mainvideotext__text">
          <div className="mainvideotext__lefttext">
            <h4 className="mainvideotext__creator">
              By {props.selectedVideo.channel}
            </h4>
            <h4 className="mainvideotext__date">
              {new Date(props.selectedVideo.timestamp).toLocaleDateString()}
            </h4>
          </div>

          <div className="mainvideotext__righttext">
            <h4 className="mainvideotext__viewgroup">
              <img
                src={viewicon}
                alt="video views icon"
                className="mainvideotext__viewicon"
              />
              {props.selectedVideo.views}
            </h4>
            <h4 className="mainvideotext__likesgroup">
              <img
                src={likeicon}
                alt="video likes icon"
                className="mainvideotext__likeicon"
              />
              {props.selectedVideo.likes}
            </h4>
          </div>
        </div>
        <p className="mainvideotext__description">
          {props.selectedVideo.description}
        </p>
      </section>
    </>
  );
}

export default MainVideo;
