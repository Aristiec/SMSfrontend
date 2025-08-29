import React, { useState } from "react";
import Calendar from "../../components/student/timetable/Calendar";
import DailyTimetable from "../../components/student/timetable/DailyTimetable";
import TimetableHeader from "../../components/student/TimetableHeader";
const AcademicCalendar = () => {
  return (
    <div className="bg-[#E9EEF4] text-[#1F1D1D] font-[Inter] min-h-screen">
      <TimetableHeader />
      <div className="min-h-screen p-6">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <Calendar />
            <DailyTimetable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
