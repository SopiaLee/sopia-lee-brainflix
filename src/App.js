import MainVideo from './components/MainVideo/MainVideo';
import CommentForm from './components/CommentForm/CommentForm'

import { useState } from 'react';


import "./App.scss";

import videosData from "./data/video-details.json";

// import commentsData from "./data/video-details.json";
import CommentList from './components/CommentList/CommentList';
import Header from './components/Header/Header';

function App() {

  //setting default for the selected video
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);

  //video clickHandler function
  function clickHandler(video) {
    return (
      setSelectedVideo(video)
    )
  } 

  return (
    <div className="App">

        <Header/>

        {/* using props */}
        <MainVideo selectedVideo={selectedVideo}/>
      
      <section className='comments'>
        <h4 className='comments__number'>{selectedVideo.comments.length} Comments</h4>
          <CommentForm/>

        {/* using props */}  
          <CommentList comments ={selectedVideo.comments}/>
      </section>

        {/*Next video components*/}
        <section className='nextvideo'>
        <div className='nextvideo__header'>NEXT VIDEOS</div>
        <ul className='nextvideo__ul'>
          {videosData.filter((video) => video.id !== selectedVideo.id).map((video)=> {
            return <li key={video.id} onClick={() => clickHandler(video)} className='nextvideo__list'>
              <video className='video__image' poster={video.image}></video>
              <div className='nextvideo__text'>
                <div className='nextvideo__title'>{video.title}</div>
                <div className='nextvideo__channel'>{video.channel}</div>
              </div>
              </li>
          })}
        </ul>
        </section>
    </div>
  );
}

export default App;
