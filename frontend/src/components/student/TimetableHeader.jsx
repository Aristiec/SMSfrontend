import React from "react";
import { addWeeks, format } from "date-fns";

const TimetableHeader = ({ currentWeek }) => {
  return (
    <div className="flex justify-center px-4 lg:px-8 xl:px-16 mt-4">
      <header className="bg-[#04203e] flex flex-col sm:flex-row sticky justify-between items-start sm:items-center rounded-lg w-full max-w-7xl px-6 py-4 lg:py-6 text-[#FAFCFD] font-[Inter]">
        <h1 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold font-[Merriweather] mb-2 sm:mb-0">
          Class Timetable
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[Inter]">
          {format(addWeeks(new Date(), currentWeek), "MMMM yyyy")}
        </p>
      </header>
    </div>
  );
};

export default TimetableHeader;
