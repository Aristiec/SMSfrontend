import React, { useState } from "react";
import { RotateCcw } from "lucide-react";

const DailyClassTimetable = () => {
  const [selectedDay, setSelectedDay] = useState("Wednesday");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const scheduleData = {
    Wednesday: [
      { time: "9:30 AM - 10:15 AM", subject: "Data Structures", room: "Lab 2" },
      {
        time: "10:15 AM - 11:00 AM",
        subject: "Operating Systems",
        room: "Room 101",
      },
      { time: "BREAK", isBreak: true },
      { time: "11:15 AM - 12:00 PM", subject: "DBMS", room: "Room 101" },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Computer Networks",
        room: "Lab 2",
      },
      { time: "LUNCH", isBreak: true },
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
    Monday: [
      { time: "9:00 AM - 9:45 AM", subject: "Mathematics", room: "Room 102" },
      { time: "9:45 AM - 10:30 AM", subject: "Physics", room: "Lab 1" },
      { time: "BREAK", isBreak: true },
      { time: "10:45 AM - 11:30 AM", subject: "Chemistry", room: "Lab 3" },
      { time: "11:30 AM - 12:15 PM", subject: "English", room: "Room 103" },
      { time: "LUNCH", isBreak: true },
      { time: "1:00 PM - 1:45 PM", subject: "History", room: "Room 104" },
      { time: "1:45 PM - 2:30 PM", subject: "Geography", room: "Room 105" },
    ],
    Tuesday: [
      { time: "9:30 AM - 10:15 AM", subject: "Programming", room: "Lab 2" },
      { time: "10:15 AM - 11:00 AM", subject: "Algorithms", room: "Room 101" },
      { time: "BREAK", isBreak: true },
      {
        time: "11:15 AM - 12:00 PM",
        subject: "Computer Architecture",
        room: "Room 101",
      },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Discrete Mathematics",
        room: "Room 102",
      },
      { time: "LUNCH", isBreak: true },
      { time: "1:30 PM - 2:15 PM", subject: "Digital Logic", room: "Lab 1" },
      { time: "2:15 PM - 3:00 PM", subject: "Statistics", room: "Room 103" },
    ],
    Thursday: [
      { time: "9:00 AM - 9:45 AM", subject: "Machine Learning", room: "Lab 2" },
      { time: "9:45 AM - 10:30 AM", subject: "Data Mining", room: "Room 101" },
      { time: "BREAK", isBreak: true },
      {
        time: "10:45 AM - 11:30 AM",
        subject: "Cloud Computing",
        room: "Lab 3",
      },
      {
        time: "11:30 AM - 12:15 PM",
        subject: "Cybersecurity",
        room: "Room 102",
      },
      { time: "LUNCH", isBreak: true },
      {
        time: "1:00 PM - 1:45 PM",
        subject: "Mobile Development",
        room: "Lab 2",
      },
      {
        time: "1:45 PM - 2:30 PM",
        subject: "Project Management",
        room: "Room 104",
      },
    ],
    Friday: [
      {
        time: "9:30 AM - 10:15 AM",
        subject: "Research Methods",
        room: "Room 101",
      },
      {
        time: "10:15 AM - 11:00 AM",
        subject: "Ethics in Technology",
        room: "Room 102",
      },
      { time: "BREAK", isBreak: true },
      {
        time: "11:15 AM - 12:00 PM",
        subject: "Presentation Skills",
        room: "Room 103",
      },
      {
        time: "12:00 PM - 12:45 PM",
        subject: "Technical Writing",
        room: "Room 104",
      },
      { time: "LUNCH", isBreak: true },
      {
        time: "1:30 PM - 2:15 PM",
        subject: "Industry Seminar",
        room: "Auditorium",
      },
      {
        time: "2:15 PM - 3:00 PM",
        subject: "Career Guidance",
        room: "Room 105",
      },
    ],
    Saturday: [
      {
        time: "10:00 AM - 10:45 AM",
        subject: "Extra Curricular",
        room: "Playground",
      },
      { time: "10:45 AM - 11:30 AM", subject: "Sports", room: "Gymnasium" },
      { time: "BREAK", isBreak: true },
      {
        time: "11:45 AM - 12:30 PM",
        subject: "Library Session",
        room: "Library",
      },
      { time: "12:30 PM - 1:15 PM", subject: "Study Hall", room: "Room 101" },
    ],
  };

  const currentSchedule = scheduleData[selectedDay] || [];

  return (
    <div className="max-w-2xl mx-auto bg-[#FAFCFD] rounded-lg shadow-lg overflow-hidden font-[Inter]">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
        <h1 className="text-[16px] font-semibold text-[#1F1D1D]">
          Daily Class Timetable
        </h1>
        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
          <RotateCcw className="w-5 h-5 text-[#1F1D1D]" />
        </button>
      </div>

      {/* Day Navigation */}
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
          <div className="text-[12px] font-medium text-[#1F1D1D]">Room</div>
        </div>
      </div>

      {/* Schedule Cards */}
      <div className="px-6 py-4 space-y-4">
        {currentSchedule.map((item, index) =>
          item.isBreak ? (
            <div
              key={index}
              className="bg-[#CFDCEB] text-center text-[14px] font-medium text-[#1F1D1D] py-2 rounded-lg shadow-sm"
            >
              {item.time}
            </div>
          ) : (
            <div
              key={index}
              className="bg-[#FAFCFD] border border-[#FAFCFD] shadow-md rounded-lg h-12 flex items-center px-3"
            >
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="text-[13px] text-[#1F1D1D] leading-tight">
                  {item.time.includes(" - ") ? (
                    <>
                      {item.time.split(" - ")[0]}-<br />{" "}
                      {item.time.split(" - ")[1]}
                    </>
                  ) : (
                    item.time
                  )}
                </div>
                <div className="text-[14px] font-medium text-[#1F1D1D]">
                  {item.subject}
                </div>
                <div className="text-[14px] text-[#1F1D1D]">{item.room}</div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Empty State */}
      {currentSchedule.length === 0 && (
        <div className="px-6 py-12 text-center text-gray-500">
          <p className="text-sm">No classes scheduled for {selectedDay}</p>
        </div>
      )}
    </div>
  );
};

export default DailyClassTimetable;
