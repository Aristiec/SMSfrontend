import React from "react";
import { addWeeks, format } from "date-fns";

const TimetableHeader = ({ currentWeek }) => {
  return (
    <header className="bg-[#04203e] mt-[15px] flex justify-between items-center rounded-[12px] w-[1120px] h-[68px] px-[24px] py-[12px] text-[#FAFCFD] font-[Inter] mx-auto">
      <div>
        <h1 className="text-[24px] font-bold font-[Merriweather]">
          Class Timetable
        </h1>
      </div>

      {/* Date aligned to right */}
      <p className="text-[18px] text-[#FAFCFD] font-[Inter]">
        {format(addWeeks(new Date(), currentWeek), "MMMM yyyy")}
      </p>
    </header>
  );
};

export default TimetableHeader;
