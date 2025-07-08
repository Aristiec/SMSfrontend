import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomCalendar = ({ setChooseDate,setShow }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const getPreviousMonthDays = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 0).getDate();

  const navigateMonth = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      setSelectedDay(1);
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const prevMonthDays = getPreviousMonthDays(currentDate);
    const days = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${prevMonthDays - i}`}
          className="w-[28px] h-[28px] flex items-center justify-center text-[#717171] text-[12px] font-[Inter]"
        >
          {prevMonthDays - i}
        </div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = day === selectedDay;
      const isSunday = (firstDay + day - 1) % 7 === 0;

      days.push(
        <div
          key={day}
          onClick={() => {
            setSelectedDay(day);
            const selectedDate = new Date(currentDate);
            selectedDate.setDate(day);
            const formattedDate = selectedDate.toLocaleDateString("en-GB");
            setChooseDate?.(formattedDate);
            setShow?.(false);
          }} // Set selected day on click
          className={`w-[28px] h-[28px] flex items-center justify-center cursor-pointer rounded-lg transition-colors
                ${
                  isSelected
                    ? "bg-[#04203E] text-[#FAFCFD] font-medium text-[12px] font-[Inter]"
                    : isSunday
                    ? "text-[#EF4444] text-[12px] font-[Inter]"
                    : "text-[#04203E] text-[12px] font-[Inter]"
                }`}
        >
          {day.toString().padStart(2, "0")}
        </div>
      );
    }

    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <div
          key={`next-${day}`}
          className="w-[28px] h-[28px] flex items-center justify-center text-[#717171] text-[12px] font-[Inter]"
        >
          {day.toString().padStart(2, "0")}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full bg-[#FAFCFD] rounded-2xl shadow-lg overflow-hidden flex flex-col ">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-1 border-2 border-[#04203E] rounded-lg"
          >
            <ChevronLeft size={15} className="text-[#1F1D1D]" />
          </button>

          <h2 className="text-[16px] font-semibold text-[#1F1D1D]">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          <button
            onClick={() => navigateMonth(1)}
            className="p-1 border-2 border-[#04203E] rounded-lg  mr-[12px]"
          >
            <ChevronRight size={15} className="text-[#1F1D1D]" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="w-[28px] h-[28px] flex items-center justify-center text-[10px] font-[Inter] font-normal text-[#1F1D1D]"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
      </div>
    </div>
  );
};

export default CustomCalendar;
