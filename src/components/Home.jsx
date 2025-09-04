import React from "react";
import Video from "../home/video";
import HomeTopText from "../home/HomeTopText";
import HomeBottomText from "../home/HomeBottomText";

const Home = () => {
  
  return (
    <div className="overflow-hidden">
      
      <div className="w-full h-screen fixed">
        <Video />
      </div>
      <div className="w-screen h-screen relative flex flex-col">
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
