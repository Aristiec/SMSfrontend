import React from "react";
import { FiBell } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const WelcomeBanner = () => {
  return (
    <div className="w-[1120px] mx-auto">
      <div className="w-full h-[176px] bg-[#04203E] rounded-[12px] px-4 py-6 flex flex-col gap-[40px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="pl-3 flex flex-col justify-center text-white">
            <h1 className="font-archivo font-semibold text-[40px] leading-[62.4px] tracking-[-0.02em] text-[#FAFCFD] w-[473px]">
              Welcome Back, Asha!
            </h1>
            <h3 className="font-archivo font-normal text-[24px] leading-[36px] text-[#FAFCFD] w-[272px]">
              Student ID: 1RUB203020
            </h3>
            <div className="flex items-center gap-2">
              <FaGraduationCap className="w-[23px] h-[16px] text-[#FAFCFD]" />
              <h3 className="font-archivo font-normal text-[24px] leading-[36px] text-[#FAFCFD]">
                Stream: Computer Science | Section: A
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500 bg-opacity-60">
            <FiBell className="text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
