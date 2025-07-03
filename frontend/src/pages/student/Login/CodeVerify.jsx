import React from "react";
import LoginImage from "../../../assets/login_image.svg";
import { useNavigate } from "react-router-dom";

const CodeVerify = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 flex justify-center items-center bg-[#FAFCFD]">
        <img
          src={LoginImage}
          alt="Reset Visual"
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
                Reset password
              </h1>
              <p className="text-[12px] leading-[18px] text-[#04203E] font-[Inter]">
                Please enter the verification code sent to your email address
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 font-[Inter]">
              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E] leading-[14px] ">
                  Code
                </label>
                <input
                  type="text"
                  placeholder="Enter the code"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] focus:outline-none text-[#717171] text-[12px] font-normal italic leading-[40px]"
                />
                <button className="w-full h-[32px] rounded-[8px] bg-[#04203E] text-[#FAFCFD] text-[12px] font-bold leading-[32px] font-[Inter]">
                  Verify
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-[4px]">
              <p className="text-[12px] text-[#717171] leading-[20px] font-[Inter] font-[400]">
                Remembered your password?
              </p>
              <button
                onClick={() => navigate("/signin")}
                className="text-[12px] text-[#04203E] font-[400]"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeVerify;
