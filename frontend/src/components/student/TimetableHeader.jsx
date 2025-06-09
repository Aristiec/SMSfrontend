import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { addWeeks, startOfWeek, format } from "date-fns";

const TimetableHeader = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const getFormattedWeekRange = (weekOffset) => {
    const today = new Date();
    const start = startOfWeek(addWeeks(today, weekOffset), { weekStartsOn: 1 });
    const end = addWeeks(start, 1);
    return `${format(start, "dd MMM")} - ${format(
      addWeeks(start, 1),
      "dd MMM"
    )}`;
  };

  return (
    <header className="bg-[#04203e] flex justify-between items-center rounded-[12px] w-[1120px] h-[68px] px-[24px] py-[12px] text-[#FAFCFD] font-[Inter] mx-auto">
      <div className="flex items-center">
        <h1 className="text-[28px] font-bold font-[Merriweather]">
          Class Timetable
        </h1>
      </div>
      <p className="absolute left-1/2 transform -translate-x-1/2 text-[18px] text-gray-200 ml-[100px]">
        {format(addWeeks(new Date(), currentWeek), "MMMM yyyy")}
      </p>
      <div className="flex items-center space-x-4">
        <span className="text-[16px] text-[#FAFCFD] font-medium">
          {format(
            startOfWeek(addWeeks(new Date(), currentWeek), { weekStartsOn: 1 }),
            "dd-MMM"
          )}
        </span>

        <button
          onClick={() => setCurrentWeek((prev) => prev - 1)}
          className="p-2 bg-[#FAFCFD] rounded-md transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-[#04203e]" />
        </button>

        <button
          onClick={() => setCurrentWeek((prev) => prev + 1)}
          className="p-2 bg-[#FAFCFD] rounded-md transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-[#04203e]" />
        </button>
      </div>
    </header>
  );
};

export default TimetableHeader;
