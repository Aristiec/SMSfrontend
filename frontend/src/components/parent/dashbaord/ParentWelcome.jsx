import React from "react";
import { FiBell } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { PiGraduationCapLight } from "react-icons/pi";

const ParentWelcome = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-full bg-[#04203E] rounded-xl px-6 py-6 sm:px-10 sm:py-8 relative">
        {/* Left Content */}
        <div className="text-white space-y-2">
          <h1 className="font-[Inter] font-medium text-[24px] sm:text-[40px] leading-[32px] sm:leading-[48px] tracking-[-0.02em] text-[#FAFCFD]">
            {" "}
            Welcome Back, Asha!{" "}
          </h1>
          <p className="text-sm sm:text-base text-[#FAFCFD] font-[Inter]">
            Parent ID: 1RUB203020
          </p>
          <div className="flex items-center gap-2 text-sm sm:text-base text-[#FAFCFD] font-[Inter]">
            <PiGraduationCapLight className="w-5 h-5 font-[Inter]" />
            <span>Course: Computer Science</span>
            <span className="mx-2">|</span>
            <span>Section: A</span>
          </div>
        </div>

        {/* Bell Icon */}
        <div className="absolute top-15 right-12 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-500 bg-opacity-60 flex items-center justify-center">
          <FiBell className="text-white text-lg sm:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ParentWelcome;
