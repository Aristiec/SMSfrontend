import React, { useState, useRef, useEffect } from "react";
import TimetableHeader from "../../components/faculty/TimetableHeader";
import { addWeeks, startOfWeek, getDay } from "date-fns";
import { ArrowRightLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Timetable = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
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
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="min-h-screen bg-[#E9EEF4] text-[#1F1D1D]  sm:mx-[10px] md:mx-[10px] lg:mx-[10px]">
      <TimetableHeader currentWeek={currentWeek} />

      <div className="flex justify-center p-4 lg:p-4">
        <div className="w-full  bg-[#FAFCFD] rounded-lg shadow-md border border-white p-4 md:p-6 overflow-auto">
          <div className="  py-4 flex items-center justify-between">
            <h1 className="text-[20px]  font-semibold text-[#1F1D1D]">
              Weekly Class Timetable
            </h1>
            <div className="relative group" ref={tooltipRef}>
              {isHovering && (
                <div className="fixed inset-0 bg-[#1F1D1D]/20 z-40 pointer-events-none" />
              )}

              <div
                className="relative group z-50"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <button
                  className="p-2 rounded-lg bg-[#CFDCEB] relative"
                  onClick={() => navigate("/student/academicCal")}
                >
                  <ArrowRightLeft className="w-5 h-5 text-[#1F1D1D]" />
                </button>

                {/* Tooltip on hover */}
                <div className="absolute -left-52 -top-7 mt-2 bg-[#FAFCFD] border border-[#FAFCFD] text-[16px] text-[#1F1D1D] px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-50">
                  Click to switch between
                  <br /> Weekly and Daily view
                </div>
              </div>
            </div>
          </div>

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
