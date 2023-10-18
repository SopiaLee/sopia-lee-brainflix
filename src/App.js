import logo from './assets/logo/BrainFlix-logo.svg';
import searchIcon from './assets/icons/search.svg';
import MainVideo from './components/MainVideo/MainVideo';
import CommentForm from './components/CommentForm/CommentForm'


import "./App.scss";

import videosData from "./data/video-details.json";

// import commentsData from "./data/video-details.json";
import CommentList from './components/CommentList/CommentList';

function App() {

  let selectedVideo = videosData[0];
  console.log(selectedVideo);

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

      <MainVideo/>
      
      <section className='comments'>
        <h4 className='comments__number'>{selectedVideo.comments.length} Comments</h4>

      <section className='comments__form'>
        <CommentForm/>
      </section>


      <CommentList comments ={selectedVideo.comments}/>
      {/* <ul>
        {commentsData.map((comment)=> {
          return <li key={comment.id}>{comment.name}{comment.timestamp}{comment.comment}</li>
        }
        )}
      </ul> */}
      </section>
    </div>
  );
}

export default App;
