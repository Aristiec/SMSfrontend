import React from 'react'
import { FiBell } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";


const WelcomeBanner = () => {
  return (
    <>
    <div className="w-full max-w-[1120px] h-auto bg-[#04203E] rounded-[12px] mx-auto px-4 py-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Content Section */}
        <div className="pl-3 flex flex-col justify-center text-white">
          <h1 className="font-archivo font-semibold text-[40px] leading-[62.4px] tracking-[-0.02em] text-[#FAFCFD] w-[473px] h-[63px]">
             Welcome Back, Asha!
            </h1>
           <h3 className="font-archivo font-normal text-[24px] leading-[36px] text-[#FAFCFD] w-[272px] h-[36px]">
            Student ID: 1RUB203020
          </h3>
         <div className="flex items-center gap-2">
  <FaGraduationCap className="w-[23px] h-[16px] text-[#FAFCFD]" />
  <h3 className="font-archivo font-normal text-[24px] leading-[36px] text-[#FAFCFD] w-[414px] h-[36px]">
    Stream: Computer Science | Section: A
  </h3>
  </div>
        </div>
        {/* Icon Section */}
        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500 bg-opacity-60">
          <FiBell className="text-white text-xl" />
        </div>
      </div>
    </div>
    </>
  )
}

export default WelcomeBanner