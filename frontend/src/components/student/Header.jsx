import React from "react";
import profilePic from "../../assets/headerBG.png";
import { FaBuilding, FaPhoneAlt, FaBus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClasses = (path) =>
    `flex items-center gap-[12px] px-4 py-3 cursor-pointer border-b-2 ${
      location.pathname.includes(path)
        ? "border-[#FAFCFD] text-[#FAFCFD] rounded-lg"
        : "border-transparent"
    }`;

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
              className="w-[40px] h-[40px] rounded-full bg-[#FAFCFD]"
            />
          </div>

          <span
            className="text-[24px] leading-[38.4px] font-[700] font-[Merriweather] tracking-[-0.02em]"
            style={{ color: "#FAFCFD" }}
          >
            Student Dashboard
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
            <FaBuilding className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Library
            </span>
          </div>
          {/* Hostel */}
          <div className={getLinkClasses("hostel")}>
            <FaBuilding className="w-[16px] h-[16px]" />
            <span className="text-[16px] font-[400] leading-[20px] font-[Inter]">
              Hostel
            </span>
          </div>

          {/* Transport */}
          <div
            onClick={() => navigate("/student/transport")}
            className={getLinkClasses("transport")}
          >
            <FaBus className="w-[16px] h-[16px]" />
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
