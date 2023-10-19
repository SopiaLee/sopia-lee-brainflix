import Comments from "../Comments/Comments";
import "./CommentList.scss";

function CommentList(props) {
  return (
    <ul className="comments__ul">
      {props.comments.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
