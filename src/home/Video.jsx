import React from "react";
import myVideo from "../assets/video.mp4"; // correct relative path

function Video() {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      src={myVideo}
    />
  );
}

export default Video;
