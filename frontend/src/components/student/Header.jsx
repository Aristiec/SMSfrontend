import React from "react";
import profilePic from "../../assets/headerBG.png";
import emptyProfilePic from "../../assets/empty_profile.svg";
import { FaFileAlt, FaBuilding,FaPhoneAlt , FaBus  } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#04203E] text-white shadow-md w-full font-semibold">
      <div
        className="max-w-[full] mx-auto flex justify-between items-center px-8"
        style={{ height: "72px" }}
      >
        {/* Left Side */}
        <div className="flex items-center gap-[16px]">
          <img
            src={emptyProfilePic}
            alt="empty Profile Icon"
            className="w-[40px] h-[40px] rounded-full bg-[#FAFCFD]"
          />
          <span
            className="text-[24px] leading-[38.4px] font-[700] font-[Merriweather] tracking-[-0.02em]"
            style={{ color: "#FAFCFD" }}
          >
            Student Dashboard
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center" style={{ color: "#FAFCFD" }}>
          {/* Exams */}
          <div className="flex items-center gap-[12px] px-4 py-3 cursor-pointer" >
            <FaFileAlt className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]" >Exams</span>
          </div>

          {/* Hostel */}
          <div className="flex items-center gap-[12px] px-4 py-3 cursor-pointer" >
            <FaBuilding className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">Hostel</span>
          </div>

          {/* Transport */}
          <div onClick={() => {navigate("transport")}} className="flex items-center gap-[12px] px-4 py-3 cursor-pointer" >
            <FaBus className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">Transport</span>
          </div>

          {/* Support */}
          <div onClick={() => {navigate("support")}} className="flex items-center gap-[12px] px-4 py-3 cursor-pointer" >
            <FaPhoneAlt    className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">Support</span>
          </div>

          {/*  Profile */}
          <div className="pl-4">
            <img
              src={profilePic}
              alt="User"
              className="w-[40px] h-[40px] rounded-full "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
