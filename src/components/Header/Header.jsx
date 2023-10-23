import "./Header.scss";

import logo from "../../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import uploadIcon from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header className="siteheader">
      <div className="siteheader__mobile">
        <img src={logo} alt="BrainFlix logo" className="siteheader__logo" />
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
          <h4>UPLOAD</h4>
        </button>
        <div className="siteheader__profilepictablet"></div>
      </div>

      <div className="siteheader__tablet">
        <img src={logo} alt="BrainFlix logo" className="siteheader__logo" />
        <div className="siteheader__tabletright">
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
            <h4>UPLOAD</h4>
          </button>
          <div className="siteheader__profilepictablet"></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
