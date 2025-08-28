import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ options, onSelect, placeholder, selected, className, spanClassName, disabled }) => {
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
    if (!disabled) {
      onSelect(option, index);
      setIsOpen(false);
    }
  };
  
  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full flex justify-between items-center border py-[9px] px-3 rounded-[8px] font-[Inter] font-medium text-left ${className} ${
          disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : 'cursor-pointer'
        }`}
      >
        <span className={`flex-1 text-left ${spanClassName || ''}`}>
          {selected ? (
            <span className="text-[#1F1D1D] font-[Inter] text-[16px] leading-6 tracking-normal font-medium">
              {selected}
            </span>
          ) : (
            <span className="text-[#CCCCCC] text-sm sm:text-base lg:text-lg font-normal">{placeholder}</span>
          )}
        </span>
        <ChevronDown size={20} className="ml-2 flex-shrink-0" />
      </button>
      {isOpen && !disabled && (
        <ul className="absolute z-10 bg-[#FAFCFD] max-h-60 overflow-y-auto py-2 px-1 w-full flex flex-col gap-1 rounded-b-[8px] border-t-0 border border-[#71717166] shadow-md sm:text-[15px] sm:px-2">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option, index)}
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