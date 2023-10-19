import "./Header.scss";

import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="siteheader">
      <img src={logo} alt="BrainFlix logo" className="siteheader__logo" />
      {/* <input type="text" placeholder="Search..">Search</input>  */}
      <div className="siteheader__top">
        <div className="siteheader__search">
          <img
            src={searchIcon}
            alt="search icon"
            className="siteheader__searchicon"
          />
          <input
            type="search"
            placeholder="Search"
            className="siteheader__searchinput"
          ></input>
        </div>
        <div className="siteheader__profilepic"></div>
      </div>
      <button className="siteheader__btn">
        <img
          src={uploadIcon}
          alt="upload icon"
          className="siteheader__uploadicon"
        />
        UPLOAD
      </button>
    </header>
  );
}
export default Header;
