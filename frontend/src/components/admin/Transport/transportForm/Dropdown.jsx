import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ options, onSelect, placeholder, selected, className, spanClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option, index) => {
    onSelect(option, index);
    setIsOpen(false);
  };

  const handleDropdownClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e, option, index) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelect(option, index);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button" // Explicitly set button type to prevent form submission
        onClick={handleDropdownClick}
        className={`w-full flex justify-between items-center border border-[#E5E5E5] py-3 px-3 rounded-[8px] font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] cursor-pointer ${className} 
        text-left truncate sm:text-[15px] sm:px-2 sm:py-2 focus:outline-none focus:border-[#04203e]`}
      >
        <span className={`truncate w-[90%] ${spanClassName}`}>
          {selected || <span className="text-[#717171]">{placeholder}</span>}
        </span>
        <ChevronDown size={20} className="ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute z-50 bg-[#FAFCFD] max-h-60 overflow-y-auto py-2 px-1 w-full flex flex-col gap-1 rounded-[8px] border border-[#E5E5E5] shadow-lg sm:text-[15px] sm:px-2 top-full mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={(e) => handleOptionClick(e, option, index)}
              className={`cursor-pointer px-3 py-2 text-[#000] hover:bg-[#04203e] hover:text-white rounded-md font-[Inter] text-[16px] leading-6 tracking-normal transition-all duration-200 ease-in-out
              sm:text-[15px] sm:px-2`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;