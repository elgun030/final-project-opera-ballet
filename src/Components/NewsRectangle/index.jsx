import React from "react";
import NewsRectangleImage from "../../assets/NewsRectangle.svg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const NewsRectangle = () => {
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      };
  return (
 <div>
      <div className="bg-[#1A1A1A]">
      <div className=" text-white max-w-[1224px] container m-auto flex items-center p-4"> {/* Flex yapısı ile yan yana ve ortalanmış hale getirildi */}
      <div className="flex-1  px-[56px]"> {/* Yazı alanı için genişlik ayarlandı */}
        <h2 className="font-thin text-[26.49px] leading-[32.06px] mb-[20px] ">
          SPOTLIGHT ON... MAYARA MAGRI
        </h2>
        <p className="font-thin text-base leading-[19.36px] w-[376px] mb-[31px] ">
          Mayara Magri discusses what she loves about dance and her career
          with The Royal Ballet.
        </p>
        <button className="w-[196px] h-[47.54px] border  font-bold text-base leading-[15.23px] font-gotham mt-4">
          Watch trailer
        </button>
      </div>
      <div > {/* Resim alanı için flex-shrink-0 ile boyutu korunur */}
        <img src={NewsRectangleImage} alt="NewsRectangleImage" className="max-w-full h-auto" /> {/* Resim için sınırlama */}
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 -translate-x-1/2 text-white rounded-full bg-black cursor-pointer p-3 hover:bg-opacity-70 transition duration-300"
        onClick={prevSlide}>
        <MdChevronLeft className="w-[36px] h-[36px]" />
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-1/2 text-white rounded-full bg-black cursor-pointer p-3 hover:bg-opacity-70 transition duration-300"
        onClick={nextSlide}>
        <MdChevronRight size={36} />
      </div>
    </div>
      </div>
    <div className="bg-[#1866DC]">
      <div className="container max-w-[1224px] m-auto py-[25px]">
        <div>
      
          <div>
            <p className="font-semibold text-xl leading-[23.26px] text-white w-[772px] mb-[11px]">
            This new series shines a 'Spotlight on...' principal dancers of The Royal Ballet as they discuss their life, work and favourite characters to dance.
            </p>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default NewsRectangle;
