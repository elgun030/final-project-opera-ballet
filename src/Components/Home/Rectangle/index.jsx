import React from "react";
import opera from "../../../assets/opera ballet.mp4";

const Rectangle = () => {
  return (
    <div className="container m-auto max-w-[1440px]">
      <div className="relative bg-black w-full h-[800px] flex justify-center items-center">
        <video
          src={opera}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-black text-white">
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
              <button className="w-[203.4px] sm:h-[47.54px] bg-[#C8102E] text-white font-bold text-lg leading-[17.14px]">
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
