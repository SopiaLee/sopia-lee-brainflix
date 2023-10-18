import videosData from "../../data/video-details.json";
import viewicon from "../../assets/icons/views.svg";
import likeicon from "../../assets/icons/likes.svg";

function MainVideo() {
  let selectedVideo = videosData[0];
  return (
    <>
      <section className="mainvideo">
        <video
          className="mainvideo__video"
          poster={selectedVideo.image}
          controls="controls"
        ></video>
        <h1 className="mainvideo__title">{selectedVideo.title}</h1>

        <div className="mainvideo__toptext">
          <h4 className="mainvideo__creator">By {selectedVideo.channel}</h4>
          <h4 className="mainvideo__viewgroup">
            <img src={viewicon} alt="video views icon" />
            {selectedVideo.views}
          </h4>
        </div>

        <div className="mainvideo__bottomtext">
          <h4 className="mainvideo__date">{selectedVideo.timestamp}</h4>
          <h4 className="mainvideo__likesgroup">
            <img src={likeicon} alt="video likes icon" />
            {selectedVideo.likes}
          </h4>
        </div>

        <p className="mainvideo__description">{selectedVideo.description}</p>
      </section>
    </>
  );
}

export default MainVideo;
