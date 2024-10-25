import React from "react";
import Section2Image from "../../../assets/Rectangle 19.svg";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="container max-w-[1224px] m-auto">
    <div className="flex flex-col sm:flex-row items-center mt-[106.34px] mb-[103.23px]"> 
      <div className="flex-shrink-0"> 
        <img src={Section2Image} alt="Section2Image" className="w-auto h-[400px] object-cover" />
      </div>
      <div className="ml-0 sm:ml-[119px] mt-4 sm:mt-0"> 
        <h2 className="font-thin text-5xl leading-[57.8px] text-center sm:text-center sm:flex sm:items-start  sm:font-thin">SHOP</h2> 
        <p className="font-bold text-lg leading-[20.83px] font-judson mt-[13.36px] mb-[13.36px] w-[387px] sm:w-[573px] text-center sm:text-left">
          Looking for the perfect gift for an opera or ballet lover? Browse
          our collections inspired by our art and artists, including prints,
          clothes, home ware. Shop our Swan Lake collection and more online or
          in-store today. Visit our online shop
        </p>
        <div className="flex justify-center sm:justify-start">
          <Link to='/ProductPage'>
            <button className="mt-4 w-[254.34px] h-[47.54px] bg-[#C8102E] text-white font-bold text-lg leading-[17.14px] font-gotham">
              Visit our online shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div> 
  
  );
};

export default Section2;
