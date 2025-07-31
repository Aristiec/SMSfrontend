import React from "react";
import { Bell } from "lucide-react";
const Notification = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className="w-full flex flex-col rounded-[12px] p-4 gap-6 bg-[#FFFFFF] "
    >
      <div className="flex gap-4 items-center  ">
        <Bell size={20} color="#F97316" />
        <p className="font-[Inter] font-[700] text-[20px] leading-[36px] trackng-normal text-[#1F1D1D] ">
          Recent Notifications
        </p>
      </div>
      <div className=" flex flex-col gap-4 overflow-y-auto h-[86%] ">
        <div className="flex flex-col rounded-[12px] py-4 px-5 gap-3  bg-[#FEF2F2] ">
          <p className="flex font-[Inter] font-[600] text-[16px]  leading-[24px] tracking-normal text-[#991B1B]">
            Exam Schedule Updated
          </p>
          <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#D87777] ">
            CS-301 midterm moved to Friday
          </p>
        </div>
        <div className="flex flex-col rounded-[12px] py-4 px-5 gap-3 bg-[#FEF2F2] ">
          <p className="flex font-[Inter] font-[600] text-[16px]  leading-[24px] tracking-normal text-[#991B1B]">
            Exam Schedule Updated
          </p>
          <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#D87777] ">
            CS-301 midterm moved to Friday
          </p>
        </div>
        <div className="flex flex-col rounded-[12px] py-4 px-5 gap-3 bg-[#FEF2F2] ">
          <p className="flex font-[Inter] font-[600] text-[16px]  leading-[24px] tracking-normal text-[#991B1B]">
            Exam Schedule Updated
          </p>
          <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#D87777] ">
            CS-301 midterm moved to Friday
          </p>
        </div>
        <div className="flex flex-col rounded-[12px] py-4 px-5 gap-3 bg-[#FEF2F2] ">
          <p className="flex font-[Inter] font-[600] text-[16px]  leading-[24px] tracking-normal text-[#991B1B]">
            Exam Schedule Updated
          </p>
          <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#D87777] ">
            CS-301 midterm moved to Friday
          </p>
        </div>
        <div className="flex flex-col rounded-[12px] py-4 px-5 gap-3 bg-[#FEF2F2] ">
          <p className="flex font-[Inter] font-[600] text-[16px]  leading-[24px] tracking-normal text-[#991B1B]">
            Exam Schedule Updated
          </p>
          <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#D87777] ">
            CS-301 midterm moved to Friday
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
