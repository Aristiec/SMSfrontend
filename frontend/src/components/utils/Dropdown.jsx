import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ options, onSelect, placeholder, selected,className }) => {
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

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center border border-[#1F1D1D] py-3 px-3 rounded-t-[4px] font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] cursor-pointer ${className}`}
      >
        {selected || <span className="text-[#717171]">{placeholder}</span>}
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-[#FAFCFD] py-2 px-3  w-full flex flex-col gap-2 rounded-b-[8px] border-t-0 border border-[#71717166] ">
          {options.map((option, index) => (
            <div
              key={index}
              className="w-full hover:bg-[#04203e] text-[#000000]  hover:text-white rounded-md px-3 py-2 transition-all duration-200 ease-in-out"
            >
              <li
                className={`cursor-pointer py-2 px-2 flex border-b border-[#71717166] font-[400] font-[Inter] text-[16px] leading-6 tracking-normal ${options.length - 1 === index ? "border-b-0" : ""}`}
                onClick={() => handleSelect(option, index)}
              >
                {option}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
