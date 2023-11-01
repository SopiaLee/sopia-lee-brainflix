import "./UploadPage.scss";
import publishIcon from "../../assets/icons/publish.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UploadPage() {
  let navigate = useNavigate();

  function handlePublishButton(event) {
    event.preventDefault();

    const response = axios.post(`${process.env.REACT_APP_API_URL}/videos`, {
      title: event.target.videoTitle.value,
      description: event.target.videoDescription.value,
    });

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
          <form
            className="uploadpage__form"
            onSubmit={(event) => {
              handlePublishButton(event);
            }}
          >
            <h4 className="uploadpage__formtitle">TITLE YOUR VIDEO</h4>
            <input
              className="uploadpage__titleinput"
              placeholder="Add a title to your video"
              name="videoTitle"
            ></input>
            <h4 className="uploadpage__formdes">ADD A VIDEO DESCRIPTION</h4>
            <input
              className="uploadpage__desinput"
              name="videoDescription"
              placeholder="Add a description to your video"
            ></input>
            <div className="uploadpage__buttongroup">
              <button className="uploadpage__publishbtn">
                <img
                  src={publishIcon}
                  alt="uploadpage publishicon"
                  className="uploadpage__publishicon"
                ></img>{" "}
                PUBLISH
              </button>
              <div className="uploadpage__cancelbtn">CANCEL</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadPage;
