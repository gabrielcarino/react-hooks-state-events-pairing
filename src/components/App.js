import video from "../data/video.js";
import React, { useState } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import ThumbsUp from "./ThumbsUp";
import Comments from "./Comments";

function App() {

  let [upVotes, setUpVotes] = useState(video.upvotes);
  let [downVotes, setDownVotes] = useState(video.downvotes);
  let [commentState, setCommentState] = useState(true)
  function upVote(value) {
    setUpVotes(upVotes+=value)
  }
  function downVote(value) {
    setDownVotes(downVotes+=value)
  }
  function hideComments() {
    setCommentState(commentState = !commentState)
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title title={video.title}/>
      <Subtitle views={video.views} date={video.createdAt}/>
      <ThumbsUp likes={upVotes} dislikes={downVotes} upVote={upVote} downVote={downVote} />
      <br></br>
      <Comments hide={hideComments} comments={video.comments} state={commentState} />
    </div>
  );
}

export default App;
