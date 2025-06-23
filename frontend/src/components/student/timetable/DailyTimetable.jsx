import React, { useState } from "react";
import { RefreshCw } from "lucide-react";

const DailyTimetable = () => {
  const [selectedDay, setSelectedDay] = useState("Wednesday");

  // Sample class schedules for different days
  const classSchedules = {
    Monday: [
      { time: "9:30 AM - 10:15 AM", subject: "Mathematics", room: "Room 201" },
      { time: "10:15 AM - 11:00 AM", subject: "Physics", room: "Lab 1" },
      { time: "11:15 AM - 12:00 PM", subject: "Chemistry", room: "Lab 2" },
      { time: "12:00 PM - 12:45 PM", subject: "English", room: "Room 101" },
      { time: "1:30 PM - 2:15 PM", subject: "Computer Science", room: "Lab 3" },
      { time: "2:15 PM - 3:00 PM", subject: "History", room: "Room 102" },
    ],
    Tuesday: [
      { time: "9:30 AM - 10:15 AM", subject: "Algorithms", room: "Lab 1" },
      {
        time: "10:15 AM - 11:00 AM",
        subject: "Database Systems",
        room: "Room 102",
      },
      {
        time: "11:15 AM - 12:00 PM",
        subject: "Software Engineering",
        room: "Room 101",
      },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Computer Networks",
        room: "Lab 2",
      },
      {
        time: "1:30 PM - 2:15 PM",
        subject: "Machine Learning",
        room: "Room 103",
      },
      { time: "2:15 PM - 3:00 PM", subject: "Web Development", room: "Lab 1" },
    ],
    Wednesday: [
      { time: "9:30 AM - 10:15 AM", subject: "Data Structures", room: "Lab 2" },
      {
        time: "10:15 AM - 11:00 AM",
        subject: "Operating Systems",
        room: "Room 101",
      },
      { time: "11:15 AM - 12:00 PM", subject: "DBMS", room: "Room 101" },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Computer Networks",
        room: "Lab 2",
      },
      {
        time: "1:30 PM - 2:15 PM",
        subject: "Software Engineering",
        room: "Room 101",
      },
      {
        time: "2:15 PM - 3:00 PM",
        subject: "Artificial Intelligence",
        room: "Room 101",
      },
      { time: "3:00 PM - 3:45 PM", subject: "Web Development", room: "Lab 2" },
    ],
    Thursday: [
      {
        time: "9:30 AM - 10:15 AM",
        subject: "Theory of Computation",
        room: "Room 103",
      },
      {
        time: "10:15 AM - 11:00 AM",
        subject: "Computer Graphics",
        room: "Lab 3",
      },
      {
        time: "11:15 AM - 12:00 PM",
        subject: "Mobile Development",
        room: "Lab 1",
      },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Cybersecurity",
        room: "Room 102",
      },
      { time: "1:30 PM - 2:15 PM", subject: "Data Analytics", room: "Lab 2" },
      {
        time: "2:15 PM - 3:00 PM",
        subject: "Cloud Computing",
        room: "Room 101",
      },
    ],
    Friday: [
      { time: "9:30 AM - 10:15 AM", subject: "Project Work", room: "Lab 3" },
      { time: "10:15 AM - 11:00 AM", subject: "Seminar", room: "Room 201" },
      {
        time: "11:15 AM - 12:00 PM",
        subject: "Research Methods",
        room: "Room 102",
      },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Technical Writing",
        room: "Room 101",
      },
    ],
    Saturday: [],
  };

  const currentSchedule = classSchedules[selectedDay] || [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Daily Class Timetable</h2>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <RefreshCw size={20} />
        </button>
      </div>

      {/* Day Tabs */}
      <div className="flex border-b mb-6 overflow-x-auto">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              selectedDay === day
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule */}
      <div className="space-y-1">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700 pb-3 border-b-2 border-gray-200">
          <div>Time</div>
          <div>Subject</div>
          <div>Room</div>
        </div>

        {/* Schedule Items */}
        {currentSchedule.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-3 gap-4 py-4 text-sm border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="text-gray-700 font-medium">{item.time}</div>
              <div className="font-semibold text-gray-900">{item.subject}</div>
              <div className="text-gray-600">{item.room}</div>
            </div>

            {/* Break indicators */}
            {(index === 1 || index === 3) && (
              <div className="bg-blue-100 text-blue-800 text-center py-3 my-2 rounded-lg text-sm font-semibold">
                {index === 1 ? "BREAK" : "LUNCH"}
              </div>
            )}
          </div>
        ))}

        {currentSchedule.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <div className="text-lg font-medium mb-2">No classes scheduled</div>
            <div className="text-sm">Enjoy your free day!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyTimetable;
