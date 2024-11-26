import React, { useState, useEffect } from "react";
import { IoBagOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { cartStore } from "../../../Store/cartStore.js";
import { GiHamburgerMenu } from "react-icons/gi";
import HomeLogo from "../../../assets/opera_balet_logo_light@2x 1.svg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart, clearCart } = cartStore();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      const userName = localStorage.getItem("userName");
      setIsLoggedIn(!!token);
      setIsAdmin(userName === "admin");
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("cart");

    clearCart();

    setIsLoggedIn(false);
    setIsAdmin(false);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate("/SignInPage");
    }, 2000);
  };

  const handleAdminRedirect = () => {
    navigate("/AdminSignPage");
  };

  return (
    <div className="w-full h-[132px] flex items-center justify-center bg-black shadow-lg">
      <div className="container max-w-[1226.36px] mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={HomeLogo} alt="HomeLogo" className="h-10" />
        </Link>

        <div className="uppercase flex gap-[18px] custom-font hidden sm:flex">
          <Link to="/TicketPage">
            <h2 className="font-medium text-xs">Tickets and events</h2>
          </Link>
          <h2 className="font-medium text-xs">Visit us</h2>
          <Link to="/StreamPage">
            <h2 className="font-medium text-xs">Stream</h2>
          </Link>
          <Link to="/ProductPage">
            <h2 className="font-medium text-xs">Shop</h2>
          </Link>
          <Link to="/NewsPage">
            <h2 className="font-medium text-xs">News</h2>
          </Link>
          <Link to="/LearningPage">
            <h2 className="font-medium text-xs">Learning</h2>
          </Link>
          <Link to="/GalleryPage">
            <h2 className="font-medium text-xs">Gallery</h2>
          </Link>
          <h2 className="font-medium text-xs">About</h2>
        </div>

        <div className="flex gap-[20px] items-center">
          {isAdmin && isLoggedIn && (
            <button
              onClick={handleAdminRedirect}
              className="bg-blue-500 text-white p-2 rounded-md">
              Go to Admin Panel
            </button>
          )}
          {!isAdmin && (
            <>
              <Link to="/MessagesPage" className="relative">
                <FaRegBell className="text-[30px]" />
              </Link>

              <Link to="/BasketPage" className="relative">
                <IoBagOutline className="text-[30px]" />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            </>
          )}
          {isLoggedIn ? (
            <button onClick={handleLogout}>
              <IoIosLogOut className="text-[30px]" />
            </button>
          ) : (
            <Link to="/SignInPage">
              <FiUser className="text-[30px]" />
            </Link>
          )}
          <button onClick={toggleMenu} className="text-[30px] block sm:hidden">
            <GiHamburgerMenu />
          </button>

          {isMenuOpen && (
            <div className="menu sm:hidden fixed top-[70px] right-4 w-60 bg-white text-black shadow-xl rounded-lg z-50">
              <ul className="text-sm font-semibold">
                <li className="hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
                  <Link
                    to="/TicketPage"
                    className="block py-3 px-5 text-center">
                    Tickets and events
                  </Link>
                </li>
                <li className="hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
                  <Link
                    to="/StreamPage"
                    className="block py-3 px-5 text-center">
                    Stream
                  </Link>
                </li>
                <li className="hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
                  <Link
                    to="/ProductPage"
                    className="block py-3 px-5 text-center">
                    Shop
                  </Link>
                </li>
                <li className="hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
                  <Link to="/NewsPage" className="block py-3 px-5 text-center">
                    News
                  </Link>
                </li>
                <li className="hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
                  <Link
                    to="/LearningPage"
                    className="block py-3 px-5 text-center">
                    Learning
                  </Link>
                </li>
                <li className="hover:bg-indigo-500 hover:text-white transition-all duration-300 ease-in-out">
                  <Link
                    to="/GalleryPage"
                    className="block py-3 px-5 text-center">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div className="absolute z-50 flex w-3/4 max-w-96 h-24 bg-white rounded-xl overflow-hidden shadow-lg">
          <svg width={16} height={96} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 8 0 
               Q 4 4.8, 8 9.6 
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
              fill="#66cdaa"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
          <div className="mx-2.5 overflow-hidden w-full">
            <p className="mt-1.5 text-xl font-bold text-[#66cdaa] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
              Log out successfully
            </p>
            <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
              So good!
              <br />
            </p>
          </div>
          <button className="w-16 cursor-pointer focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="mediumseagreen"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
