import React from "react";
import Border from "../../../assets/Vector 1.svg";
import Logo from "../../../assets/image 2.svg";
import { FaYoutube } from "react-icons/fa";
import FooterElem from "../../FooterElem";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <FooterElem />

      <div className="bg-[#1A1A1A] text-white">
  <div className="container m-auto max-w-[1225px] py-6 sm:py-[33px]">
    <div className="flex justify-center sm:justify-between px-4 sm:px-0">
      <Link
        to="/FaqPage"
        className="text-white font-semibold text-sm sm:text-base leading-5 sm:leading-[18.73px] hover:underline">
        FAQ
      </Link>
    </div>
    <div className="mt-4 sm:mt-[35px] px-4 sm:px-[167.88px] py-6 sm:py-[35.5px]">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="w-full sm:w-[366px] flex flex-col items-center gap-4 sm:gap-[18px] text-center">
          <h2 className="font-normal text-sm sm:text-base leading-5 sm:leading-[22.4px]">
            Sign up now to our newsletter to get our latest news, offers and
            alerts
          </h2>
          <Link
            to="/SignUpPage"
            className="underline font-semibold text-sm sm:text-[14.96px] leading-5 sm:leading-[18.11px]">
            SIGN UP
          </Link>
        </div>
        <div className="hidden sm:block">
          <img src={Border} alt="Border" />
        </div>
        <div className="w-full sm:w-[314.24px] flex flex-col items-center gap-6 sm:gap-[26px] mt-4 sm:mt-0">
          <div className="flex gap-4 sm:gap-[45px]">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.youtube.com/@operabaletaz">
              <FaYoutube className="w-6 h-6 sm:w-[32px] sm:h-[23px]" />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.facebook.com/operabalet.az">
              <FiFacebook className="w-6 h-6 sm:w-[32px] sm:h-[23px]" />
            </Link>
            <Link>
              <FaXTwitter className="w-6 h-6 sm:w-[32px] sm:h-[23px]" />
            </Link>
            <Link
              to="https://www.instagram.com/operabalet.az/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 sm:w-[32px] sm:h-[23px]" />
            </Link>
          </div>
          <Link to="/FaqPage" className="underline">
            HELP
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 sm:mt-[35px]">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
    <div className="mt-4 sm:mt-[14px] px-4 sm:px-0 text-center">
      <h2 className="font-normal text-xs sm:text-[12.96px] leading-5 sm:leading-[15.68px]">
        Royal Opera House Convent Garden Foundation, a charitable company
        limited by guarantee incorporated in England and Wales (Company number
        480523) Charity Registered (Number 211775)
      </h2>
    </div>
  </div>
</div>

    </div>
  );
};

export default Footer;
