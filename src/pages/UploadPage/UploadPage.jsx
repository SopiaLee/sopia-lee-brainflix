import "./UploadPage.scss";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";

function UploadPage() {
  let navigate = useNavigate();

  function handlePublishButton() {
    alert("Video Uploaded :)");
    navigate("/");
  }

  return (
    <>
      <div className="bordertop"></div>
      <div className="uploadpage">
        <h1 className="uploadpage__header">Upload Video</h1>
        <div className="uploadpage__desktopwrap">
          <div className="uploadpage__desktopleft">
            <h4 className="uploadpage__title">VIDEO THUMBNAIL</h4>
            <img className="uploadpage__img"></img>
          </div>
          <form className="uploadpage__form">
            <h4 className="uploadpage__formtitle">TITLE YOUR VIDEO</h4>
            <input
              className="uploadpage__titleinput"
              placeholder="Add a title to your video"
            ></input>
            <h4 className="uploadpage__formdes">ADD A VIDEO DESCRIPTION</h4>
            <input
              className="uploadpage__desinput"
              placeholder="Add a description to your video"
            ></input>
          </form>
        </div>
        <div className="uploadpage__buttongroup">
          <button
            className="uploadpage__publishbtn"
            onClick={handlePublishButton}
          >
            <img
              src={publishIcon}
              alt="uploadpage publishicon"
              className="uploadpage__publishicon"
            ></img>{" "}
            PUBLISH
          </button>
          <button className="uploadpage__cancelbtn">CANCEL</button>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
