import React from "react";

const FooterElem = () => {
  return (
    <div className="bg-[#1866DC] mt-[125px]">
      <div className="container max-w-[1224px] m-auto py-[25px]">
        <div>
          <div>
            <h2 className="font-semibold text-[26.02px] leading-[31.49px] mb-2 text-white">
              HELP
            </h2>
          </div>
          <div>
            <p className="font-semibold text-[14.52px] leading-[17.57px] text-white w-[772px] mb-[11px]">
              You can find information about how Royal Opera House Stream works,
              as well as information about subscription types, how to access via
              different devices and more on our Help page.
            </p>
          </div>
          <div>
            <button className="w-[154px] h-[48px] bg-white font-semibold text-lg leading-[21.78px] text-black ">
              Get help{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterElem;
