import React, { useRef, useState } from "react";
import RectangleVideo from "../../assets/Swan Lake – Dance of the cygnets (The Royal Ballet).mp4";
import RectangleImage from "../../assets/Rectangle 1.svg";
import PlayButton from "../../assets/Play.svg";


const Stream = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div>
      <div className="container m-auto max-w-[1440px]">
     <div className="relative w-full h-[700px] flex justify-center items-center">
        {!isPlaying && (
          <>
            <img
              src={PlayButton}
              alt="Play Button"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-black rounded-full p-2 cursor-pointer shadow-lg z-10"
              onClick={handlePlayVideo}
            />
            <img
              src={RectangleImage}
              alt="Rectangle"
              className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
              onClick={handlePlayVideo}
            />
          </>
        )}

        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls
          onPlay={() => setIsPlaying(true)}
          style={{ display: isPlaying ? "block" : "none" }}>
          <source src={RectangleVideo} type="video/mp4" />
        </video>
      </div>
      </div>
      <div className="bg-[#1866DC]">
  <div className="container max-w-[1222px] m-auto">
    <div className="flex justify-between items-center text-center py-[60px] gap-[56px]">
      <h2 className="text-white font-semibold text-[30.95px] leading-[37.46px]">
        INCREDIBLE PERFORMANCES WHEREVER YOU ARE
      </h2>
      <div>
        <button className="bg-white text-black px-6 py-2 font-bold rounded-lg">
          Get started
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Stream;
