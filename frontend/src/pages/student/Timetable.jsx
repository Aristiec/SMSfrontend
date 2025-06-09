import React, { useState } from "react";
import TimetableHeader from "../../components/student/TimetableHeader";
import { addWeeks, startOfWeek, getDay } from "date-fns";

const TimetablePage = () => {
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
  const jsDayIndex = getDay(today); // 0 (Sunday) to 6 (Saturday)
  const selectedDayIndex = jsDayIndex === 0 ? 6 : jsDayIndex - 1; // convert to 0 = Monday, 6 = Sunday

  return (
    <div className="min-h-screen bg-[#E9EEF4] text-[#1F1D1D]">
      {/* Header with currentWeek passed as props */}
      <TimetableHeader currentWeek={currentWeek} />

      <div className="min-h-screen bg-[#E9EEF4] flex items-center justify-center p-6">
        <div
          className="bg-[#FAFCFD] rounded-lg shadow-md border border-[#FFFFFF] p-6"
          style={{ width: "1076px" }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="text-[16px] font-normal text-[#1F1D1D] font-[Inter] text-center border border-[#04203E]"
                  style={{ width: "132px", height: "64px" }}
                ></th>
                {timeSlots.map((time, index) => {
                  const [start, end] = time.split(" - ");
                  return (
                    <th
                      key={index}
                      className="text-[16px] font-normal text-center border border-[#04203E] leading-tight"
                      style={{ width: "118px", height: "64px" }}
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
                    style={{
                      backgroundColor: isSelected ? "#CFDCEB" : "transparent",
                    }}
                  >
                    <td
                      className="font-bold text-center text-[16px] border border-[#04203E]"
                      style={{ width: "132px", height: "84px" }}
                    >
                      {day}
                    </td>
                    {timeSlots.map((_, timeIndex) => (
                      <td
                        key={timeIndex}
                        className="border border-[#04203E]"
                        style={{ width: "118px", height: "84px" }}
                      >
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-[16px] font-normal font-[Inter]">
                            Subject
                          </div>
                          <div className="text-[12px] text-[#04203E] font-[Inter]">
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

export default TimetablePage;
