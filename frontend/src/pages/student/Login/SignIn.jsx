import React from "react";
import LoginImage from "../../../assets/login_image.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 flex justify-center items-center bg-[#FAFCFD]">
        <img
          src={LoginImage}
          alt="Login Visual"
          className="w-[596.91px] h-[505.57px]"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="rounded-[8px] p-10 bg-[#FAFCFD] shadow-[4px_4px_4px_0px_rgba(23,26,31,0.25),-4px_-4px_4px_0px_rgba(255,255,255,0.25)]">
          <div className="w-[352px] flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-[24px] leading-[32px] font-bold font-[Archivo] text-[#04203E]">
                Welcome Back
              </h1>
              <p className="text-[12px] leading-[18px] text-[#04203E] font-[Inter]">
                Sign in to access your account
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 font-[Inter]">
              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] text-[12px] italic text-[#717171] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] text-[12px] italic text-[#717171] focus:outline-none"
                />
              </div>
            </div>

            {/* Sign In Button */}
            <div className="flex flex-col gap-4 font-[Inter]">
              <button className="w-full h-[32px] rounded-[8px] bg-[#04203E] text-[#FAFCFD] leading-[32px] text-[12px] tracking-normal font-bold text-center align-middle">
                Sign In
              </button>
              <p
                onClick={() => navigate("/resetpassword")}
                className="text-[12px] text-center text-[#04203E] cursor-pointer hover:underline leading-[20px] tracking-normal font-[400]"
              >
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
