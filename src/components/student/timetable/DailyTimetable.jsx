import React, { useState, useRef, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fetchDailyTimetableByDay } from "../../../features/auth/authAPI";

const DailyClassTimetable = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [dailyData, setDailyData] = useState([]);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setShowTooltip(true);
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const getDailyTimetable = async () => {
      try {
        const data = await fetchDailyTimetableByDay(selectedDay);

        // Insert lunch break after "12:10"
        const updatedData = [];
        for (let i = 0; i < data.length; i++) {
          updatedData.push(data[i]);
          if (data[i].endTime === "12:10") {
            updatedData.push({ isBreak: true, type: "LUNCH" });
          }
        }

        setDailyData(updatedData);
      } catch (err) {
        console.error("Error fetching daily timetable:", err);
        setDailyData([]);
      }
    };

    getDailyTimetable();
  }, [selectedDay]);

  return (
    <div className="mx-auto bg-[#FAFCFD] rounded-lg shadow-lg overflow-hidden font-[Inter]">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
        <h1 className="text-[16px] font-semibold text-[#1F1D1D]">
          Daily Class Timetable
        </h1>
        <div className="relative" ref={tooltipRef}>
          {showTooltip && (
            <div className="fixed inset-0 bg-[#1F1D1D]/20 z-40 pointer-events-none" />
          )}

          <button
            className="p-2 rounded-lg bg-[#CFDCEB] relative z-50 "
            onClick={() => navigate("/student/academicCal/timetable")}
          >
            <ArrowRightLeft className="w-5 h-5 text-[#1F1D1D]" />
          </button>

          {showTooltip && (
            <div className="absolute right-full mr-4 top-1/3 -translate-y-1/2 bg-[#FAFCFD] border border-[#FAFCFD] text-[16px] text-[#1F1D1D] px-3 py-1 rounded shadow-md z-50 whitespace-nowrap">
              Click to switch between
              <br /> Weekly and Daily view
            </div>
          )}
        </div>
      </div>

      {/* Day Tabs */}
      <div className="px-6 py-4">
        <div className="flex space-x-3 overflow-x-auto">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`whitespace-nowrap pb-2 px-1 text-sm font-medium transition-colors ${
                selectedDay === day
                  ? "text-[#04203E] border-b-2 border-[#04203E]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Table Header */}
      <div className="px-6 py-3 bg-gray-50 border-b w-[93%] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-[12px] font-medium text-[#1F1D1D]">Time</div>
          <div className="text-[12px] font-medium text-[#1F1D1D]">Subject</div>
          <div className="text-[12px] font-medium text-[#1F1D1D]">Faculty</div>
        </div>
      </div>

      {/* Schedule */}
      <div className="px-6 py-4 space-y-4">
        {dailyData.length > 0 ? (
          dailyData.map((slot, index) =>
            slot.isBreak ? (
              <div
                key={index}
                className="bg-[#CFDCEB] font-[Inter] text-center text-[14px] font-medium text-[#1F1D1D] py-2 rounded-lg shadow-sm"
              >
                {slot.type}
              </div>
            ) : (
              <div
                key={index}
                className="bg-[#FAFCFD] border border-[#FAFCFD] shadow-md rounded-lg h-12 flex items-center px-3"
              >
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="text-[13px] text-[#1F1D1D] leading-tight">
                    {slot.startTime} - {slot.endTime}
                  </div>
                  <div className="text-[14px] font-medium text-[#1F1D1D] font-[Inter]">
                    {slot.subjectName}
                  </div>
                  <div className="text-[14px] text-[#1F1D1D] font-[Inter]">
                    {slot.facultyName}
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <div className="px-6 py-12 text-center text-gray-500">
            <p className="text-sm">No classes scheduled for {selectedDay}.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyClassTimetable;
