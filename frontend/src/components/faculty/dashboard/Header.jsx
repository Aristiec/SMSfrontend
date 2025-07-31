import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col rounded-[12px] py-5 px-6 bg-[#04203E]">
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-between items-center">
          <p className="font-[Merriweather] font-[700] text-[40px] leading-[62px] tracking-[-2%] text-[#FAFCFD]">
            Welcome Mr. Jhon Paul
          </p>
          <div className="size-9 rounded-full bg-[#717171] flex items-center justify-center">
            <Bell size={20} color="white" />
          </div>
        </div>
        <div className="flex flex-col px-4 gap-2 font-[Inter] font-[400] text-[20px] leading-[36px] tracking-normal text-[#FAFCFD]">
          <p className="">Faculty ID: 1802240 (Assistant Professor)</p>
          <div className="flex gap-7 items-center ">
            <p className="flex font-[Inter] font-[400] text-[20px] leading-[36px] tracking-normal text-[#FAFCFD]">
              Department Assigned: Mechanical, CSE, EEE
            </p>
            <div className="border border-r border-[#D9D9D9] h-[20px]"></div>
            <p className="flex font-[Inter] font-[400] text-[20px] leading-[36px] tracking-normal text-[#FAFCFD]">
              Courses Assigned: Math, ET, BMS, BEE, DSA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
