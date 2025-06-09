import React, { useState } from "react";
import TimetableHeader from "../../components/student/TimetableHeader";

const TimetablePage = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Saturday",
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

  return (
    <div className="min-h-screen bg-[#E9EEF4]">
      {/* Header */}
      <TimetableHeader />
      <div className="min-h-screen bg-[#E9EEF4] flex items-center justify-center p-6">
        <div
          className="bg-[#FAFCFD] rounded-lg shadow-md border border-#04203E] p-6"
          style={{ width: "1076px" }}
        >
          <table className="w-full border-collapse">
            {/* Header Row */}
            <thead>
              <tr>
                <th
                  className=" text-xs font-medium text-center border border-[#04203E]"
                  style={{ width: "132px", height: "64px" }}
                ></th>
                {timeSlots.map((time, index) => (
                  <th
                    key={index}
                    className=" text-xs font-medium text-center border border-[#04203E]"
                    style={{ width: "118px", height: "64px" }}
                  >
                    {time}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body Rows */}
            <tbody>
              {days.map((day, dayIndex) => (
                <tr key={dayIndex}>
                  <td
                    className=" font-medium text-center border border-[#04203E]"
                    style={{ width: "132px", height: "84px" }}
                  >
                    {day}
                  </td>
                  {timeSlots.map((_, timeIndex) => (
                    <td
                      key={timeIndex}
                      className="text-center border border-gray-400 align-top"
                      style={{ width: "118px", height: "84px" }}
                    >
                      <div className="text-sm font-medium pt-3">Subject</div>
                      <div className="text-xs text-[#04203E] mt-1">
                        (Prof name)
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimetablePage;
