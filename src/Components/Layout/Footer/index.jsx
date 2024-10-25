import React from "react";
import Border from "../../../assets/Vector 1.svg";
import Logo from "../../../assets/image 2.svg";
import { FaYoutube } from "react-icons/fa";
import FooterElem from "../../FooterElem";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
  <div>
<FooterElem/>
      <div className="bg-[#1A1A1A] text-white ">
      <div className="container m-auto max-w-[1225px] py-[33px]">
        <div className="flex justify-between">
          <h2 className="text-white font-semibold text-base leading-[18.73px]">PRIVACY NOTICE</h2>
          <h2 className="text-white font-semibold text-base leading-[18.73px]">PRIVACY NOTICE</h2>
          <h2 className="text-white font-semibold text-base leading-[18.73px]">PRIVACY NOTICE</h2>
          <h2 className="text-white font-semibold text-base leading-[18.73px]">PRIVACY NOTICE</h2>
          <h2 className="text-white font-semibold text-base leading-[18.73px]">PRIVACY NOTICE</h2>
          <Link to="/FaqPage" className="text-white font-semibold text-base leading-[18.73px]">FAQ</Link>
        </div>
        <div className="mt-[35px] px-[167.88px] py-[35.5px]">
          <div className="flex justify-between">
            <div className="w-[366px] flex items-center flex-col gap-[18px]">
              <h2 className="font-normal text-xl leading-[22.4px] flex items-center text-center">
                Sign up now to our newsletter to get our latest news, offers and alerts
              </h2>
              <Link to='/SignInSignUpPage' className="underline flex font-semibold text-[14.96px] leading-[18.11px] items-center">
                SIGN UP
              </Link>
            </div>
            <div>
              <img src={Border} alt="" />
            </div>
            <div className="w-[314.24px] flex items-center flex-col gap-[26px]">
              <div className="flex gap-[45px]">
                <FaYoutube className="w-[32px] h-[23px]" />
                <FaYoutube className="w-[32px] h-[23px]" />
                <FaYoutube className="w-[32px] h-[23px]" />
                <FaYoutube className="w-[32px] h-[23px]" />
                <FaYoutube className="w-[32px] h-[23px]" />
              </div>
              <a className="underline">HELP</a>
            </div>
          </div>

          <div className="items-center flex  justify-center mt-[35px]">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="mt-[14px] ">
          <h2 className="font-normal text-[12.96px] leading-[15.68px] w-[1168px]">
            Royal Opera House Convent Garden Foundation, a charitable company limited by guarantee incorporated in England and Wales (Company number 480523) Charity Registered (Number 211775)
          </h2>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;



