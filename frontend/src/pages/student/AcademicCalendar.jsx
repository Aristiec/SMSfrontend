import React, { useState } from "react";
import Calendar from "../../components/student/timetable/Calendar";
import DailyTimetable from "../../components/student/timetable/DailyTimetable";

const AcademicCalendar = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Calendar />
          <DailyTimetable />
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
