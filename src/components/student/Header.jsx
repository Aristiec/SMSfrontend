import React from "react";
import profilePic from "../../assets/headerBG.png";
import { FaBuilding, FaPhoneAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.svg";

import LibraryLogo from "../../assets/LibraryIcon.svg";
import HostelLogo from "../../assets/HostelLogo2.svg";
import TransportLogo from "../../assets/TransportLogo.svg";



const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const getLinkClasses = (path) =>
  //   `flex items-center gap-[12px] px-4 py-3 cursor-pointer border-b-1  ${
  //     location.pathname.includes(path)
  //       ? "border-[#FAFCFD] text-[#FAFCFD] "
  //       : "border-transparent"
  //   }`;
  const getLinkClasses = (path) =>
  `relative flex items-center gap-[12px] px-4 py-3 cursor-pointer 
   after:content-[''] after:absolute after:bottom-0 after:left-[8.5%]
   after:h-[1px] after:bg-[#FAFCFD] 
   ${location.pathname.includes(path)
     ? 'after:w-[83%]'
     : 'after:w-0'} transition-all duration-300`;



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#04203E] text-white shadow-md w-full font-semibold">
      <div
        className="max-w-[full] mx-auto flex justify-between items-center px-8"
        style={{ height: "72px" }}
      >
        {/* Left Side */}
        <div className="flex items-center gap-[16px]">
          <div
            onClick={() => navigate("/student/dashboard")}
            className="cursor-pointer"
          >
            <img
              src={headerLogo}
              alt="Profile Icon"
              className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] 
                 rounded-full bg-[#FAFCFD] transition-all duration-200"
            />
          </div>

         <span
    className="text-[16px] sm:text-[18px] md:text-[18px] lg:text-[24px] xl:text-[24px]
               leading-[25.6px] sm:leading-[28.8px] md:leading-[28.8px] lg:leading-[38.4px] xl:leading-[38.4px]
               font-[700] font-[Merriweather] tracking-[-0.02em] transition-all duration-200"
    style={{ color: "#FAFCFD" }}
  >
    <span className="hidden sm:inline">Student Dashboard</span>
    <span className="sm:hidden">Dashboard</span>
  </span>
        </div>

        {/* Right Side */}
        <div
          className="flex items-center justify-center"
          style={{ color: "#FAFCFD" }}
        >
          {/* Library */}
          <div
            onClick={() => navigate("/student/library")}
            className={getLinkClasses("library")}
          >
            <img src={LibraryLogo} alt="Library Icon" className="w-[20px] h-[20px]" />

            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Library
            </span>
          </div>
          {/* Hostel */}
          <div
            onClick={() => navigate("/student/hostel")}
            className={getLinkClasses("hostel")}
          >
            <img src={HostelLogo} alt="Library Icon" className="w-[16px] h-[20px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Hostel
            </span>
          </div>

          {/* Transport */}
          <div
            onClick={() => navigate("/student/transport")}
            className={getLinkClasses("transport")}
          >
            <img src={TransportLogo} alt="Library Icon" className="w-[22px] h-[22px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Transport
            </span>
          </div>

          {/* Support */}
          <div
            onClick={() => navigate("/student/support")}
            className={getLinkClasses("support")}
          >
            <FaPhoneAlt className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Support
            </span>
          </div>

          {/* Profile */}
          <div className="pl-4">
            <div
              onClick={() => navigate("/student/profile")}
              className="cursor-pointer"
            >
              <img
                src={profilePic}
                alt="User"
                className="w-[40px] h-[40px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
