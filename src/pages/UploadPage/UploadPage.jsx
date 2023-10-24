import "./UploadPage.scss";

function UploadPage() {
  return (
    <div className="uploadpage">
      <h1 className="uploadpage__header">Upload Video</h1>
      <h4 className="uploadpage__title">VIDEO THUMBNAIL</h4>
      <img className="uploadpage__img"></img>

      <form className="uploadpage__form">
        <h4 className="uploadpage__formtitle">TITLE YOUR VIDEO</h4>
        <input
          className="uploadpage__titleinput"
          placeholder="Add a title to your video"
        ></input>
        <h4 className="uploadpage__formdes">ADD A VIDEO</h4>
        <input
          className="uploadpage__desinput"
          placeholder="Add a description to your video"
        ></input>
      </form>
      <div className="uploadpage__buttongroup">
        <button className="uploadpage__publishbtn">PUBLISH</button>
        <button className="uploadpage__cancelbtn">CANCEL</button>
      </div>
    </div>
  );
}

export default UploadPage;
