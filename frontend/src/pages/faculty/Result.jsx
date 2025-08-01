import React from "react";
import { Search, ChevronDown, Users } from "lucide-react";

const Result = () => {
  const examResults = [
    {
      subject: "Physics (CS-301)",
      date: "2024-01-25",
      students: 45,
      duration: "2 hours",
      marks: 100,
    },
    {
      subject: "Physics (CS-301)",
      date: "2024-01-25",
      students: 45,
      duration: "2 hours",
      marks: 100,
    },
    {
      subject: "Physics (CS-301)",
      date: "2024-01-25",
      students: 45,
      duration: "2 hours",
      marks: 100,
    },
    {
      subject: "Physics (CS-301)",
      date: "2024-01-25",
      students: 45,
      duration: "2 hours",
      marks: 100,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow-md p-6 space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-[24px] font-semibold text-[#000000]  font-[Inter]">Online Exams</h2>
        <p className="text-base text-[#717171]  font-[Inter] text-[24px]">
          Manage classroom examinations and schedules
        </p>
      </div>

      {/* //// */}
      <div className="bg-[#FFFFFF] rounded-xl shadow-md w-full mx-auto">
      {/* Top Header */}
      <div className="bg-[#E9EEF4] px-6 py-4 rounded-t-lg border-b border-gray-300">
        <h2 className="text-[20px] font-semibold text-[#1F1D1D]">Results</h2>
      </div>

      {/* Search & Dropdown Section */}
      <div className="px-4 py-4 space-y-4">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Search Input */}
          <div className="flex items-center border border-[#CCCCCC] rounded-md px-4 py-2 flex-grow text-[#717171]">
            <input
              type="text"
              placeholder="Search exams"
              className="w-full bg-transparent outline-none text-[16px] placeholder-[#717171]"
            />
            <Search className="w-4 h-4 text-[#717171]" />
          </div>

          {/* Select Batch */}
          <div className="border border-[#CCCCCC] rounded-md px-5 py-2 flex items-center justify-between gap-4 text-[#717171] text-[16px] cursor-pointer min-w-[200px]">
            <span>Select Batch</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-[#E9EEF4] rounded-md px-4 py-4 flex flex-col sm:flex-row gap-4">
          {["Upcoming", "Pending", "History"].map((label, index) => (
            <div
              key={index}
              className="border border-[#CCCCCC] rounded-md px-6 py-2 bg-[#FFFFFF] text-[#717171] text-[16px] text-center cursor-pointer flex-1 font-[Inter]"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
      
      

        {/* Results List */}
        <div className="space-y-4 ">
          {examResults.map((exam, index) => (
            <div key={index} className="space-y-2">
              <div className="border border-gray-300 rounded-xl p-4 space-y-3">
                <h4 className="font-semibold text-[16px] text-[#717171]">{exam.subject}</h4>
                <div className="h-px bg-[#D9D9D9]" />
                <div className="flex flex-wrap gap-6 text-[16px] text-[#1F1D1D] font-[Inter]">
                  <span>Result Date - {exam.date}</span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {exam.students} Students
                  </span>
                  <span>Duration: {exam.duration}</span>
                  <span>Total Marks: {exam.marks}</span>
                </div>
              </div>
              <div className="bg-[#E9EEF4] rounded-md px-4 py-2 text-[16px] font-[Inter] text-[#1F1D1D] text-center cursor-pointer">
                View Answer Sheet
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Result;
