import React from "react";

function Subtitle({views, date}) {
  return (
    <div id="info">
      <p>{views} Views | Uploaded {date}</p>
    </div>
  )
}

export default Subtitle;