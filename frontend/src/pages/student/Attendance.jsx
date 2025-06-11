import React from "react";

const attendanceData = [
  {
    subject: "Data Structures and Algorithms",
    attended: 44,
    total: 50,
    missed:6,
    attendance:88.0,
    status: "Excellent",
  },
  {
    subject: "Operating Systems",
    attended: 38,
    total: 45,
    missed:7,
    attendance:84.4,
    status: "Good",
  },
  {
    subject: "Database Management System",
    attended: 40,
    total: 45,
    missed:5,
    attendance:89.9,
    status: "Good",
  },
  {
    subject: "Computer Networks",
    attended: 35,
    total: 40,
    missed:5,
    attendance:87.5,
    status: "Good",
  },
  {
    subject: "Software Engineering",
    attended: 42,
    total: 45,
    missed:3,
    attendance:93.3,
    status: "Excellent",
  },
  {
    subject: "Artificial Intelligence",
    attended: 36,
    total: 45,
    missed:9,
    attendance:80.0,
    status: "Good",
  },
  {
    subject: "Web Development",
    attended: 36,
    total: 45,
    missed:9,
    attendance:80.0,
    status: "Good",
  },
];

const AttendanceTable = () => {
  return (
    <div style={{boxShadow: '0px 4px 8px 0px #00000033'}} className="p-6 bg-[#FAFCFD] font-[Inter] rounded-[12px] w-full  flex flex-col ">
     <div className="flex gap-[4px] flex-col justify-center-center"> 
     <h2 className=" text-[16px] font-bold leading-[28px] tracking-[0] text-[#1F1D1D] ">Subject-wise Attendance</h2>
      <p className="font-medium text-[12px] leading-[28px] tracking-[0] text-[#1F1D1D]  ">Detailed breakdown of your attendance in each subject</p>
      </div>
      
      <div className="overflow-x-auto flex gap-[12px]">
        <table className="min-w-full my-2 ">
          <thead className="font-[Inter]  border-b-1  px-6 py-[8px] font-medium  text-[14px] leading-[16px] tracking-0  items-center text-left text-[#1F1D1D] min-w-full gap-[12px]">
            <tr className=" ">
              <th className="p-3 font-medium">Subject</th>
              <th className="p-3 font-medium">Classes Attended</th>
              <th className="p-3 font-medium">Classes Missed</th>
              <th className="p-3 font-medium">Attendance</th>
              <th className="p-3 font-medium text-[12px]">Status</th>
            </tr>
          </thead>
          <tbody  className="bg-[#FAFCFD]  px-[12px] py-[24px] border-spacing-y-[12px]">
            {attendanceData.map((item, index) => {
              const statusColor = item.status === "Excellent" ? "text-[#10B981]" : "text-[#04203E]";

              return (
                <tr key={index} style={{boxShadow: '0px 4px 8px 0px #0000001F'}} className="px-[12px] rounded-[12px] py-[24px] align-middle">
                  <td className="py-3 px-4 font-medium text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle ">{item.subject}</td>
                  <td className="py-3 px-4 font-medium text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle">{item.attended} / {item.total}</td>
                  <td className="py-3 px-4 font-medium text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle">{item.missed}</td>
                  <td className="py-3 px-4 font-medium text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle">{item.attendance}%</td>
                  <td className={`py-3 font-semibold ${statusColor}`}>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs font-[Inter] text-[#1F1D1D] mt-3 font-[500px] flex gap-1 items-center  ">
        <strong className="font-[700px]">Note:</strong> Minimum required attendance is 75%. Please contact your class teacher if you need to discuss your attendance.
      </p>
    </div>
  );
};

export default AttendanceTable;
