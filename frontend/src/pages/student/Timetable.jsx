import React, { useState } from "react";
import TimetableHeader from "../../components/student/TimetableHeader";
import { addWeeks, getDay } from "date-fns";

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
  const timeSlots = ["9:30 - 10:15 AM", "10:15 - 11:00 AM"];
  const timeSlots2 = ["11:15 - 12:00 AM", "12:00 - 12:45 AM"];
  const timeSlots3 = ["1:30 - 2:15 AM", "2:15 - 3:00 AM", "3:00 - 3:45 AM"];
  const allSlots = [
    ...timeSlots,
    "BREAK",
    ...timeSlots2,
    "LUNCH",
    ...timeSlots3,
  ];

  const today = addWeeks(new Date(), currentWeek);
  const jsDayIndex = getDay(today);
  const selectedDayIndex = jsDayIndex === 0 ? 6 : jsDayIndex - 1;

  return (
    <div className="bg-[#E9EEF4] text-[#1F1D1D] font-[Inter] min-h-screen">
      <TimetableHeader currentWeek={currentWeek} />

      <div className="p-4 hidden md:block">
        <div className="w-full overflow-x-auto mx-auto">
          <div className="inline-block min-w-full bg-[#FAFCFD] rounded-lg shadow-md border border-white p-4 justify-center">
            <div className="flex flex-nowrap w-full justify-center">
              {/* === Table 1 === */}
              <table className="border-collapse">
                <thead>
                  <tr>
                    <th className="text-xs md:text-sm font-medium text-center border border-[#04203E] min-w-[7.9rem] h-16"></th>
                    {timeSlots.map((time, index) => {
                      const [start, end] = time.split(" - ");
                      return (
                        <th
                          key={index}
                          className="text-xs md:text-sm font-normal text-center border border-[#04203E] min-w-[7.9rem] h-16"
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
                        <td className="font-bold text-center text-xs md:text-sm border border-[#04203E] min-w-[7.9rem] h-16">
                          {day}
                        </td>
                        {timeSlots.map((_, timeIndex) => (
                          <td
                            key={timeIndex}
                            className="border border-[#04203E] min-w-[7.9rem] h-20"
                          >
                            <div className="flex flex-col items-center justify-center h-full px-1">
                              <div className="text-xs md:text-sm">Subject</div>
                              <div className="text-[10px] text-[#04203E]">
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

              {/* === Break === */}
              <div className="flex flex-col justify-center items-center px-4 text-[#1F1D1D] font-bold text-sm md:text-lg tracking-wide min-w-[4rem]  gap-20 border">
                <p>B</p>
                <p>R</p>
                <p>E</p>
                <p>A</p>
                <p>K</p>
              </div>

              {/* === Table 2 === */}
              <table className="border-collapse">
                <thead>
                  <tr>
                    {timeSlots2.map((time, index) => {
                      const [start, end] = time.split(" - ");
                      return (
                        <th
                          key={index}
                          className="text-xs md:text-sm font-normal text-center border border-[#04203E] min-w-[7.9rem] h-16"
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
                        {timeSlots2.map((_, timeIndex) => (
                          <td
                            key={timeIndex}
                            className="border border-[#04203E] min-w-[7.9rem] h-20"
                          >
                            <div className="flex flex-col items-center justify-center h-full px-1">
                              <div className="text-xs md:text-sm">Subject</div>
                              <div className="text-[10px] text-[#04203E]">
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
              <div className="flex flex-col justify-center gap-20  items-center px-4 text-[#1F1D1D] font-bold text-sm md:text-lg tracking-wide min-w-[4rem] border ">
                <p>L</p>
                <p>U</p>
                <p>N</p>
                <p>C</p>
                <p>H</p>
              </div>
              <table className="border-collapse">
                <thead>
                  <tr>
                    {timeSlots3.map((time, index) => {
                      const [start, end] = time.split(" - ");
                      return (
                        <th
                          key={index}
                          className="text-xs md:text-sm font-normal text-center border border-[#04203E] min-w-[7.9rem] h-16"
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
                        {timeSlots3.map((_, timeIndex) => (
                          <td
                            key={timeIndex}
                            className="border border-[#04203E] min-w-[7.9rem] h-20"
                          >
                            <div className="flex flex-col items-center justify-center h-full px-1">
                              <div className="text-xs md:text-sm">Subject</div>
                              <div className="text-[10px] text-[#04203E]">
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
      </div>

      {/* mobile */}

      <div className="block md:hidden p-4">
        {days.map((day, dayIndex) => {
          const isToday = dayIndex === selectedDayIndex;
          return (
            <div
              key={day}
              className={`mb-6 border border-white rounded-lg bg-white shadow-md p-2 ${
                isToday ? "bg-[#CFDCEB]" : ""
              }`}
            >
              <h2 className="text-center font-semibold text-md py-2">{day}</h2>

              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-[#04203E] p-2">Time</th>
                    <th className="border border-[#04203E] p-2">Subject</th>
                  </tr>
                </thead>
                <tbody>
                  {allSlots.map((slot, idx) => {
                    if (slot === "BREAK" || slot === "LUNCH") {
                      return (
                        <tr key={idx}>
                          <td
                            colSpan={2}
                            className="text-center text-[#04203E] font-medium py-2"
                          >
                            --- {slot} ---
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={idx}>
                        <td className="border border-[#04203E] p-2 text-center">
                          {slot}
                        </td>
                        <td className="border border-[#04203E] p-2 text-center">
                          <div className="font-medium">Subject</div>
                          <div className="text-[11px] text-[#04203E]">
                            (Prof name)
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimetablePage;
