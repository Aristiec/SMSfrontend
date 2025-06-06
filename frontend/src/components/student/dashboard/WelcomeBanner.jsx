import React from "react";
import { FiBell } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const WelcomeBanner = () => {
  return (
    <div className="w-[1120px] mx-auto">
      <div className="w-full h-[176px] bg-[#04203E] rounded-[12px] px-8 py-8 flex items-center justify-between">
        <div className="flex flex-col text-white space-y-2">
          <h1 className="font-[Merriweather] font-semibold text-[40px] leading-[48px] tracking-[-0.02em] text-[#FAFCFD]">
            Welcome Back, Asha!
          </h1>
          <h3 className="font-[Inter] font-normal text-[18px] leading-[24px] text-[#FAFCFD] ml-[30px]">
            Student ID: 1RUB203020
          </h3>
          <div className="flex items-center gap-2  ml-[30px]">
            <FaGraduationCap className="w-[16px] h-[16px] text-[#FAFCFD]" />
            <h3 className="font-[Inter] font-normal text-[18px] leading-[24px] text-[#FAFCFD]">
              Course: Computer Science | Section: A
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-gray-500 bg-opacity-60 mr-[20px]">
          <FiBell className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
