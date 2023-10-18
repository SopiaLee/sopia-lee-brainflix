import "./Comments.scss";

function Comments(props) {
  console.log(props);

  return (
    <li className="commentList">
      <div className="commentList__profilepic"></div>
      <div className="commentList__text">
        <div className="commentList__texttop">
          <div className="comment__name">{props.comment.comments[0].name}</div>
          <div className="comment__date">
            {props.comment.comments[0].timestamp}
          </div>
        </div>
        <div className="comment__content">
          {props.comment.comments[0].comment}
        </div>
      </div>
    </li>
  );
}

export default Comments;
