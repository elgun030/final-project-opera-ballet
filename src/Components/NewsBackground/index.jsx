import React, { useEffect, useState } from "react";
import NewsImage from "../../assets/Rectangle 25.svg"; // Varsayılan resim

const NewsBackground = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:8000/news');
      if (!response.ok) {
        throw new Error('Haberler alınamadı');
      }
      const data = await response.json();
      setNewsData(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Haberleri alırken bir hata oluştu.');
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const handleOverlayClick = (event) => {
    // Eğer tıklanan element modal dışındaysa modalı kapat
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="container max-w-[1224px] m-auto">
      <h2 className="font-bold text-[36px] leading-[44px] font-gotham mt-[40px] mb-6">
        NEWS
      </h2>
      {newsData.map((news, index) => (
        <div 
          key={news._id} 
          className="flex justify-between gap-4 items-center mb-[96px] cursor-pointer"
        >
          <div className="flex w-full p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" onClick={() => handleNewsClick(news)}>
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 pr-4">
                  <img src={news.image || NewsImage} alt={news.title} className="w-full h-auto object-cover" />
                </div>
                <div className="w-1/2">
                  <h3 className="font-normal mb-[90px] text-xl ">{news.title}</h3>
                  <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                    onClick={(e) => {
                      e.stopPropagation(); // Modal açılmadan tıklamanın yayılmasını engelle
                      handleNewsClick(news);
                    }}
                  >
                    Haber Oku
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2">
                  <h3 className="font-normal text-xl mb-[90px]">{news.title}</h3>
                  <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                    onClick={(e) => {
                      e.stopPropagation(); // Modal açılmadan tıklamanın yayılmasını engelle
                      handleNewsClick(news);
                    }}
                  >
                    Haber Oku
                  </button>
                </div>
                <div className="w-1/2 pl-4">
                  <img src={news.image || NewsImage} alt={news.title} className="w-full h-auto object-cover" />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" 
          onClick={handleOverlayClick} // Ekranın herhangi bir yerine tıklandığında modalı kapat
        >
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-3xl w-full mx-4 max-h-[90%] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-2 right-2 text-xl hover:text-red-600">X</button>
            {selectedNews && (
              <>
                <img src={selectedNews.image || NewsImage} alt={selectedNews.title} className="w-full h-auto mb-4" />
                <h3 className="font-normal text-lg">{selectedNews.title}</h3>
                <p className="font-normal text-base leading-[21px] mt-2">{selectedNews.text}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsBackground;