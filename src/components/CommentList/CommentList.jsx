import Comments from "../Comments/Comments";

function CommentList(props) {
  return (
    <ul>
      {props.comments.map((comment) => (
        <Comments key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default CommentList;
