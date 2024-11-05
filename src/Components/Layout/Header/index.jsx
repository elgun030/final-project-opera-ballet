import React, { useState, useEffect } from "react";
import Logo from "../../../assets/image 3.svg";
import { IoBagOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import "../..//../App.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = sessionStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate("/SignInPage");
    }, 500);
  };

  return (
  <div>
      <div className="container max-w-[1226.36px] m-auto mb-[32.16px]">
      <div className="mt-[32.17px] flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="uppercase flex gap-[18px] custom-font hidden sm:flex">
          <Link to="/TicketPage">
            <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
              Tickets and events
            </h2>
          </Link>
          <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
            Visit us
          </h2>
          <Link
            to="/StreamPage"
            className="font-medium text-xs leading-[14.57px] text-[#111111]"
          >
            Stream
          </Link>
          <Link to="/ProductPage">
            <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
              Shop
            </h2>
          </Link>
          <Link to="/NewsPage">
            <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
              News
            </h2>
          </Link>
          <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
            Learning
          </h2>
          <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
            Join and support
          </h2>
          <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
            About
          </h2>
        </div>

        <div className="flex gap-[28px] items-center">
          <Link to="/MessagesPage" className="relative">
            <FaRegBell className="text-[30px] text-[#111111]" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </Link>

          <Link to="/BasketPage" className="relative">
            <IoBagOutline className="text-[30px] text-[#111111]" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              1
            </span>
          </Link>

          {isLoggedIn ? (
            <button onClick={handleLogout}>
              <IoIosLogOut className="text-[30px] text-[#111111]" />
            </button>
          ) : (
            <Link to="/SignUpPage">
              <FiUser className="text-[30px] text-[#111111]" />
            </Link>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md text-center">
            <p>Başarıyla hesaptan çıkış yapıldı.</p>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};

export default Header;
