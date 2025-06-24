import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState({
    month: "June",
    year: 2025,
  });
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventInfo, setEventInfo] = useState(null);
  const daysInMonth = 30; // June 2025 has 30 days
  const startDay = new Date(
    `${currentMonth.month} 1, ${currentMonth.year}`
  ).getDay(); // 0=Sun, ..., 6=Sat

  const events = {
    11: {
      type: "exam",
      title: "Exam",
      sessions: [
        {
          time: "9:30 AM - 12:00 PM",
          subject: "Software Engineering",
          location: "Exam Hall 2",
        },
        {
          time: "1:00 PM - 3:30 PM",
          subject: "Web Development",
          location: "Exam Hall 2",
        },
      ],
    },
    12: {
      type: "holiday",
      title: "Independence Day",
      description: "National Holiday",
    },
    15: {
      type: "exam",
      title: "DBMS Final Exam",
      description: "Final examination",
    },
    24: {
      type: "event",
      title: "NEWAVE’25",
      description: "Annual tech fest and cultural event",
    },
    25: {
      type: "event",
      title: "Workshop Day",
      description: "Technical workshops and seminars",
    },
  };

  const getDayStyle = (date) => {
    let base =
      "w-[64px] h-[78px] pt-[8px] pr-[8px] pb-[52px] pl-[48px] gap-[10px] rounded border text-[12px] font-medium leading-[18px] text-right align-middle font-[Inter] flex items-start justify-end cursor-pointer transition-colors";

    const isSelected = date === selectedDay;
    const event = events[date];

    if (event) {
      const type = event.type;

      // Highlight selected with background
      if (isSelected) {
        if (type === "exam")
          return base + " border-[#0077FF] text-white bg-[#0077FF]";
        if (type === "holiday")
          return base + " border-[#EF4444] text-white bg-[#EF4444]";
        if (type === "event")
          return base + " border-[#10B981] text-white bg-[#10B981]";
      }

      // Default event styling without selection
      if (type === "exam") return base + " border-[#0077FF] text-[#0077FF]";
      if (type === "holiday") return base + " border-[#EF4444] text-[#EF4444]";
      if (type === "event") return base + " border-[#10B981] text-[#10B981]";
    }

    // For regular days
    if (isSelected) {
      return base + " border-[#1F1D1D] text-[#1F1D1D]";
    }

    return base + " border-[#1F1D1D] text-[#1F1D1D]";
  };

  const handleClick = (date) => {
    setSelectedDay(date);
    setEventInfo(events[date] || null);
  };

  const renderDays = () => {
    const days = [];

    // Previous month's trailing days
    for (let i = startDay - 1; i >= 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className={`w-[64px] h-[78px] pt-[8px] pr-[8px] pb-[52px] pl-[48px] gap-[10px] rounded border border-[#D1D5DB] text-[12px] font-medium leading-[18px] text-right align-middle font-[Inter] flex items-start justify-end opacity-40 cursor-default`}
        >
          {new Date(currentMonth.year, 5, -i).getDate()} {/* Previous month */}
        </div>
      );
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.year, 5, i); // June = 5 (0-based)
      const isSunday = date.getDay() === 0;

      days.push(
        <div
          key={i}
          onClick={() => handleClick(i)}
          className={`${getDayStyle(i)} ${
            isSunday ? "text-[#EF4444] border-[#EF4444]" : ""
          }`}
        >
          {i}
        </div>
      );
    }

    // Next month's leading days
    const totalCells = startDay + daysInMonth;
    const nextDaysCount = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);

    for (let i = 1; i <= nextDaysCount; i++) {
      days.push(
        <div
          key={`next-${i}`}
          className={`w-[64px] h-[78px] pt-[8px] pr-[8px] pb-[52px] pl-[48px] gap-[10px] rounded border border-[#D1D5DB] text-[12px] font-medium leading-[18px] text-right align-middle font-[Inter] flex items-start justify-end opacity-40 cursor-default`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-[552px] h-[808px] mx-auto p-4 bg-[#FAFCFD] rounded-lg shadow border border-gray-200 flex flex-col">
      <h2 className="text-lg font-bold text-[#1F1D1D] mb-4 mt-2">
        Academic Calendar
      </h2>

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[16px] font-[Inter] font-bold text-[#1F1D1D]">
          {currentMonth.month} {currentMonth.year}
        </h3>
        <div className="flex gap-2 -mt-[2]">
          <button className="h-[24px] w-[24px] flex items-center justify-center border border-2 border-[#1F1D1D] rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button className="h-[24px] w-[24px] flex items-center justify-center border border-2 border-[#1F1D1D] rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Weekday Header */}
      <div className="grid grid-cols-7 gap-[6px] border-b border-gray-300 pb-2 mb-2 text-[12px] text-[#1F1D1D] font-semibold">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div
            key={day}
            className={`text-center font-[Inter] ${
              index === 0 ? "text-red-500" : "text-[#1F1D1D]"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-[6px]">{renderDays()}</div>

      {/* Event Details */}
      {eventInfo && (
        <>
          {eventInfo.type === "exam" && eventInfo.sessions ? (
            <div className="bg-white p-4 rounded-xl shadow border mt-12 w-full">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <span className="text-md font-semibold text-gray-700">
                  Exam
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                {eventInfo.sessions.map((session, index) => {
                  const [startTime, endTime] = session.time.split(" - ");
                  return (
                    <div
                      key={index}
                      className="flex-1 flex flex-col sm:flex-row items-start gap-4 sm:gap-8 border-r last:border-none pr-4 last:pr-0"
                    >
                      {/* Left: Time */}
                      <div className="text-sm text-gray-800 whitespace-nowrap">
                        {startTime} - <br />
                        {endTime}
                      </div>

                      {/* Right: Subject and Hall */}
                      <div className="flex flex-col">
                        <div className="text-md font-bold text-gray-900">
                          {session.subject}
                        </div>
                        <div className="text-sm text-gray-600">
                          {session.location}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-xl shadow border mt-12">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    eventInfo.type === "exam"
                      ? "bg-[#0077FF]"
                      : eventInfo.type === "holiday"
                      ? "bg-red-500"
                      : "bg-green-600"
                  }`}
                ></div>
                <span className="text-md font-semibold text-gray-700 capitalize">
                  {eventInfo.type === "event"
                    ? "Events"
                    : eventInfo.type === "exam"
                    ? "Exams"
                    : "Holidays"}
                </span>
              </div>
              <h4 className="text-lg font-extrabold text-gray-900">
                {eventInfo.title}
              </h4>
              <p className="text-sm text-gray-600">{eventInfo.description}</p>
            </div>
          )}
        </>
      )}

      {/* Legend at the bottom */}
      <div className="flex flex-wrap gap-6 text-sm mt-auto pt-5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <span>Exams</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>Holidays</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-600"></div>
          <span>Events</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          <span>Regular</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
