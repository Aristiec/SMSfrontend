import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#0d2d4f] text-white shadow-md">
      <div className="flex items-center gap-3 px-6 py-4 font-semibold text-lg">
        <h1>Student Dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
