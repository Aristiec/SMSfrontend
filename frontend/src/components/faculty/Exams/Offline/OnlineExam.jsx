import React from 'react'
import { Plus } from "lucide-react";
import { useState } from "react";
// import cardIcon1 from "../../assets/File_in_FD.png";
import cardIcon1 from "../../../../assets/File_in_FD.png";
import cardIcon2 from "../../../../assets/Timetable_in_FD.png";
import cardIcon3 from "../../../../assets/Profile_in_FD.png";
import cardIcon4 from "../../../../assets/Score_in_FD.png";
// import Addexam from "./Addexam";
import Addexam from "../../AddExam";
import {
  Search,
  Filter,
  FileText,
  CalendarDays ,
  Clock,
  Landmark,
  User,
  Pencil ,
  CircleX,
  Eye
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

const OnlineExam = () => {
      const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
       <div>

       <section className="mx-auto    bg-[#E9EEF4] flex flex-col gap-8  font-[Inter]">
      

      {/* Main Content Container */}
      <div
        className="w-full h-full rounded-[12px] p-[16px] gap-[16px] bg-[#FAFCFD] flex justify-between items-center"
        style={{
          opacity: 1,
          border: "1px solid #CCCCCC",
          boxShadow: "0px 4px 8px 0px #0000001F"
        }}
      >
        <div className="w-[541px] h-[72px] flex flex-col gap-[14px] opacity-100 p-[8px]">
          <h1 className="font-[Inter] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#000000]">
            Offline Exams
          </h1>
          <p className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Manage classroom examinations and schedules
          </p>
        </div>
        
        <button 
          onClick={handleOpenForm}
          className="rounded-[8px] bg-[#04203E] flex items-center justify-center gap-[12px] px-[16px] py-[12px] opacity-100 hover:bg-[#1F1D1D] transition-all duration-300 ease-in-out"
        >
          <Plus className="w-4 h-4 text-[#FAFCFD]" />
          <span className="text-[#FAFCFD] font-[Inter] font-medium text-[14px] leading-6 tracking-normal">
            Schedule New Exam
          </span>
        </button>
      </div>

      {/* Stats Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Total Exams Card */}
        <div 
          className="w-full  h-full rounded-[12px] p-[16px] gap-[20px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center ">
           
            <span className="font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Total exams this month
            </span>
             <img src={cardIcon1} alt="Total Exams" className="w-5 h-5 mb-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            8 completed, 4 upcoming
          </div>
        </div>

        {/* Scheduled Today Card */}
        <div 
          className="w-full h-full rounded-[12px] p-[16px] gap-[22px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center ">
            
            <span className="font-[Inter] mt-1 font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Scheduled Today
              
            </span>
            <img src={cardIcon2} alt="Scheduled Today" className="w-5 h-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Morning & afternoon sessions
          </div>
        </div>

        {/* Students Enrolled Card */}
        <div 
          className="w-full h-full rounded-[12px] p-[16px] gap-[32px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center ">
            
            <span className="font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Students Enrolled
            </span>
            <img src={cardIcon3} alt="Students Enrolled" className="w-5 h-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Across all exam sessions
          </div>
        </div>

        {/* Average Score Card */}
        <div 
          className="w-full h-full rounded-[12px] p-[16px] gap-[32px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center gap-4">
            
            <span className="font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Average Score
            </span>
            <img src={cardIcon4} alt="Average Score" className="w-5 h-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Last 5 completed exams
          </div>
        </div>
      </div>

      {/* Add Exam Form Modal - Fixed overlay structure */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 ml-[450px] mt-[100px]">
            <Addexam isOpen={isFormOpen} onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </section>

    {/* exam management section  */}
    <div className="w-full mx-auto mt-[20px] rounded-[12px] bg-[#FFFFFF] shadow-[0px_4px_8px_rgba(0,0,0,0.25)] flex flex-col gap-5 px-4 py-6">
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
            <> 
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
                {
                    index === 0 && (
                        <div className="bg-[#FFF4ED] text-[#F97316] px-3 py-1 rounded-full text-[16px] font-[Inter]">
                  {exam.notification}
                </div>
                    )
                }
              </div>

              {/* Right side */}
              <div className="flex items-center gap-7 mt-2 sm:mt-0">
                <div className="flex items-center gap-2 text-[#0077FF] cursor-pointer text-[16px] font-[Inter] leading-[100%] font-normal">
                  <Eye  size={17} /> view
                </div>
                <div className="flex items-center gap-2 text-[#717171] cursor-pointer text-[16px] font-[Inter] leading-[100%] font-normal">
                  <Pencil  size={17} /> Edit
                </div>
                <div className="flex items-center gap-2 text-[#EF4444] cursor-pointer text-[16px] font-[Inter] leading-[100%] font-normal">
                  <CircleX  size={16} /> Cancel
                </div>
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
            <div className="w-full mt-2 flex items-center justify-center  gap-[12px] bg-[#E9EEF4] rounded-[8px] px-[12px] py-[12px] text-[#1F1D1D] font-[Inter] text-[16px] font-normal cursor-pointer leading-[100%]">
      <Plus size={13} className="text-[#1F1D1D]" />
      <span>Create Question Paper</span>
    </div> 
    </>
        ))}
      </div>
      
    </div>
    
    </div>
  )
}

export default OnlineExam
