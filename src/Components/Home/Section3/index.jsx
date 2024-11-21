import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section3Image from "../../../assets/Section3.svg";
import { BsArrowRight } from "react-icons/bs";

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-back",
    });
  }, []);

  return (
    <div className="container max-w-[1280px] m-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-[175px]">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-up"
          data-aos-duration="2000">
          <img src={Section3Image} alt="Section3Image" />
        </div>

        <div
          className="w-[573px] flex flex-col justify-center gap-6 xs:w-[100%]"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000">
          <div>
            <h2 className="font-semibold text-5xl leading-[50px]">
              GIVE THE GIFT OF BALLET AND OPERA
            </h2>
          </div>
          <div>
            <p className="font-bold text-lg leading-[20.83px] font-judson">
              Give the gift that keeps on giving with Royal Opera House
              membership. Royal Opera House Friends get exclusive access to
              rehearsals and priority booking ahead of the public each Season.
              Membership is a charitable donation that supports the future of
              ballet, dance, opera and music.
            </p>
          </div>
          <div className="flex items-center gap-[33px] text-center">
            <button
              className="mt-4 w-[254.34px] h-[47.54px] bg-[#C8102E] text-white font-bold text-lg leading-[17.14px] font-gotham"
              data-aos="fade-up"
              data-aos-duration="2000">
              Visit our online shop
            </button>

            <div
              className="flex items-center gap-[4.88px] mt-[15.8px]"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000">
              <h2 className="text-[22.45px] leading-[23.51px] text-[#5E5E5E] font-gotham font-thin">
                Find out more
              </h2>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
