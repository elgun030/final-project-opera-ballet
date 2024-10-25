import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Home';
import StreamPage from './Components/Pages/StreamPage/page';
import SignInSignUpPage from './Components/Pages/SignInSignUpPage/page';
import NewsPage from './Components/Pages/NewsPage/page';
import ProductPage from './Components/Pages/ProductPage/page';
import FaqPage from './Components/Pages/FaqPage/page';
import TicketPage from './Components/Pages/TicketPage/page';
import DetailPage from './Components/Pages/DetailPage/page';
import Detail from './Components/Detail';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StreamPage" element={<StreamPage />} />
        <Route path="/SignInSignUpPage" element={<SignInSignUpPage />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/TicketPage" element={<TicketPage />} />
        <Route path="/products/:_id" element={<Detail />} /> {/* Ürün detay sayfası */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
