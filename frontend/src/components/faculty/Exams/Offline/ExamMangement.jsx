import React from 'react'

import {
  Search,
  Filter,
  FileText,
  CalendarDays ,
  Clock,
  Landmark,
  User,
  Pencil ,
  CircleX 
} from 'lucide-react';

const examData = [
  {
    subject: 'Physics',
    status: 'Scheduled',
    notification: 'Send Notification',
    code: 'CS-301',
    date: '2024-01-25',
    time: '10:00 AM - 12:00 PM',
    room: 'Room 201',
    students: '45 Students',
    duration: '2 hours',
    marks: 'Total Marks: 100',
  },
  {
    subject: 'Physics',
    status: 'Scheduled',
    notification: 'Send Notification',
    code: 'CS-301',
    date: '2024-01-27',
    time: '2:00 PM - 4:00 PM',
    room: 'Room 201',
    students: '48 Students',
    duration: '2 hours',
    marks: 'Total Marks: 100',
  },
  {
    subject: 'Physics',
    status: 'Scheduled',
    notification: 'Send Notification',
    code: 'CS-301',
    date: '2024-01-29',
    time: '9:00 AM - 11:00 AM',
    room: 'Room 308',
    students: '50 Students',
    duration: '2 hours',
    marks: 'Total Marks: 100',
  },
];

const ExamMangement = () => {
  return (
    <div>
      <div className="w-full mx-auto  rounded-[12px] bg-[#FFFFFF] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex flex-col gap-5 px-4 py-6">
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

        {/* exams */}
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

        {/* Cards */}
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
              </div>
            </div>

            {/* hr */}
            <div className="h-[1px] bg-[#D9D9D9] w-full" />

            {/* Details  */}
            <div className="flex flex-wrap  text-[#717171] text-[16px] font-[Inter] gap-[98px] leading-[100%] font-normal">
              <div className="flex items-center gap-3">
                <FileText size={14} /> {exam.code}
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays  size={16} /> {exam.date}
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
    </div>
  )
}

export default ExamMangement
