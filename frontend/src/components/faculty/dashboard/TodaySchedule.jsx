import React from "react";
import { Clock } from "lucide-react";

const Schedule = [
  {
    time: "10:00 - 11:00 AM",
    room: "Section A - Room 201 | 60 students",
    isCurrent: true,
  },
  {
    time: "10:00 - 11:00 AM",
    room: "Section A - Room 201 | 60 students",
    isCurrent: false,
  },
  {
    time: "10:00 - 11:00 AM",
    room: "Section A - Room 201 | 60 students",
    isCurrent: false,
  },
];

const TodaySchedule = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className="w-full flex flex-col rounded-[12px] p-4 gap-6 bg-[#FFFFFF]"
    >
      <div className="flex gap-4 items-center ">
        <Clock size={20} color="#0077FF" />
        <p className="font-[Inter] font-[700] text-[20px] leading-[36px] tracking-normal text-[#1F1D1D] ">
          Today’s Schedule
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        {Schedule.map((item, index) => (
          <div
            className={`rounded-[12px] py-4 px-5  gap-40   border-[#0077FF] ${
              item.isCurrent
                ? "bg-[#EFF6FF] border-l-5"
                : "bg-[#F5F6F8] border-none"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
                Today’s Schedule
              </p>
              <p
                className={`font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal ${
                  item.isCurrent ? "text-[#0077FF]" : "text-[#1F1D1D]"
                }`}
              >
                10:00 - 11:00 AM
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">
                Section A - Room 201 | 60 students
              </p>
              <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">
                Current
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="rounded-[8px] border py-1 px-3 gap-2 border-[#CCCCCCCC] flex w-full items-center justify-center">
        <p className="font-[Inter]  font-medium text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
          View All
        </p>
      </button>
    </div>
  );
};

export default TodaySchedule;
