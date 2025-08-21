import React, { useState } from "react";
import Addexam from "../../AddExam";
import {
  Plus,
  CalendarDays,
  Users,
  FileText,
  BarChart2,
  Search,
  Filter,
  Clock,
  Landmark,
  User,
  Pencil,
  CircleX,
  AppWindow 
} from "lucide-react";

const stats = [
  {
    title: "Total exams this month",
    value: "12",
    description: "8 completed, 4 upcoming",
    icon: <FileText className="text-[#0077FF] w-5 h-5" />,
  },
  {
    title: "Scheduled Today",
    value: "12",
    description: "Morning & afternoon sessions",
    icon: <CalendarDays className="text-[#214876] w-5 h-5" />,
  },
  {
    title: "Students Enrolled",
    value: "12",
    description: "Across all exam sessions",
    icon: <Users className="text-[#10B981] w-5 h-5" />,
  },
  {
    title: "Average Score",
    value: "12",
    description: "Last 5 completed exams",
    icon: <AppWindow  className="text-[#F97316] w-5 h-5" />,
  },
];

const examData = [
  {
    subject: "Physics",
    status: "Scheduled",
    notification: "Send Notification",
    code: "CS-301",
    date: "2024-01-25",
    time: "10:00 AM - 12:00 PM",
    room: "Room 201",
    students: "45 Students",
    duration: "2 hours",
    marks: "Total Marks: 100",
  },
  {
    subject: "Physics",
    status: "Scheduled",
    notification: "Send Notification",
    code: "CS-301",
    date: "2024-01-27",
    time: "2:00 PM - 4:00 PM",
    room: "Room 201",
    students: "48 Students",
    duration: "2 hours",
    marks: "Total Marks: 100",
  },
  {
    subject: "Physics",
    status: "Scheduled",
    notification: "Send Notification",
    code: "CS-301",
    date: "2024-01-29",
    time: "9:00 AM - 11:00 AM",
    room: "Room 308",
    students: "50 Students",
    duration: "2 hours",
    marks: "Total Marks: 100",
  },
];

