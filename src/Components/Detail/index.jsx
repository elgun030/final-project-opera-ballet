import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // URL'den ürün id'sini alıyoruz
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [events, setEvents] = useState([]); // events durumu için ekliyoruz

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Ürün ID'si geçersiz.");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(`http://localhost:8000/products/${_id}`);
        if (!response.ok) {
          throw new Error("Ürün detayı alınamadı.");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 3 : prevIndex - 1
    );
  };

  // Yükleme, hata ve ürün kontrolü
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div className="container max-w-[1224px] m-auto">
      <div className="flex items-center gap-[60px]">
        <div className="border border-gray-300 rounded-lg p-4 shadow-md">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div>
          <div className="mb-[52px]">
            <h2 className="font-semibold text-[30.87px] leading-[37.26px] mb-2 w-[384px] font-gotham">
              {product.name}
            </h2>
            <p className="font-medium text-[26.33px] leading-[31.86px] italic">
              £{product.price}
            </p>
          </div>
          <div>
            <p className="font-medium text-xl leading-[22.9px] text-[#262626] mb-[16px]">
              Quantity
            </p>
            <div className="flex mb-[20px]">
              <div className="w-[40px] h-[40px] flex items-center text-center bg-[#D9D9D9] justify-center cursor-pointer">
                <FaMinus />
              </div>
              <div className="border w-[80px] h-[40px] flex items-center text-center justify-center ">
                <p className="font-medium text-[32.36px] leading-[39.16px] text-[#262626] font-gotham">
                  1
                </p>
              </div>
              <div className="w-[40px] h-[40px] flex items-center text-center bg-[#D9D9D9] justify-center cursor-pointer">
                <FaPlus />
              </div>
            </div>
          </div>
          <div>
            <button className="w-[277px] border-2 border-[#C8102E] text-[#C8102E] h-[59px] hover:bg-[#C8102E] hover:text-white">
              Add to basket
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[160px]">
        <div className="container max-w-[1280px] m-auto">
          <div className="flex justify-between mb-[40px]">
            <div className="font-normal text-[32px] leading-[30.62px] font-gotham">
              <h2>RECENTLY VIEWED PRODUCTS</h2>
            </div>
            <div className="flex">
              <div
                className="border bg-[#F0F0F0] text-black items-center flex text-center px-2.5 cursor-pointer"
                onClick={prevSlide}>
                <MdChevronLeft className="w-[24px] h-[24px]" />
              </div>
              <div
                className="border bg-[#F0F0F0] text-black items-center flex text-center px-2.5 cursor-pointer"
                onClick={nextSlide}>
                <MdChevronRight className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
              {events.map((event, index) => (
                <div key={index} className="w-[33.33%] flex-shrink-0 px-2">
                  <div className="mb-[19px]">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <h2 className="font-normal text-lg leading-[20.57px]">
                      {event.title}
                    </h2>
                    <p className="font-semibold text-[22px] leading-[26.63px]">
                      {event.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
