import React from "react";
import Logo from "../../../assets/image 3.svg";
// import { CiSearch } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
// import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import "../..//../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container max-w-[1226.36px] m-auto mb-[32.16px]">
      <div className="mt-[32.17px] flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="uppercase flex gap-[18px] custom-font hidden sm:flex">
        <Link to='/TicketPage'>
        <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
            Tickets and events
          </h2>
        </Link>
          <h2 className="font-medium text-xs leading-[14.57px] text-[#111111]">
            Visit us
          </h2>
          <Link
            to="/StreamPage"
            className="font-medium text-xs leading-[14.57px] text-[#111111]">
            Stream
          </Link>
          <Link to='/ProductPage'>
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

        <div className="flex gap-[28px]">
          <LuSearch className="w-[24px] h-[24px]" />
          <IoBagOutline className="w-[24px] h-[24px]" />
          <Link to="/SignInSignUpPage">
            <FiUser className="w-[24px] h-[24px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
