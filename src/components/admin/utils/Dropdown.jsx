import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ options, onSelect, placeholder, selected, className,spanClassName }) => {
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

  const handleSelect = (option, index, event) => {
    event.stopPropagation();
    onSelect(option, index);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`w-full flex justify-between items-center border border-[#1F1D1D] py-3 px-3 rounded-t-[4px] font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] cursor-pointer ${className} 
        text-left truncate sm:text-[15px] sm:px-2 sm:py-2`}
      >
        <span className={`truncate w-[90%] ${spanClassName}`}>
          {selected || <span className="text-[#717171]">{placeholder}</span>}
        </span>
        <ChevronDown size={20} className="ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 bg-[#FAFCFD] max-h-60 overflow-y-auto py-2 px-1 w-full flex flex-col gap-1 rounded-b-[8px] border-t-0 border border-[#71717166] shadow-md sm:text-[15px] sm:px-2">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={(e) => handleSelect(option, index, e)}
              className={`cursor-pointer px-3 py-2 border-b border-[#71717166] text-[#000] hover:bg-[#04203e] hover:text-white rounded-md font-[Inter] text-[16px] leading-6 tracking-normal transition-all duration-200 ease-in-out
              ${options.length - 1 === index ? "border-b-0" : ""}
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
