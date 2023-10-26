import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
// import videosData from "../../data/video-details.json";
import CommentList from "../../components/CommentList/CommentList";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./HomePage.scss";

function HomePage() {
  //setting default for the selected video
  // const [selectedVideo, setSelectedVideo] = useState(videosData[0]);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  const apiKey = "716a16aa-07ac-40de-8b72-a6c20bdfca92";

  // const { id } = useParams();
  // console.log(id);

  const params = useParams();
  // console.log(params.id);
  // let test_url = `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`;
  // console.log(test_url);

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
      );
      setVideos(response.data);

      // console.log(response.data);
    };
    getVideos();
  }, []);

  useEffect(() => {
    let videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
    if (params.id) {
      videoId = params.id;
      console.log(params.id);
    }
    // else {
    //   let videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
    // }

    const getSelectedVideo = async () => {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
      );
      setSelectedVideo(response.data);
    };

    // if (params.id) {
    getSelectedVideo();
    // }
  }, [params.id]);

  //video clickHandler function
  function clickHandler(video) {
    return setSelectedVideo(video);
  }

  return (
    <div className="HomePage">
      {selectedVideo.id && (
        <video
          className="mainvideo"
          poster={selectedVideo.image}
          controls="controls"
        ></video>
      )}
      <div className="desktopcontent">
        <div className="desktopleft">
          <MainVideo selectedVideo={selectedVideo} />
          <section className="comments">
            <h4 className="comments__number">
              {/* {selectedVideo.comments.length} Comments */}
            </h4>
            <CommentForm />

            {/* using props */}
            <CommentList comments={selectedVideo.comments} />
          </section>
        </div>

        {/*Next video components*/}
        <section className="nextvideo">
          <div className="nextvideo__header">NEXT VIDEOS</div>
          <ul className="nextvideo__ul">
            {videos
              .filter((video) => video.id !== selectedVideo.id)
              .map((video) => {
                return (
                  <li
                    key={video.id}
                    onClick={() => clickHandler(video)}
                    className="nextvideo__list"
                  >
                    <Link to={`/videos/"${video.id}`} />
                    {/* <Link to={video.id} /> */}

                    {/* <Link to={"/:id"} /> */}
                    <video
                      className="nextvideo__image"
                      poster={video.image}
                    ></video>
                    <div className="nextvideo__text">
                      <div className="nextvideo__title">{video.title}</div>
                      <div className="nextvideo__channel">{video.channel}</div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
