import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Header = ({ 
  selectedOption, 
  setSelectedOption, 
  inputValue, 
  setInputValue, 
  marks, 
  setMarks, 
  isStarted, 
  onCreateFirstQuestion,
  showExamHeader = true,
  isFirstSection = true
}) => {
  return (
    <header className="w-full">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        {/* Exam Info Header - Conditionally rendered */}
        {showExamHeader && (
          <div className="flex flex-col sm:flex-row rounded-[8px] bg-[#04203E] font-[Inter] text-[#FAFCFD] font-[600] text-sm sm:text-base lg:text-lg xl:text-xl leading-[100%] tracking-normal overflow-hidden">
            <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex items-center justify-center flex-1 border-b sm:border-b-0 sm:border-r border-[#ffffff20]">
              <p className="whitespace-nowrap text-center">Physics - CSE01</p>
            </div>
            <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[#ffffff20] flex items-center justify-center flex-1">
              <p className="whitespace-nowrap text-center">Date - 2024-01-25</p>
            </div>
            <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 border-b sm:border-b-0 sm:border-r border-[#ffffff20] flex items-center justify-center flex-1">
              <p className="whitespace-nowrap text-center">Duration - 2 hours</p>
            </div>
            <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 flex items-center justify-center flex-1">
              <p className="whitespace-nowrap text-center">Marks - 50</p>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-14 w-full">
          <div className="flex flex-col gap-3 sm:gap-4 font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-[100%] tracking-normal text-[#1F1D1D] w-full min-w-[200px]">
            <p className="">Question Type</p>
            <Dropdown
              options={["MCQ", "Subjective"]}
              placeholder="Select question type"
              onSelect={(value) => setSelectedOption(value)}
              selected={selectedOption}
              className="rounded-[8px] border-[#CCCCCC] font-[Inter] font-medium text-sm sm:text-base lg:text-lg xl:text-xl leading-[30%] tracking-normal text-[#1F1D1D] bg-white"
              spanClassName="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-[#1F1D1D]"
            />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-[100%] tracking-normal text-[#1F1D1D] w-full min-w-[200px]">
            <p className="">Total number of questions</p>
            <input
              type="number"
              placeholder="Enter total number of question"
              value={inputValue || ""}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={!selectedOption}
              className={`rounded-[8px] outline-none border py-2 px-3 border-[#CCCCCC] gap-2 font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-[30px] tracking-normal appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none placeholder:text-[#CCCCCC] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg placeholder:font-normal ${!selectedOption ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${inputValue ? 'text-[#1F1D1D]' : 'text-[#CCCCCC]'}`}
            />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-[100%] tracking-normal text-[#1F1D1D] w-full min-w-[200px]">
            <p className="">Marks</p>
            <input
              type="number"
              placeholder="Marks"
              value={marks || ""}
              onChange={(e) => setMarks(e.target.value)}
              disabled={!selectedOption}
              className={`rounded-[8px] outline-none border py-2 px-3 border-[#CCCCCC] gap-2 font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-[30px] tracking-normal appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none placeholder:text-[#CCCCCC] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-lg placeholder:font-normal ${!selectedOption ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${marks ? 'text-[#1F1D1D]' : 'text-[#CCCCCC]'}`}
            />
          </div>
        </div>

        {/* Create First Question Button */}
        {!isStarted && (
          <div className="flex w-full">
            <button
              onClick={() => {
                console.log('Button clicked!'); // Debug log
                onCreateFirstQuestion();
              }}
              className="w-full py-3 px-6 rounded-[8px] border border-[#1F1D1D] font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-6 tracking-normal transition-all duration-200  text-[#1F1D1D]  cursor-pointer"
            >
              {isFirstSection ? "Create First Question" : "Create Question"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;