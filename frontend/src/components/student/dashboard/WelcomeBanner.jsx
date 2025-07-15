import React from "react";
import { FiBell } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const WelcomeBanner = () => {
  return (
    <div className="w-full  mx-auto">
      <div className="w-full h-auto sm:h-[176px] bg-[#04203E] rounded-[12px] px-4 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative">
        <div className="flex flex-col text-white space-y-2">
          <h1 className="font-[Inter] font-medium text-[24px] sm:text-[40px] leading-[32px] sm:leading-[48px] tracking-[-0.02em] text-[#FAFCFD]">
            Welcome Back, Asha!
          </h1>
          <h3 className="font-[Inter] font-normal text-[14px] sm:text-[20px] leading-[20px] sm:leading-[24px] text-[#FAFCFD] ml-2 sm:ml-[30px]">
            Student ID: 1RUB203020
          </h3>
          <div className="flex items-center gap-2  ml-[30px]">
            <FaGraduationCap className="w-[16px] h-[16px] text-[#FAFCFD]" />
            <h3 className="font-[Inter] font-normal text-[14px] sm:text-[20px] leading-[24px] text-[#FAFCFD]">
              Course: Computer Science | Section: A
            </h3>
          </div>
        </div>
        <div className="sm:static absolute top-14 right-4 sm:ml-auto w-8 h-8 sm:w-[36px] sm:h-[36px] rounded-full bg-gray-500 bg-opacity-60 flex items-center justify-center">
  <FiBell className="text-white text-lg sm:text-xl" />
</div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
