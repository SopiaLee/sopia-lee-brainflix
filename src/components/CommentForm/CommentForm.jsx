import "./CommentForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";

function CommentForm() {
  return (
    <form className="commentsform">
      <div className="commentsform__profilepic"></div>
      <div className="commentsform__text">
        <h4 className="commentsform__title">JOIN THE CONVERSATION</h4>
        <div className="commentsform__tablettop">
          <input
            className="commentsform__input"
            placeholder="Add a new comment"
            name="commentInput"
          ></input>
          <button className="commentsform__button">
            <img
              src={commentIcon}
              alt="add comment icon"
              className="commentsform__icon"
            />
            COMMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
