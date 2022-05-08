import React from "react";

function ThumbsUp({likes, dislikes, upVote, downVote}) {
  return (
    <div>
      <button id="thumbsUp" onClick={()=>upVote(1)}>{likes}👍</button>
      <button id="thumbsDown" onClick={()=>downVote(1)}>{dislikes}👎</button>
    </div>
  )
}

export default ThumbsUp;