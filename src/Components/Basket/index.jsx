import React from "react";
import image from "../../assets/Frame 199.svg";
import Navbar from "../../assets/SwanLake_keyring_5000x 1.svg";


const Basket = () => {
  return (
    <div className="container max-w-[1200px] mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
      {/* Giriş ve Kayıt Alanı */}
      <div className="max-w-[558px] w-full border border-gray-300 rounded-lg shadow p-8 text-center">
        <div className="mt-4">
          <h2 className="font-semibold text-2xl mb-4 font-gotham">
            Sign in or create an account
          </h2>
          <p className="font-medium text-lg text-gray-600 mb-8">
            Enter your email to sign in or create an account
          </p>
        </div>
        <div className="mb-6">
          <input
            className="w-full h-14 border-2 border-gray-300 rounded-lg px-5 text-black focus:outline-none focus:border-indigo-500"
            type="email"
            placeholder="Email"
          />
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full h-14 rounded-lg flex items-center justify-center transition duration-200">
          <img src={image} alt="Continue with Service" className="h-6" />
        </button>
      </div>

      {/* Sepet Özeti */}
      <div className="max-w-[578px] w-full bg-gray-100 rounded-lg shadow p-8 flex flex-col justify-between">
        <div>
          {/* Ürün Detayları */}
          <div className="flex justify-between items-center mb-4 relative">
            <div className="relative">
              <img src={Navbar} alt="Basket Overview" className="h-auto" />
              <span className="absolute -top-2 right-1 bg-indigo-600 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="font-normal text-sm ml-2.5 leading-[17px]">
                Swan Lake Limited Edition Keyring (2024)
              </h2>
              <div className="flex items-center ml-2.5 gap-2 mt-2">
                <button className="bg-gray-200 text-black px-2 py-1 rounded-lg">-</button>
                <span className="font-medium text-lg">1</span>
                <button className="bg-gray-200 text-black px-2 py-1 rounded-lg">+</button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-normal text-sm leading-[17px]">£13.00</p>
              <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg text-xs font-semibold hover:bg-red-600 transition">
                Remove
              </button>
            </div>
          </div>

          {/* Alt Toplam */}
          <div className="flex justify-between mb-8 mt-8">
            <h2 className="font-normal text-sm leading-[17px]">Subtotal</h2>
            <p className="font-medium text-sm leading-[17px]">£26.00</p>
          </div>
        </div>

        {/* Toplam Fiyat */}
        <div className="border-t border-gray-300 pt-6 mt-6 flex justify-between items-center">
          <h2 className="font-semibold font-gotham text-[21.06px] leading-[25.49px]">Total</h2>
          <div className="flex items-center gap-[11px]">
            <h3 className="font-normal text-xs leading-[14.06px] text-[#757575]">GBP</h3>
            <p className="font-semibold font-gotham text-[21.06px] leading-[25.49px]">£26.00</p>
          </div>
        </div>

        {/* Onayla Butonu */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full h-14 mt-10 rounded-lg flex items-center justify-center transition duration-200">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Basket;
