import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ options, onSelect, placeholder = "Select Option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(()=>{
    const handleClickOutside = (event) => {
        if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
            setIsOpen(false);
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    }
  },[])


  const handleSelect = (option)=>{
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  }

  console.log(options)

  return <div className="relative w-full" ref={dropdownRef}>
    <button onClick={()=>setIsOpen(!isOpen)} className="w-full  flex justify-between items-center border-1 border-[#1F1D1D] py-3     px-3 rounded-[4px] font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] cursor-pointer     ">
    {selected ||<span>{placeholder}</span> }
    <ChevronDown size={20}/>
    </button>
    {isOpen && (
        <ul className="absolute z-10   bg-white w-full flex flex-col gap-2 rounded-b-[8px] ">
            {options.map((option,index)=>(
                <div className="w-full hover:bg-blue-800 hover:text-white rounded-md">
                <li className=" cursor-pointer  py-2 px-2  rounded-[8px]" key={index} onClick={()=>handleSelect(option)}>
                    {option}
                </li>

                </div>
            ))}
        </ul>
    )}
  </div>;
};

export default Dropdown;
