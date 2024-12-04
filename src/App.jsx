import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
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
import MessagesPage from "./Components/Pages/MessagesPage/page";
import SignInPage from "./Components/Pages/SignInPage/page";
import SignUpPage from "./Components/Pages/SignUpPage/page";
import CardPage from "./Components/Pages/CardPage/page";
import AdminSignPage from "./Components/Pages/AdminSignPage/page";
import LearningPage from "./Components/Pages/LearningPage/page";
import GalleryPage from "./Components/Pages/GalleryPage/page";
import MovieDetailPage from "./Components/Pages/TicketDetailPage/page";
import ResetPassPage from "./Components/Pages/ResetPassPage/page";
import NewPasswordPage from "./Components/Pages/NewPasswordPage/page";
import AboutPage from "./Components/Pages/AboutPage/page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Helmet><title>Home Page</title></Helmet><Header isHome /><Home /></>} />
        <Route path="/StreamPage" element={<><Helmet><title>Stream Page</title></Helmet><Header /><StreamPage /></>} />
        <Route path="/LearningPage" element={<><Helmet><title>Learning Page</title></Helmet><Header /><LearningPage /></>} />
        <Route path="/NewsPage" element={<><Helmet><title>News Page</title></Helmet><Header /><NewsPage /></>} />
        <Route path="/ProductPage" element={<><Helmet><title>Product Page</title></Helmet><Header /><ProductPage /></>} />
        <Route path="/FaqPage" element={<><Helmet><title>FAQ Page</title></Helmet><Header /><FaqPage /></>} />
        <Route path="/TicketPage" element={<><Helmet><title>Ticket Page</title></Helmet><Header /><TicketPage /></>} />
        <Route path="/DetailPage/:id" element={<><Helmet><title>Detail Page</title></Helmet><Header /><DetailPage /></>} />
        <Route path="/BasketPage" element={<><Helmet><title>Basket Page</title></Helmet><Header /><BasketPage /></>} />
        <Route path="/MessagesPage" element={<><Helmet><title>Messages Page</title></Helmet><Header /><MessagesPage /></>} />
        <Route path="/SignInPage" element={<><Helmet><title>Sign In</title></Helmet><Header /><SignInPage /></>} />
        <Route path="/AdminSignPage" element={<><Helmet><title></title></Helmet><Header /><AdminSignPage /></>} />
        <Route path="/SignUpPage" element={<><Helmet><title>Sign Up</title></Helmet><Header /><SignUpPage /></>} />
        <Route path="/CardPage" element={<><Helmet><title>Card Page</title></Helmet><Header /><CardPage /></>} />
        <Route path="/GalleryPage" element={<><Helmet><title>Gallery Page </title></Helmet><Header /><GalleryPage /></>} />
        <Route path="/MovieDetailPage/:eventId" element={<><Helmet><title>MovieDetailPage </title></Helmet><Header /><MovieDetailPage /></>} />
        <Route path="/ResetPassPage" element={<><Helmet><title>ResetPassPage </title></Helmet><Header /><ResetPassPage /></>} />
        <Route path="/NewPasswordPage" element={<><Helmet><title>NewPasswordPage </title></Helmet><Header /><NewPasswordPage /></>} />
        <Route path="/AboutPage" element={<><Helmet><title>AboutPage </title></Helmet><Header /><AboutPage /></>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;


