import React from "react";
import { Calendar, Pencil, ChevronDown, Search, Check, X, Clock , Square } from "lucide-react";

const attendanceData = new Array(7).fill({
  name: "Name",
  roll: "1802240",
  weekly: ["present", "absent", "late", "present", "present", "present", "absent"],
  absentCount: 2,
});

const Attendance = () => {
  const getIcon = (status) => {
    if (status === "present") return <Check size={12} className="text-[#10B981]" />;
    if (status === "absent") return <X size={12} className="text-[#EF4444]" />;
    if (status === "late") return <Clock  size={12} className="text-[#F97316]" />;
    return null;
  };

  return (
    <div className="p-6 bg-[#E9EDF2] min-h-screen font-[Inter] text-[#1F1D1D]">
      {/* Tabs */}
      <div className="w-full mx-auto flex border-b border-[#000000] font-[Inter]">
        <div className="w-1/2 flex items-center justify-center gap-2 py-2 rounded-t-lg border-b-2 border-[#04203E] bg-[#FFFFFF] text-[#1F1D1D] font-medium text-[16px] leading-[22px] font-[Inter]">
          Mark Attendance
        </div>
        <div className="w-1/2 flex items-center justify-center gap-2 py-2 text-[#1F1D1D] font-medium text-[16px] leading-[22px] font-[Inter]">
          Attendance Record
        </div>
      </div>

      {/* Header Section */}
      <div className="w-full mt-4 rounded-xl bg-[#04203E] p-4 flex flex-wrap items-center gap-4">
        <h2 className="text-[#FAFCFD] text-[24px] leading-[28px] font-bold">Attendance</h2>

        {/* Date Picker */}
        <div className="flex items-center gap-2 border border-[#FAFCFD] rounded-lg px-3 py-1.5">
          <Calendar size={15} className="text-[#FAFCFD]" />
          <span className="text-[#FAFCFD] text-[16px] leading-[22px]">Jan 02, 2000</span>
          <div className="w-[1px] h-5 bg-[#D9D9D9] mx-2"></div>
          <Pencil size={12} className="text-[#FAFCFD]" />
        </div>

        {/* Dropdown */}
        <div className="flex items-center justify-between gap-2 bg-[#FAFCFD] text-[#1F1D1D] px-3 py-2 rounded-lg">
          <span className="text-[16px] leading-[22px]">CSE-01</span>
          <ChevronDown size={10} className="rotate-[-90deg]" />
        </div>

        {/* Search */}
        <div className="flex items-center justify-between w-[240px] bg-[#FAFCFD] px-3 py-2 rounded-lg border border-[#717171]">
          <input
            type="text"
            placeholder="Search by name, batch"
            className="text-[16px] leading-[22px] text-[#717171] placeholder-[#717171] outline-none w-full bg-transparent font-[Inter]"
          />
          <Search size={14} className="text-[#717171]" />
        </div>
      </div>

      {/* Table Header */}
      <div className="mt-6 bg-[#04203E] text-[#FAFCFD] rounded-t-xl px-4 py-4 flex items-center justify-between font-medium text-[16px] leading-[22px]">
        <div className="flex items-center gap-2 ">Student’s Name</div>
        <div className="">Attendance Status</div>
        <div className="flex justify-between">Weekly Attendance</div>
        <div className=" text-right">Absent</div>
      </div>

      {/* Rows */}
      <div className="bg-[#FAFCFD] rounded-b-xl px-4 py-2">
        {attendanceData.map((student, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-[#E0E0E0] text-[16px] text-[#1F1D1D]"
          >
            {/* Student Info */}
            <div className="flex items-center gap-4 w-[220px]">
    {/* <input type="checkbox" className="w-4 h-4" /> */}
    <Square size={12} stroke="#1F1D1D" strokeWidth={1} />
    <div className="flex items-center gap-4 text-[16px]">
      <span>{student.name}</span>
      <span className="text-[#1F1D1D] text-[16px]">{student.roll}</span>
    </div>
  </div>

            {/* Attendance Status */}
            <div className="flex border border-[#717171] rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-r border-[#717171]">
                <Check size={12} strokeWidth={1.5} className="text-[#717171]" />
                <span className="text-[#717171] text-[16px]">Present</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 border-r border-[#717171]">
                <X size={12} strokeWidth={1.5} className="text-[#717171]" />
                <span className="text-[#717171] text-[16px]">Absent</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2">
                <Clock  size={12} strokeWidth={1.5} className="text-[#717171]" />
                <span className="text-[#717171] text-[16px]">Late</span>
              </div>
            </div>

            {/* Weekly Attendance */}
            <div className="w-[250px] flex gap-3 text-center ml-20">
              {student.weekly.map((status, i) => (
                <div key={i}>
                  <div className="text-[12px] font-semibold text-[#1F1D1D]">0{i + 1}</div>
                  <div className="flex justify-center mt-1">{getIcon(status)}</div>
                </div>
              ))}
            </div>

            {/* Absent Count */}
            <div className="w-[50px] text-right">{student.absentCount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
