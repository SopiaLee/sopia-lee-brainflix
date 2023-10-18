import logo from './assets/logo/BrainFlix-logo.svg';
import searchIcon from './assets/icons/search.svg';
import Comments from './components/Comments/Comments';

import "./App.scss";
import commentsData from "./data/video-details.json";
import CommentList from './components/CommentList/CommentList';

function App() {
  return (
    <div className="App">
      <header className="siteheader">
        <img src={logo} alt="BrainFlix logo" className="siteheader__logo"/>  
        {/* <input type="text" placeholder="Search..">Search</input>  */}
        <img src={searchIcon} alt="search icon"/>
      <input type="search" placeholder="Search">
      </input>
      <div className="siteheader__profilepic"></div>
      <button className='siteheader__btn'>Upload</button>
      </header>

      <section className='main-video'>
        <video
        className="" poster="" controls="controls"
        ></video>
      </section>
      <section className='comments'>
      <CommentList comments ={commentsData}/>
      <ul>
        {commentsData.map((comment)=> {
          return <li key={comment.id}>{comment.name}{comment.timestamp}{comment.comment}</li>
        }
        )}
      </ul>
      </section>
    </div>
  );
}

export default App;
