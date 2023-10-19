import logo from './assets/logo/BrainFlix-logo.svg';
import searchIcon from './assets/icons/search.svg';
import MainVideo from './components/MainVideo/MainVideo';
import CommentForm from './components/CommentForm/CommentForm'

import { useState } from 'react';


import "./App.scss";

import videosData from "./data/video-details.json";

// import commentsData from "./data/video-details.json";
import CommentList from './components/CommentList/CommentList';

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
      <header className="siteheader">
        <img src={logo} alt="BrainFlix logo" className="siteheader__logo"/>  
        {/* <input type="text" placeholder="Search..">Search</input>  */}
        <img src={searchIcon} alt="search icon" className='siteheader__searchicon'/>
      <input type="search" placeholder="Search" className='siteheader__searchinput'></input>
      <div className="siteheader__profilepic"></div>
      <button className='siteheader__btn'>Upload</button>
      </header>

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
