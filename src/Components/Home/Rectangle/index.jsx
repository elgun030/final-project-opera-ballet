import React, { useState, useRef } from "react";
import RectangleVideo from "../../../assets/Swan Lake – Dance of the cygnets (The Royal Ballet).mp4";
import RectangleImage from "../../../assets/Rectangle 1.svg";
import PlayButton from "../../../assets/Play.svg";

const Rectangle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="container mx-auto max-w-[1440px]">
      <div className="relative w-full h-[502px] flex justify-center items-center">
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
      <div className="bg-white">
        <div className="container mx-auto max-w-[1224px]">
          <div className="flex flex-col sm:flex-row justify-between items-center mt-16 mb-10">
            <div>
              <a className="underline font-normal text-lg sm:text-xl leading-[24.2px]">
                SIGN UP FOR EMAILS
              </a>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-semibold text-3xl sm:text-[42px] leading-[50.83px]">
                ROYAL OPERA HOUSE
              </h2>
            </div>
            <div>
              <button className=" w-[203.4px] sm: h-[47.54px] bg-[#C8102E] text-white font-bold text-lg leading-[17.14px]">
                See what's on
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
