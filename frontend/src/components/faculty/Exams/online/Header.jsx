import React, { useState } from "react";
import Dropdown from "../../../utils/Dropdown";

const   Header = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [marks, setMarks] = useState(null);
  return (
    <header className="">
      <div className="flex flex-col gap-12">
        <div className="flex rounded-[8px] p-4  bg-[#04203E] font-[Inter] text-[#FAFCFD] font-[600] text-2xl leading-[100%] tracking-normal">
          <div className="px-16 flex">
            <p>Physics - CSE01</p>
          </div>
          <div className="px-16 border-l flex">
            <p>Date - 2024-01-25</p>
          </div>
          <div className="px-16 border-l flex">
            <p>Duration - 2 hours</p>
          </div>
          <div className="px-16 border-l flex">
            <p>Marks - 50</p>
          </div>
        </div>
        <div className="flex gap-14 w-full ">
          <div className="flex flex-col gap-4 font-[Inter] font-medium text-[20px] leading-[100%] tracking-normal text-[#1F1D1D] w-full">
            <p className="">Question Type</p>
            <Dropdown
              options={["MCQ", "Subjective"]}
              placeholder="Select question type"
              onSelect={(value) => setSelectedOption(value)}
              selected={selectedOption}
              spanClassName="py-3"
              className="py-2 px-3 rounded-b-[8px] rounded-t-[8px] border-[#CCCCCC] font-[Inter] font-medium text-[20px] leading-[30%] tracking-normal text-[#CCCCCC]"
            />
          </div>
          <div className="flex flex-col gap-4 font-[Inter] font-medium text-[20px] leading-[100%] tracking-normal text-[#1F1D1D] w-full">
            <p className="">Total number of questions</p>
            <input
              type="number"
              placeholder="Enter total number of question"
              value={inputValue || ""}
              onChange={(e) => setInputValue(e.target.value)}
              className="rounded-[8px] outline-none border py-2 px-3 border-[#CCCCCC] gap-2 font-[Inter] font-medium text-[20px] leading-[30px] tracking-normal  text-[#CCCCCC] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
            />
          </div>
          <div className="flex flex-col gap-4 font-[Inter] font-medium text-[20px] leading-[100%] tracking-normal text-[#1F1D1D] w-full">
            <p className="">Marks</p>
            <input
              type="number"
              placeholder="Marks"
              value={marks || ""}
              onChange={(e) => setMarks(e.target.value)}
              className="rounded-[8px] outline-none border py-2 px-3 border-[#CCCCCC] gap-2 font-[Inter] font-medium text-[20px] leading-[30px] tracking-normal  text-[#CCCCCC]
              appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
