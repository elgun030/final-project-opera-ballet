import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Home";
import StreamPage from "./Components/Pages/StreamPage/page";
import NewsPage from "./Components/Pages/NewsPage/page";
import ProductPage from "./Components/Pages/ProductPage/page";
import FaqPage from "./Components/Pages/FaqPage/page";
import TicketPage from "./Components/Pages/TicketPage/page";
import DetailPage from "./Components/Pages/DetailPage/page";
import BasketPage from "./Components/Pages/BasketPage/page";
// import './Components/Layout/Header/darkmode.css'; // CSS dosyasını ekleyin
import MessagesPage from "./Components/Pages/MessagesPage/page";
import SignInPage from "./Components/Pages/SignInPage/page";
import SignUpPage from "./Components/Pages/SignUpPage/page";
import CardPage from "./Components/Pages/CardPage/page";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StreamPage" element={<StreamPage />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/TicketPage" element={<TicketPage />} />
        <Route path="/DetailPage/:id" element={<DetailPage />} />
        <Route path="/BasketPage" element={<BasketPage />} />
        <Route path="/MessagesPage" element={<MessagesPage />} />
        <Route path="/SignInPage" element={<SignInPage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/CardPage" element={<CardPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