const OfflineExam = () => {
      const [isFormOpen, setIsFormOpen] = useState(false);
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };
  return (
    <div className="p-6 space-y-6 bg-[#FFFFFF]">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border border-[#CCCCCC] rounded-[8px] p-4 mb-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#000000] text-[24px] leading-[100%] font-semibold font-[Inter]">Offline Exams</h1>
          <p className="text-[#717171] text-base text-[24px] leading-[100%] font-[Inter]">
            Manage classroom examinations and schedules
          </p>
        </div>
        <button onClick={handleOpenForm} className="mt-4 md:mt-0 flex items-center gap-2 bg-[#04203E] text-[#FAFCFD] px-4 py-3 rounded-[8px]">
          <Plus className="w-[15px] h-[15px]" />
          <span className="text-[16px] leading-[100%] font-[Inter] text-[#FAFCFD]">Schedule New Exam</span>
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAFCFD] rounded-[12px] shadow-md p-4 flex flex-col justify-between gap-4"
          >
            <div className="flex justify-between items-start">
              <p className="text-[#717171] text-[18px] leading-[100%] font-normal font-[Inter]">{item.title}</p>
              <div className="self-start">{item.icon}</div>
            </div>
            <div className="text-[#1F1D1D] font-bold text-[20px] leading-[100%] font-[Inter]">{item.value}</div>
            <div className="text-[#717171] leading-[100%] text-[14px] font-[Inter]">{item.description}</div>
          </div>
        ))}
      </div>

      {/* Exam Management Section */}
      <div className="w-full mx-auto rounded-[12px] bg-[#FFFFFF] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex flex-col gap-5 px-4 py-6">
        {/* Header */}
        <div className="w-full rounded-t-[8px] border-b border-[#D1D5DB] bg-[#E9EEF4] px-6 py-4">
          <h2 className="text-[20px] font-semibold text-[#1F1D1D] font-[Inter] leading-[100%] tracking-[0%]">
            Exam Management
          </h2>
        </div>

        <div className="w-full flex flex-col gap-5">
          {/* Search input */}
          <div className="flex flex-col sm:flex-row gap-5 justify-between items-center w-full">
            <div className="flex items-center justify-between border border-[#CCCCCC] rounded-[8px] px-4 py-3 w-full">
              <input
                type="text"
                placeholder="Search exams"
                className="w-full outline-none  text-[#717171] text-[16px] font-[Inter] leading-[100%]"
              />
              <Search size={16} className="text-[#717171] ml-2" />
            </div>

            <div className="flex gap-4 w-full sm:w-auto justify-end">
              <button className="flex items-center border border-[#CCCCCC] rounded-[8px] px-5 py-3 text-[#717171] text-[16px] font-[Inter] whitespace-nowrap leading-[100%]">
                Download Admit Card
              </button>
              <button className="flex items-center gap-2 border border-[#CCCCCC] rounded-[8px] px-5 py-[10px] text-[#717171] text-[16px] font-[Inter] whitespace-nowrap leading-[100%]">
                <Filter size={16} /> Apply Filter
              </button>
            </div>
          </div>

          {/*  Buttons */}
          <div className="bg-[#E9EEF4] rounded-[8px] p-4 flex gap-7">
            <button className="flex-1 bg-[#F2F8FF] border border-[#0077FF] text-[#0077FF] rounded-[8px] px-5 py-[10px] text-[16px] font-[Inter] text-center">
              Upcoming Exams
            </button>
            <button className="flex-1 border bg-[#FFFFFF] border-[#CCCCCC] text-[#717171] rounded-[8px] px-5 py-[10px] text-[16px] font-[Inter] text-center">
              Active Exams
            </button>
            <button className="flex-1 border border-[#CCCCCC] text-[#717171] rounded-[8px] px-5 py-[10px] text-[16px] font-[Inter] text-center bg-[#FFFFFF]">
              Past Exams
            </button>
          </div>

          {/* Exam Cards */}
          {examData.map((exam, index) => (
            <div
              key={index}
              className="border border-[#CCCCCC] rounded-[12px] p-4 flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="flex flex-wrap gap-4 sm:gap-8 items-center text-[#717171]">
                  <span className="text-[16px] font-semibold font-[Inter] text-[#717171] leading-[100%]">
                    {exam.subject}
                  </span>
                  <div className="bg-[#FFF4ED] text-[#F97316] px-3 py-1 rounded-full text-[16px] font-[Inter]">
                    {exam.status}
                  </div>
                  {index === 0 && (
                    <div className="bg-[#FFF4ED] text-[#F97316] px-3 py-1 rounded-full text-[16px] font-[Inter]">
                      {exam.notification}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-7 mt-2 sm:mt-0">
                  <div className="flex items-center gap-2 text-[#717171] cursor-pointer text-[16px] font-[Inter] leading-[100%] font-normal">
                    <Pencil size={17} /> Edit
                  </div>
                  <div className="flex items-center gap-2 text-[#EF4444] cursor-pointer text-[16px] font-[Inter] leading-[100%] font-normal">
                    <CircleX size={16} /> Cancel
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-[#D9D9D9] w-full" />

              <div className="flex flex-wrap text-[#717171] text-[16px] font-[Inter] gap-[98px] leading-[100%] font-normal">
                <div className="flex items-center gap-3">
                  <FileText size={14} /> {exam.code}
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays size={16} /> {exam.date}
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} /> {exam.time}
                </div>
                <div className="flex items-center gap-3">
                  <Landmark size={16} /> {exam.room}
                </div>
              </div>

              <div className="flex flex-wrap gap-[40px] text-[#1F1D1D] text-[16px] font-[Inter]">
                <div className="flex items-center gap-2">
                  <User size={16} /> {exam.students}
                </div>
                <div>{exam.duration}</div>
                <div>{exam.marks}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
       {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 ml-[450px] mt-[100px]">
            <Addexam isOpen={isFormOpen} onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OfflineExam;
