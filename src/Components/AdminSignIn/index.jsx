import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // admin giriş sayfasına yönlendirme (eğer gerekirse)
  const navigate = useNavigate();

  // Admin girişi fonksiyonu
  const handleAdminLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", "admin");

        // Admin paneline yönlendirmek için yeni sekme açma
        const adminUrl = `http://localhost:5174/?token=${data.token}`;
        window.open(adminUrl, "_blank"); // Yeni sekme açarak admin paneline yönlendir
      } else {
        setErrorMessage("Geçersiz kullanıcı adı veya şifre.");
      }
    } catch (error) {
      setErrorMessage("Sunucu bağlantısı hatası.");
    }
  };

  return (
    <div className="w-full h-[600px] mx-auto w-1/4 min-w-60 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">Admin Giriş</h1>
      </div>

      {errorMessage && (
        <div className="w-full p-3 bg-red-500 text-white text-center mb-4 rounded-lg">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleAdminLogin} className="w-full space-y-5">
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="userName">
            Kullanıcı Adı
          </label>
          <input
            type="text"
            id="userName"
            className="w-full text-sm text-black py-3 border-b-2 border-gray-300"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="admin"
          />
        </div>

        <div className="w-full">
          <label className="text-black text-sm" htmlFor="password">
            Şifre
          </label>
          <input
            type="password"
            id="password"
            className="w-full text-sm py-3 border-b-2 text-black border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="adminPassword"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md">
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default AdminSignIn;
