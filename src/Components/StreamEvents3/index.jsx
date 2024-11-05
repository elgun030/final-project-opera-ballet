import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const StreamEvents3 = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // API'den veri çekme fonksiyonu
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/actors"); // API URL'si
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Bileşen yüklendiğinde verileri çek
  }, []);

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

  const handleMoreInfoClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleBuyTicketClick = () => {
    alert("Ticket purchase functionality goes here.");
  };

  // Tarihi formatlama fonksiyonu
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Geçersiz Tarih"; // Geçersiz tarih durumu
    }
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-EN', options);
  };

  return (
    <div className="mt-[57.57px]">
      <div className="container max-w-[1280px] m-auto">
        <div className="flex justify-between mb-[40px]">
          <div className="font-thin text-[32px] leading-[30.62px] uppercase font-gotham">
            <h2>Actors</h2>
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
            {events.map((event) => (
              <div key={event.id} className="w-[33.33%] flex-shrink-0 px-2">
                <div className="mb-[19px]">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <h2 className=" font-semibold text-[22px] leading-[26.63px]">
                    {event.name}
                  </h2>
                  <p className="font-normal text-lg leading-[20.57px]">
                    {event.biography}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-lg leading-[20.57px]">
                    {formatDate(event.dateOfBirth)} {/* Tarih formatlama burada yapılıyor */}
                  </p>
                  <h2 className="font-normal text-base leading-[19.36px] mb-[29px] mt-2">
                    {event.description}
                  </h2>
                  <button
                    className="mt-4 w-[203.4px] h-[47.54px] bg-[#C8102E] text-white font-bold text-lg leading-[17.14px] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={() => handleMoreInfoClick(event)}>
                    More info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={closeModal}>
            <div
              className="bg-white p-4 rounded-lg w-[90%] max-w-[600px]"
              onClick={(e) => e.stopPropagation()}>
              <h2 className="font-semibold text-xl">{selectedEvent?.name}</h2>
              <img
                src={selectedEvent?.image}
                alt={selectedEvent?.title}
                className="mb-4 w-full rounded-lg"
              />
              <p className="font-semibold text-lg">
                {selectedEvent?.nationality}
              </p>
              <p className="font-normal text-lg">
                {selectedEvent?.biography}
              </p>
              <p className="font-medium text-lg leading-[20.57px]">
                    {formatDate(selectedEvent?.dateOfBirth)} 
                  </p>

              <div className="flex justify-between mt-4">
                <button
                  className="w-[48%] h-[47.54px] border text-black font-bold text-lg rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamEvents3;
