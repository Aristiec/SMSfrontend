import { Search } from "lucide-react";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const Mcq = () => {
  const [option, setOption] = useState([]);
  const [optionInput, setOptionInput] = useState("");

  const handleAddOption = () => {
    if (optionInput.trim() !== "") {
      setOption([...option, optionInput]);
      console.log(option);
      setOptionInput("");
    }
  };
  return (
    <div className="flex flex-col font-[Inter] w-full gap-8">
      <p className="font-medium text-[20px] leading-[30px] tracking-normal text-[#000000]">
        Create multiple choice questions-
      </p>
      <div className="gap-10 flex w-full items-start">
        <p className="font-medium text-[20px] leading-[30px] tracking-normal py-2 text-[#000000]">
          1.
        </p>
        <div className="flex flex-col w-full gap-7 justify-center">
          <div className="w-full rounded-[8px] border border-[#CCCCCC] py-2 px-3 gap-2 justify-center">
            <input
              placeholder="Add question..."
              className="w-ful outline-none font-[Inter] font-medium text-[20px] leading-[30px] tracking-normal text-[#CCCCCC]"
            />
          </div>
          <div className="flex flex-col rounded-[8px] border border-[#CCCCCC] p-6 gap-6 ">
            {option.map((item, index) => (
              <div key={index} className="flex w-full items-center rounded-[8px] border border-[#CCCCCC] p-4 gap-6 ">
                <div className="w-3 h-3 border  border-[#CCCCCC] rounded-full"></div>
                <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
                  {item}
                </p>
              </div>
            ))}
            <div className="flex rounded-[8px] items-center  gap-6">
              <div className="flex  rounded-[8px] border border-[#CCCCCC] p-4 items-center  gap-6  w-full">
                <div className="w-3 h-3 border  border-[#CCCCCC] rounded-full"></div>
                <input
                  placeholder="Enter your answer"
                  className="font-[400] text-[16px] outline-none leading-[24px] tracking-normal text-[#CCCCCC] "
                  value={optionInput}
                  onChange={(e) => setOptionInput(e.target.value)}
                />
              </div>
            </div>

            <div className="flex">
              <button
                onClick={handleAddOption}
                className="flex py-2 px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center "
              >
                <Plus size={11} />
                <p className="font-[500] text-[16px] leading-[24px] tracking-normal text-[#717171]">
                  Add Option
                </p>
              </button>
            </div>
          </div>
          <div className="flex  justify-between w-full gap-7">
            <button className="w-full flex  py-3 px-7 gap-2 bg-[#04203E] rounded-[8px] items-center justify-center">
              <p className="font-[Inter] font-medium text-[20px] leading-6 tracking-normal text-[#FAFCFD]">
                Preview
              </p>
            </button>
            <button className="w-full flex  py-3 px-7 gap-2 bg-[#04203E] rounded-[8px] items-center justify-center">
              <p className="font-[Inter] font-medium text-[20px] leading-6 tracking-normal text-[#FAFCFD]">
                Create New Question
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
