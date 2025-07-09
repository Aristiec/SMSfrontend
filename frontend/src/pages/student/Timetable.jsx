import React, { useState, useRef, useEffect } from "react";
import TimetableHeader from "../../components/student/TimetableHeader";
import { addWeeks, getDay } from "date-fns";
import { ArrowRightLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api.js"; // 👈 Your Axios instance

const Timetable = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const [timetable, setTimetable] = useState(null);
  const [loading, setLoading] = useState(true);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeSlots = [
    { start: "08:00", end: "08:50" },
    { start: "08:50", end: "09:40" },
    { start: "09:40", end: "10:30" },
    { start: "10:30", end: "11:20" },
    { start: "11:20", end: "12:10" },
    { start: "01:00", end: "01:50" },
    { start: "01:50", end: "02:40" },
    { start: "02:40", end: "03:30" },
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

  useEffect(() => {
    setShowTooltip(true);
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchTimetable = async () => {
      try {
        const studentId = localStorage.getItem("studentId");
        const res = await api.get(`/timetable/student/${studentId}`);
        setTimetable(res.data);
      } catch (err) {
        console.error("Error fetching timetable:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTimetable();
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-8 min-h-screen bg-[#E9EEF4] text-[#1F1D1D]">
      <div className="flex flex-col px-4 gap-6">
        <TimetableHeader />

        <div className="flex justify-center px-4 lg:px-4">
          <div className="w-full max-w-7xl bg-[#FAFCFD] rounded-lg shadow-md border border-white p-4 md:p-6 overflow-auto">
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
              <h1 className="text-[20px] font-semibold text-[#1F1D1D] -ml-5">
                Weekly Class Timetable
              </h1>

              <div className="relative" ref={tooltipRef}>
                {showTooltip && (
                  <div className="fixed inset-0 bg-[#1F1D1D]/20 z-40 pointer-events-none" />
                )}

                <button
                  className="p-2 rounded-lg bg-[#CFDCEB] relative z-50 -mr-6"
                  onClick={() => navigate("/student/timetable/academicCal")}
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

            {loading ? (
              <p className="p-4 text-center">Loading timetable...</p>
            ) : (
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-[16px] font-normal text-center border border-[#04203E] w-32 h-16"></th>
                    {timeSlots.map((slot, index) => (
                      <th
                        key={index}
                        className="text-[14px] md:text-[16px] font-[Inter]  font-normal text-center border border-[#04203E] leading-tight w-28 h-16"
                      >
                        {" "}
                        {slot.start} -<br /> {slot.end}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((day, dayIndex) => {
                    const isSelected = dayIndex === selectedDayIndex;

                    // Get slots for the current day
                    const dayData = timetable?.slots.find(
                      (d) => d.day.toLowerCase() === day.toLowerCase()
                    );

                    return (
                      <tr
                        key={dayIndex}
                        className={isSelected ? "bg-[#E9EEF4]" : ""}
                      >
                        <td className="font-bold text-center font-[Inter] text-[16px] border border-[#04203E] w-32 h-20">
                          {day}
                        </td>

                        {timeSlots.map((slot, timeIndex) => {
                          // Find matching slot for this time range
                          const match = dayData?.slots.find(
                            (s) =>
                              s.startTime === slot.start &&
                              s.endTime === slot.end
                          );

                          return (
                            <td
                              key={timeIndex}
                              className="border border-[#04203E] w-28 h-20"
                            >
                              {match ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                  <div className="text-[12px] font-[Inter] font-semibold text-[#1F1D1D]">
                                    {match.subjectName}
                                  </div>
                                  <div className="text-[12px] font-[Inter] text-[#1F1D1D]">
                                    {match.facultyName}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center justify-center text-[#1F1D1D] text-[12px]">
                                  No class
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
