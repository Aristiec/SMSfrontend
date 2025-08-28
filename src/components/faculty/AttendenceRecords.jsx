import { Calendar, Pencil, ChevronDown, Search} from "lucide-react";
export default function AttendenceRecords() {
  // Attendance data
  const attendanceData = [
    { id: 1, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 2, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 3, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 4, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 5, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 6, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 7, name: "Name_1802240", present: 25, absent: 5, delay: 5 },
    { id: 8, name: "Name_1802240", present: 25, absent: 5, delay: 5 }
  ];

  return (
    
    <div className=" border-[#FFFFFF] rounded-tl-[12px] rounded-tr-[12px]  gap-[24px]">
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
      <div className="flex items-center justify-between mt-[24px] p-[16px] bg-[#04203E] border rounded-tl-[12px] rounded-tr-[12px] font-[Inter] font-[500] text-[16px] tracking-[0%] text-[#FAFCFD]">
        <div className="flex-1">Student's Name</div>
        <div className="flex-1 text-center">Present</div>
        <div className="flex-1 text-center">Absent</div>
        <div className="flex-1 text-center">Delay</div>
      </div>

      <div className="bg-[#FFFFFF] flex flex-col mb-32px">
        {attendanceData.map((student) => (
          <div 
            key={student.id} 
            className="flex items-center justify-between p-[16px] mt-[16px] mb-[5px] font-[400] text-[16px] tracking-[0%] text-[#1F1D1D] border-b border-gray-100"
          >
            <div className="flex-1 flex items-center gap-3">
              <input 
                type="checkbox" 
                className="w-4 h-4"
              />
              <span>{student.name}</span>
            </div>
            <div className="flex-1 text-center">{student.present}</div>
            <div className="flex-1 text-center">{student.absent}</div>
            <div className="flex-1 text-center">{student.delay}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
