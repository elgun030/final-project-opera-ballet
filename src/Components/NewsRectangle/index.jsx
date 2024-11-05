import React, { useState, useEffect } from "react";
import NewsRectangleImage from "../../assets/NewsRectangle.svg";
import NewsRectangleImage2 from "../../assets/school.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const slides = [
  {
    src: NewsRectangleImage,
    title: "BAŞLIK 1",
    date: "TARİH 1",
    description: "Açıklama 1.",
  },
  {
    src: NewsRectangleImage2,
    title: "BAŞLIK 2",
    date: "TARİH 2",
    description: "Açıklama 2.",
  },
  // Daha fazla slide ekleyin
];

const NewsRectangle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [buttonScale, setButtonScale] = useState(1);

  // Slaytların otomatik döngüsü
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5 saniyede bir slayt değiştir
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setShowDetail(false); // Yeni slayta geçince detay gizlensin
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    setShowDetail(false); // Yeni slayta geçince detay gizlensin
  };

  const toggleDetail = () => {
    setShowDetail(!showDetail); // Detay görünümünü değiştir
  };

  const handleButtonClick = () => {
    setButtonScale(1.2); // Tıklama efekti için ölçeklendir
    setTimeout(() => setButtonScale(1), 300); // 300ms sonra ölçeği eski haline getir
  };

  return (
    <div
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      {/* Slider bileşeni */}
      <div className="relative container max-w-[1440px] bg-[#1A1A1A] m-auto overflow-hidden">
        <div
          className="relative flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative flex">
              <div className="flex-1 flex flex-col justify-center items-center p-4 text-white text-center">
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg">{slide.date}</p>
                <p className="font-light mt-2">{slide.description}</p>
                <button
                  className="mt-2 text-white underline"
                  onClick={toggleDetail}>
                  {showDetail ? "Hide Details" : "Show Details"}
                </button>
              </div>
              <img
                src={slide.src}
                alt={`NewsRectangleImage ${index + 1}`}
                className="w-1/2 h-[503px] object-cover transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>

        {/* Chevron ikonları */}
        <div
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 text-white rounded-full bg-black cursor-pointer p-3 transition-all duration-300 ${showButtons ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          onClick={() => {
            handleButtonClick();
            prevSlide();
          }}>
          <MdChevronLeft className="w-[36px] h-[36px] transform transition-transform duration-300" style={{ transform: `scale(${buttonScale})` }} />
        </div>
        <div
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 text-white rounded-full bg-black cursor-pointer p-3 transition-all duration-300 ${showButtons ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          onClick={() => {
            handleButtonClick();
            nextSlide();
          }}>
          <MdChevronRight size={36} className="transform transition-transform duration-300" style={{ transform: `scale(${buttonScale})` }} />
        </div>

        {/* Daireler ile aktif slide göstergesi */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index
                  ? "bg-white scale-125"
                  : "bg-gray-400 scale-100"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setShowDetail(false); // Detayı gizle
              }}
            />
          ))}
        </div>
      </div>

      {/* Detay divi altta yer alacak şekilde */}
      {showDetail && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4">
          <h3 className="text-lg font-bold">Detaylar</h3>
          <p>{slides[currentIndex].description}</p>
        </div>
      )}

      {/* Üstteki div */}
      <div className="bg-[#1866DC]">
        <div className="container max-w-[1224px] m-auto py-[25px]">
          <p className="font-semibold text-xl leading-[23.26px] text-white w-[772px] mb-[11px] text-center">
            This new series shines a 'Spotlight on...' principal dancers of The
            Royal Ballet as they discuss their life, work and favourite
            characters to dance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsRectangle;
