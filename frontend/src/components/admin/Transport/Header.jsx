import React from "react";
import { Plus } from "lucide-react";

const Header = ({ currentTab, onAddClick }) => {
  const getButtonText = () => {
    switch (currentTab) {
      case 0: return "Add Route";
      case 1: return "Add Stoppage";
      case 2: return "Add Vehicle";
      case 3: return "Add Assignment";
      case 4: return "Add Driver";
      case 5: return "Add Document";
      default: return "Add Route";
    }
  };

  return (
    <header className="z-30 sticky top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-4 text-[#FAFCFD]">
      <h1 className="text-[20px] md:text-[24px] font-bold font-[Montserrat]">
        Transport Management
      </h1>
      
      <button 
        onClick={onAddClick}
        className="rounded-lg py-2 px-4 gap-2 opacity-100 bg-[#FAFCFD] flex items-center transition-all duration-300 ease-out hover:bg-gray-100"
      >
        <Plus size={16} className="text-[#1F1D1D]" />
        <span className="font-[Inter] font-medium text-sm leading-6 text-center text-[#1F1D1D]">
          {getButtonText()}
        </span>
      </button>
    </header>
  );
};

export default Header;