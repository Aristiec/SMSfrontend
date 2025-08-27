import React from "react";
import profilePic from "../../assets/headerBG.png";
import { useNavigate, useLocation } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
            onClick={() => navigate("/parent/dashboard")}
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
    <span className="hidden sm:inline">Parent Dashboard</span>
    <span className="sm:hidden">Dashboard</span>
  </span>
        </div>

        {/* Right Side */}
        <div
          className="flex items-center justify-center"
          style={{ color: "#FAFCFD" }}
        >
          {/* Profile */}
          <div className="pl-4">
            <div
              onClick={() => navigate("/parent/profile")}
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
