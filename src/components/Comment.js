import React from "react";

function Comment({comment, user}) {
  return (
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
    </div>
  )
}

export default Comment;