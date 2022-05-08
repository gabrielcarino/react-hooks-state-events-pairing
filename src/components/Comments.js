import React from "react";
import Comment from "./Comment";

function Comments({comments, hide, state}) {
  const titleArray = [1];
  const commentTitle = titleArray.map(() => {
    if (state === true) {
      return <h2 key={state}>{comments.length} Comments</h2>
    }
    else return
  });
  const commentList = comments.map(comment => {
    if (state === true) {
      return (
      <Comment key={comment.id} comment={comment.comment} user={comment.user} />
    )}
    else return 
  });
  const buttonText = state ? "Hide" : "Show"
  return (
    <>
      <button onClick={hide}>{buttonText} Comments</button>
      <div>{commentTitle}{commentList}</div>
    </>
  )
};

export default Comments;