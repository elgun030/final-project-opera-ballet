import React, { useState } from "react";
import LearningImage from "../../assets/Frame 30.svg";
import uzeyir from "../../assets/uzeyir.svg";
import muslim from "../../assets/muslim.svg";
import PlayButton from "../../assets/Play.svg";
import RectangleVideo from "../../assets/Üzeyr Hacıbəylinin _Leyli və Məcnun_ operası.mp4";
import "./learning.css";

const Learning = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
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
                src={LearningImage}
                alt="Rectangle"
                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                onClick={handlePlayVideo}
              />
            </>
          )}

          <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
            <video
              ref={videoRef}
              className={`w-full h-full object-cover ${
                isPlaying ? "block" : "hidden"
              }`}
              controls
              onPlay={() => setIsPlaying(true)}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              }}
            >
              <source src={RectangleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {isPlaying && (
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full cursor-pointer shadow-lg"
              >
                ❌
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="container max-w-[1320px] m-auto mt-[58px]">
        <div className="flex items-center text-center justify-center">
          <h2 className="font-bold text-[52px] leading-[71px] font-sf-pro">
            Notable Faces
          </h2>
        </div>

        <div className="flex flex-wrap justify-between mt-[48px]">
          {/* Uzeyir */}
          <div className="w-[472px] items-center flex flex-col mb-8">
            <div className="mb-[38px]">
              <img src={uzeyir} alt="uzeyir" className="w-full" />
            </div>
            <div>
              <p className="font-bold text-sm leading-[21px] flex text-center">
                Uzeyir bey Abdulhuseyn bey oglu Hajibeyli (September 18, 1885,
                Aghjabedi, Shusha district - November 23, 1948, Baku)
                Azerbaijani, Soviet composer, conductor, musicologist,
                publicist, pedagogue, public figure. People's Artist of the USSR
                (1938). Winner of two "Stalin" awards of the II degree (1941,
                1946). Cavalier of the Order of "Lenin" (1938).
              </p>
            </div>
          </div>

          {/* Muslim */}
          <div className="w-[472px] items-center flex flex-col mb-8">
            <div className="mb-[38px]">
              <img src={muslim} alt="muslim" className="w-full" />
            </div>
            <div>
              <p className="font-bold text-sm leading-[21px] flex text-center">
                Abdulmuslum Mahammad oglu Magomayev (September 18, 1885, Grozny
                - July 28, 1937, Nalchik) — Azerbaijani composer, conductor,
                pedagogue, folklorist, public figure, one of the founders of
                Azerbaijani classical music, the author of the first
                European-style opera named after Muslim Magomayev. He is the
                grandfather of singer Muslim Magomayev.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
