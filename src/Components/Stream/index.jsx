import React from "react";
import StreamImage from "../../assets/Stream.svg";
import Rectangle2 from "../Rectangle2";

const Stream = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative w-full h-[502px] flex justify-center items-center">
          <>
            <img
              src={StreamImage}
              alt="Rectangle"
              className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
            />
          </>
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
