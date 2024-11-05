// Icons
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [passwordState, setPasswordState] = useState(true);

  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const signInHandler = async (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value.trim().toLowerCase();
    const password = passwordRef.current.value.trim();

    const response = await fetch("http://localhost:8000/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ userName, password }),
    });

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem('userName', data.data.userName);
      sessionStorage.setItem('token', data.token);
      
      // Oturum durumunun güncellenmesi için `storage` olayını tetikle
      window.dispatchEvent(new Event("storage"));

      navigate("/");
    } else {
      console.log(response);
    }
  }

  return (
    <div className="h-[600px] mx-auto w-1/4 min-w-60 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        
        <h1 className="text-3xl text-bold">Welcome Back</h1>
        <h5 className="text-xs text-neutral-500 ">Login in to your account</h5>
      </div>
      <form onSubmit={signInHandler} className="w-full space-y-5">
        {/* userName */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="userName">
            Username
          </label>
          <div className="relative h-10">
            <input
              type="userName"
              id="userName"
              ref={userNameRef}
              placeholder="hsynmrzyv"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange "
            />
            <CiUser
              color="gray"
              className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>
        </div>

        {/* Password */}
        <div className="w-full">
          <label className="text-gray-500 text-sm" htmlFor="password">
            Password
          </label>
          <div className="relative h-10">
            <input
              type={passwordState ? "password" : "text"}
              id="password"
              ref={passwordRef}
              placeholder="6+ strong characters"
              className="absolute w-full h-full text-sm py-3 top-0 left-0 focus:outline-none bg-transparent border-b-2 border-gray-300 focus:border-lightOrange"
            />
            <span onClick={() => setPasswordState(s => !s)} className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer">
              {passwordState ? <FaRegEye color="gray" className="w-5 h-5" /> : <FaRegEyeSlash color="gray" className="w-5 h-5" />}
            </span>
          </div>
        </div>

        <button className="w-full bg-red-500 text-white p-2 rounded-xl hover:scale-95 transition-all duration-200">
          Sign In
        </button>
        <p className="text-center text-xs">
          Don't you have an account?{" "}
          <Link className="text-lightOrange" to="/SignUpPage">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
