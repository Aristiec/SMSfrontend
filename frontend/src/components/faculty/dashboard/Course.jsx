import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

const Course = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className="w-full flex flex-col rounded-[12px] p-4 gap-6 bg-[#FFFFFF]"
    >
      <div className="flex  gap-4">
        <ChartNoAxesCombined size={25} color="#0077FF" />
        <p className="font-[Inter] font-[700] text-[20px] leading-[36px] tracking-normal text-[#1F1D1D] ">
          Course Performance Overview
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex p-4 bg-[#F5F6F8]">
          <div className="flex flex-col gap-3">
            <p className="font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
              Data Structures (CS-301)
            </p>
            <p className=" font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">
              60 students • Section A
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#717171]">
              82%
            </p>
            <p className="flex font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">Avg Performance</p>
          </div>
        </div>
        <div className="flex p-4 bg-[#F5F6F8]">
          <div className="flex flex-col gap-3">
            <p className="font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
              Data Structures (CS-301)
            </p>
            <p className=" font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">
              60 students • Section A
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="flex font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#717171]">
              82%
            </p>
            <p className="flex font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">Avg Performance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
