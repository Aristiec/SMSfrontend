import React from 'react';
import leftArrow from '../../../assets/leftArrow.svg';
import clockIcon from "../../../assets/clock.svg";
import downArrowIcon from "../../../assets/downArrow.svg";
import statusIcon from "../../../assets/pending.svg";

const ViewDetails = () => {
  return (
    <div className="min-h-screen bg-[#E9EEF4] p-4 font-[Inter]">
      {/* Header */}
      <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full max-w-7xl h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">Assignments</h1>
      </header>

      {/* Main content container */}
      <div className="min-h-screen bg-[#FAFCFD] rounded-[12px] shadow-lg gap-6 mt-6 p-6 max-w-7xl mx-auto flex flex-col">

        {/* Back Button */}
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={leftArrow} alt="leftBack" className="w-4 h-4" />
          <p className="text-sm leading-none font-[Inter] text-[#04203E] font-[400]">Back</p>
        </div>

        {/* Assignment Card */}
        <div className="w-full rounded-[12px] p-6 bg-[#FAFCFD] shadow-md ">
          <div className="flex flex-col gap-6">

            {/* Top Section */}
            <div className="flex justify-between flex-wrap">
              {/* Left Content */}
              <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px]   leading-[24px] text-[#1F1D1D] font-[Inter] font-[500]">Literature Review</p>
                  <p className="text-[16px]  leading-[24px] text-[#1F1D1D] font-[Inter] font-[400]">Operating System</p>
                </div>
                <p className="text-[12px] font-[400] leading-[18px] text-[#1F1D1D] font-[Inter]">
                  Analysis of Shakespeare's Macbeth.
                </p>
              </div>

              {/* Right Status */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <img src={statusIcon} alt="status" className="w-[18px] h-[18px]" />
                <p className="text-[16px] font-[600] leading-[20px] text-[#F97316]">Pending</p>
              </div>
            </div>

            {/* Middle Section: Due Date and Max Marks */}
            <div className="flex items-center gap-6 flex-wrap text-[12px]">
              {/* Due Date */}
              <div className="flex items-center gap-1">
                <img src={clockIcon} alt="calendar" className="w-[13px] h-[13px]" />
                <span className="text-[#1F1D1D] font-[400] text-[14px] font-[Inter]">Due:</span>
                <span className="font-[400] text-[14px] text-[#1F1D1D] font-[Inter]">Feb 5, 2024, 11:59 PM</span>
              </div>

              {/* Max Marks */}
              <div className="flex items-center gap-1">
                <span className="text-[#1F1D1D] font-[Inter] font-[400] text-[14px]">Max Marks: 20</span>
              </div>
            </div>

            {/* Bottom Section: View More */}
            <div className="flex items-center gap-2 cursor-pointer w-fit">
              <img src={downArrowIcon} alt="arrow" className="w-[16px] h-[9px]" />
              <p className="text-[14px] font-[400] font-[Inter] leading-[24px] text-[#04203E]">View more</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
