import React, { useState } from "react";
import SectionImage from "../../../assets/Section.svg";
import SectionImage2 from "../../../assets/Section2.svg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const images = [
  {
    src: SectionImage,
    title: "LES RENDEZVOUS / THE DREAM / RHAPSODY",
    date: "6 - 19 JUNE 2024",
    description:
      "Three of Ashton's most celebrated and expertly choreographed pieces set to music by Mendelssohn, Rachmaninoff and Auber.",
  },
  {
    src: SectionImage2,
    title: "ANOTHER PERFORMANCE TITLE",
    date: "20 - 30 JUNE 2024",
    description: "An overview of the other performance description here.",
  },
];

const Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative container max-w-[1440px] m-auto overflow-hidden">
      <div
        className="relative flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            <img
              src={image.src}
              alt={`SectionImage ${index + 1}`}
              className="w-full h-[503px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center text-white px-[52px] mt-[32px] rounded-lg">
        <h2 className="text-4xl font-bold leading-[34.5px] mb-4 font-judson drop-shadow-lg">
          What's on
        </h2>
        <h2 className="text-[48px] w-[578px] leading-[38.28px] font-semibold mb-2 font-gotham drop-shadow-lg">
          {images[currentIndex].title}
        </h2>
        <p className="mt-2 text-lg leading-[21px] font-light font-gotham">
          {images[currentIndex].date}
        </p>
        <p className="font-normal text-md leading-[21px] w-[578px] font-gotham uppercase mt-[15px] mb-[26px]">
          {images[currentIndex].description}
        </p>
        <button className="mt-4 w-[203.4px] h-[47.54px] bg-[#C8102E] text-white font-bold text-lg leading-[17.14px] transition-transform transform hover:scale-105 shadow-lg">
          More info
        </button>
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

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-gray-400 scale-100"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
