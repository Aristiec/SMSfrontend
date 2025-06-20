import React, { useState } from "react";
import TimetableHeader from "../../components/faculty/TimetableHeader";
import { addWeeks, startOfWeek, getDay } from "date-fns";

const Timetable = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = [
    "9:00 - 9:45 AM",
    "9:45 - 10:30 AM",
    "10:30 - 10:45 AM",
    "10:45 - 11:30 AM",
    "11:30 - 12:15 AM",
    "12:15 - 1:15 AM",
    "1:15 - 2:00 AM",
    "2:00 - 2:45 AM",
  ];

  const today = addWeeks(new Date(), currentWeek);
  const jsDayIndex = getDay(today);
  const selectedDayIndex = jsDayIndex === 0 ? 6 : jsDayIndex - 1;

  return (
    <div className="min-h-screen bg-[#E9EEF4] text-[#1F1D1D]  sm:mx-[20px] md:mx-[20px] lg:mx-[40px]">
      <TimetableHeader currentWeek={currentWeek} />

      <div className="flex justify-center p-4 lg:p-4">
        <div className="w-full max-w-7xl bg-[#FAFCFD] rounded-lg shadow-md border border-white p-4 md:p-6 overflow-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[16px] font-normal text-center border border-[#04203E] w-32 h-16"></th>
                {timeSlots.map((time, index) => {
                  const [start, end] = time.split(" - ");
                  return (
                    <th
                      key={index}
                      className="text-[14px] md:text-[16px] font-normal text-center border border-[#04203E] leading-tight w-28 h-16"
                    >
                      {start} -<br />
                      {end}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {days.map((day, dayIndex) => {
                const isSelected = dayIndex === selectedDayIndex;
                return (
                  <tr
                    key={dayIndex}
                    className={isSelected ? "bg-[#CFDCEB]" : ""}
                  >
                    <td className="font-bold text-center text-[16px] border border-[#04203E] w-32 h-20">
                      {day}
                    </td>
                    {timeSlots.map((_, timeIndex) => (
                      <td
                        key={timeIndex}
                        className="border border-[#04203E] w-28 h-20"
                      >
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-[14px] md:text-[16px] font-normal">
                            Subject
                          </div>
                          <div className="text-[12px] text-[#04203E]">
                            (Prof name)
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
