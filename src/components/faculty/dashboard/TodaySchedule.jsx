import React, { useState } from "react";
import { Clock } from "lucide-react";

const Schedule = [
  {
    time: "08:00 - 09:00 AM",
    room: "Section A - Room 101 | 45 students",
    section: "Section A",
    roomNumber: "Room 101",
    students: 45,
    subject: "Mathematics",
    isCurrent: false,
  },
  {
    time: "09:00 - 10:00 AM",
    room: "Section B - Room 102 | 52 students",
    section: "Section B",
    roomNumber: "Room 102",
    students: 52,
    subject: "Physics",
    isCurrent: false,
  },
  {
    time: "10:00 - 11:00 AM",
    room: "Section A - Room 201 | 60 students",
    section: "Section A",
    roomNumber: "Room 201",
    students: 60,
    subject: "Chemistry",
    isCurrent: true,
  },
  {
    time: "11:00 - 12:00 PM",
    room: "Section C - Room 203 | 38 students",
    section: "Section C",
    roomNumber: "Room 203",
    students: 38,
    subject: "Biology",
    isCurrent: false,
  },
  {
    time: "12:00 - 01:00 PM",
    room: "Section A - Room 105 | 55 students",
    section: "Section A",
    roomNumber: "Room 105",
    students: 55,
    subject: "English Literature",
    isCurrent: false,
  },
  {
    time: "02:00 - 03:00 PM",
    room: "Section B - Room 204 | 42 students",
    section: "Section B",
    roomNumber: "Room 204",
    students: 42,
    subject: "History",
    isCurrent: false,
  },
  {
    time: "03:00 - 04:00 PM",
    room: "Section D - Room 301 | 48 students",
    section: "Section D",
    roomNumber: "Room 301",
    students: 48,
    subject: "Computer Science",
    isCurrent: false,
  },
  {
    time: "04:00 - 05:00 PM",
    room: "Section A - Room 202 | 35 students",
    section: "Section A",
    roomNumber: "Room 202",
    students: 35,
    subject: "Art & Design",
    isCurrent: false,
  },
];

const TodaySchedule = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedSchedule = showAll ? Schedule : Schedule.slice(0, 3);

  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className="w-full flex flex-col rounded-[12px] p-3 sm:p-4 gap-4 sm:gap-6 bg-[#FFFFFF] relative"
    >
      <div className="flex gap-3 sm:gap-4 items-center">
        <Clock size={18} className="sm:size-[20px]" color="#0077FF" />
        <p className="font-[Inter] font-[700] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[36px] tracking-normal text-[#1F1D1D]">
          Today's Schedule
        </p>
      </div>
      <div 
        className={`flex flex-col gap-3 sm:gap-4 ${showAll ? 'max-h-80 sm:max-h-96 overflow-y-auto pr-2 relative' : ''}`}
        style={showAll ? { scrollbarWidth: 'thin', scrollbarColor: '#0077FF #f1f1f1' } : {}}
      >
        {showAll && (
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#0077FF] opacity-10 rounded"></div>
        )}
        {displayedSchedule.map((item, index) => (
          <div
            key={index}
            className={`rounded-[12px] py-3 px-4 sm:py-4 sm:px-5 border-[#0077FF] ${
              item.isCurrent
                ? "bg-[#EFF6FF] border-l-5"
                : "bg-[#F5F6F8] border-none"
            }`}
          >
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-1">
              <p className="font-[Inter] font-[600] text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-normal text-[#1F1D1D]">
                {item.subject}
              </p>
              <p
                className={`font-[Inter] font-[600] text-[15px] sm:text-[16px] leading-[22px] sm:leading-[24px] tracking-normal ${
                  item.isCurrent ? "text-[#0077FF]" : "text-[#1F1D1D]"
                }`}
              >
                {item.time}
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-1">
              <p className="font-[Inter] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-normal text-[#717171]">
                {item.section} - {item.roomNumber} | {item.students} students
              </p>
              <p className="font-[Inter] font-[400] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-normal text-[#717171] whitespace-nowrap">
                {item.isCurrent ? "Current" : "Scheduled"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => setShowAll(!showAll)}
        className="rounded-[8px] border py-1.5 sm:py-2 px-3 gap-2 border-[#CCCCCCCC] flex w-full items-center justify-center hover:bg-[#f7f7f7] transition-colors"
      >
        <p className="font-[Inter] font-medium text-[14px] sm:text-[15px] leading-[20px] sm:leading-[24px] tracking-normal text-[#1F1D1D]">
          {showAll ? "Show Less" : "View All"}
        </p>
      </button>
    </div>
  );
};

export default TodaySchedule;