import React from "react";
import { X } from 'lucide-react';

const Header = () => {
  return <div className="flex w-full p-[24px] bg-[#F4F7FA]" style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}>
    <div className="text-[#1F1D1D] font-[Inter] font-[600] tracking-[0] leading-[24px] flex items-center justify-end text-[24px] w-1/2">Aristiec</div>
    <div className="w-1/2 justify-end items-center flex px-3">
    <X strokeWidth={2}  className="text-[#1F1D1D] "/>
    </div>
  </div>;
};

export default Header;
