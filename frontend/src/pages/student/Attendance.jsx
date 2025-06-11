import React from "react";
import calendarIcon from "../../assets/calendar.svg";
import progressBar from "../../assets/progressBar.svg";
import checkIcon from "../../assets/checkicon.svg";
import missedIcon from "../../assets/missedIcon.svg";

const Attendance = () => {
  return (
    <>
      <div className="font-[Inter]">
        {/* Header */}
        <div className="w-full h-[64px] bg-[#04203E] rounded-[12px] px-[24px] py-[18px] flex items-center">
          <div className="text-white font-bold text-[24px] leading-[28px]">
            Attendance
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full mt-6">
          <div className="flex flex-wrap gap-[24px] justify-start">
            {/* Card 1: Overall Attendance */}
            <div
              className="w-full sm:w-[calc(50%-12px)] lg:w-[356px] h-[158px] rounded-[12px] p-[24px] bg-[#FAFCFD] flex flex-col justify-between shadow-md"
              style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
            >
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
                  <img src={calendarIcon} alt="calendar" className="w-[22px] h-[22px]" />
                </div>
                <div className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px]">
                  Overall Attendance
                </div>
              </div>

              <div className="flex flex-col gap-[10px]">
                <div className="font-bold text-[#1F1D1D] text-[24px] leading-[36px]">
                  86.0%
                </div>
                <img src={progressBar} alt="progress" className="w-full h-[8px] rounded-[4px]" />
              </div>
            </div>

            {/* Card 2: Classes Attended */}
            <div
              className="w-full sm:w-[calc(50%-12px)] lg:w-[356px] h-[158px] rounded-[8px] p-[24px] bg-[#FAFCFD] flex flex-col justify-between shadow-md"
              style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
            >
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full bg-[#ECFDF7] flex items-center justify-center">
                  <img src={checkIcon} alt="check icon" className="w-[22px] h-[22px]" />
                </div>
                <div className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px]">
                  Classes Attended
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[8px] items-baseline">
                  <span className="text-[#027A48] font-bold text-[24px] leading-[36px]">
                    271
                  </span>
                  <span className="text-[#1F1D1D] text-[14px] leading-[20px]">
                    of 315 classes
                  </span>
                </div>
                <div className="text-[#1F1D1D] text-[12px] leading-[18px]">
                  86.0% of total classes
                </div>
              </div>
            </div>

            {/* Card 3: Classes Missed */}
            <div
              className="w-full sm:w-[calc(50%-12px)] lg:w-[356px] h-[158px] rounded-[8px] p-[24px] bg-[#FAFCFD] flex flex-col justify-between shadow-md"
              style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
            >
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full bg-[#FEF2F2] flex items-center justify-center">
                  <img src={missedIcon} alt="missed icon" className="w-[22px] h-[22px]" />
                </div>
                <div className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px]">
                  Classes Missed
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[8px] items-baseline">
                  <span className="text-[#EF4444] font-bold text-[24px] leading-[36px]">
                    44
                  </span>
                  <span className="text-[#1F1D1D] text-[14px] leading-[20px]">
                    of 265 classes
                  </span>
                </div>
                <div className="text-[#1F1D1D] text-[12px] leading-[18px]">
                  14.0% of total classes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
