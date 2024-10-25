import React, { useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import ballerinaImages from "../../assets/school.png"; // Balerin resmi
import "./../Products/loading.css"; // CSS dosyası

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const Faq = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading durumu
  const [open, setOpen] = useState(0);

  const fetchFaqs = async () => {
    try {
      const response = await fetch('http://localhost:8000/faqs'); // API uç noktası
      if (!response.ok) {
        throw new Error('FAQ verileri alınamadı');
      }
      const data = await response.json();
      setFaqData(data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      alert('FAQ verilerini alırken bir hata oluştu.');
    } finally {
      // Yükleme tamamlandıktan sonra 2 saniye bekle
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 2 saniyelik gecikme
    }
  };

  useEffect(() => {
    fetchFaqs(); // Bileşen yüklendiğinde FAQ'ları çek
  }, []);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="ballerina-figure">
          <img src={ballerinaImages} alt="Loading Ballerina" />
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex bg-white text-black p-6 max-w-6xl mx-auto mt-8 rounded-lg shadow-lg space-x-10">
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <Accordion 
            key={index} 
            open={open === index + 1} 
            animate={CUSTOM_ANIMATION}
            className="mb-2 rounded-lg border border-gray-300 px-6"
            style={{ minHeight: "50px", padding: "20px" }} 
          >
            <AccordionHeader
              onClick={() => handleOpen(index + 1)}
              className={`border-b-0 text-xl transition-colors ${
                open === index + 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              {item.question}
            </AccordionHeader>
            <AccordionBody className="pt-0 text-lg font-normal text-gray-700">
              {item.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
