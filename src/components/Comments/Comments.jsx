import "./Comments.scss";

function Comments(props) {
  // console.log(props);

  return (
    <li className="comments__commentList">
      <div className="comments__profilepic"></div>
      <div className="comments__text">
        <div className="comments__top">
          <div className="comments__name">{props.comment.name}</div>
          <div className="comments__date">{props.comment.timestamp}</div>
        </div>
        <div className="comments__content">{props.comment.comment}</div>
      </div>
    </li>
  );
}

export default Comments;
