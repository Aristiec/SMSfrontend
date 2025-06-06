import React from "react";
import profilePic from "../../assets/headerBG.png";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#04203E] text-white shadow-md flex items-center px-6 font-semibold text-lg"
      style={{ height: "72px" }}
    >
      <img
        src={profilePic}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover border-2 border-white"
      />
      <h1 className="ml-3">Student Dashboard</h1>
    </header>
  );
};

export default Header;
