import { Search } from "lucide-react";
import React from "react";
import { Plus } from "lucide-react";

const Mcq = () => {
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
            <div className="flex rounded-[8px] items-center  gap-6">
              <div className="w-3 h-3 border border-[#CCCCCC] rounded-full"></div>
              <input
                placeholder="Enter your answer"
                className="font-[400] text-[16px] leading-[24px] tracking-normal text-[#CCCCCC] "
              />
            </div>
          </div>
          <div className="flex">
            <button className="flex py-2 px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center ">
              <Plus size={11} />
              <p className="font-[500] text-[16px] leading-[24px] tracking-normal text-[#717171]">
                Add Option
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
