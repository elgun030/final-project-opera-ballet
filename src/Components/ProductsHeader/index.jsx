import React from "react";

const ProductsHeader = () => {
  return (
    <div className="bg-[#C8102E]">
      <div className="container max-w-[1224px] m-auto py-[46px] px-4">
        <div>
          <div className="mb-[23px]">
            <h2 className="text-white text-lg sm:text-2xl">
              <span className="text-black">HOME </span>/ SWAN LAKE COLLECTION
            </h2>
          </div>
          <div>
            <h2 className="font-semibold text-[38px] sm:text-[28px] leading-[46px] mb-2.5 text-white ">
              SWAN LAKE COLLECTION
            </h2>
            <p className="font-semibold text-[19px] sm:text-[16px] leading-[23px] text-white w-full sm:w-[90%]">
              One of the most admired and beloved ballets of all time, Swan Lake
              is a must-see experience for any lover of the arts. The incredible
              Tchaikovsky score brings the story to life, and the breathtaking
              choreography transports you to a new world.
            </p>
            <p className="font-semibold text-[19px] sm:text-[16px] leading-[23px] text-white w-full sm:w-[90%] mt-2">
              Browse ballet prints from our large archive of performances,
              greeting cards and accessories. Whether you are shopping for a
              classical music lover, a ballet fan or yourself - this selection
              has something perfect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
