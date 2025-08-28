import React from "react";
import emptyProfile from "../../assets/empty_profile.svg";
import profilePic from "../../assets/headerBG.png";
import headerLogo from "../../assets/headerLogo.svg";
import { FaClipboardCheck } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#04203E] text-white shadow-md w-full font-semibold">
      <div
        className="max-w-[full] mx-auto flex justify-between items-center px-8"
        style={{ height: "72px" }}
      >
        {/* Left Side */}
        <div className="flex items-center gap-[16px]">
          <img
            src={emptyProfile}
            alt="empty Profile Icon"
            className="w-[40px] h-[40px] rounded-full bg-[#FAFCFD]"
          />
          <span className="text-[24px] leading-[38.4px] font-[700] font-[Merriweather] tracking-[-0.02em]">
            Faculty Dashboard
          </span>
        </div>

        {/* Right Side 
        <div className="flex items-center">
          <div className="flex items-center gap-[12px] px-4 py-3">
            <FaClipboardCheck className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Grades
            </span>
          </div>

          <div className="flex items-center gap-[12px] px-4 py-3">
            <MdHelpOutline className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Query
            </span>
          </div>

          <div className="flex items-center gap-[12px] pl-4">
            <img
              src={profilePic}
              alt="User"
              className="w-[40px] h-[40px] rounded-full"
            />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Profile
            </span>
          </div>
        
        </div>
        */}
      </div>
    </header>
  );
};
export default Header;
