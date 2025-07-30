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
    <div className=" mt-[83px] border-[#FFFFFF] rounded-tl-[12px] rounded-tr-[12px] bg-[#FFFFFF] gap-[24px]">
      <div className="flex flex-row p-[16px] bg-[#04203E]  border rounded-tl-[12px] rounded-tr-[12px] font-[Inter] font-[500] text-[16px]  tracking-[0%] text-[#FAFCFD]">
        <div className="gap-[12px]">Student's Name</div>
        <div className="ml-[238px]">Present</div>
        <div className="ml-[238px]" >Absent</div>
        <div className="ml-[238px]">Delay</div>
        
      </div>

      <div className="bg-[#FFFFFF] flex flex-col  mb-32px">
        {attendanceData.map((student) => (
          <div 
            key={student.id} 
            className="flex flex-row ml-[16px] mt-[32px] mb-[21px]    font-[400] text-[16px] tracking-[0%] text-[#1F1D1D] items-center"
          >
            <div className="flex flex-row items-center gap-6">
                <input 
                type="checkbox" 
                className="w-4 h-4 "
              />{student.name}</div>
            <div className="ml-[238px]">{student.present}</div>
            <div className="ml-[282px]">{student.absent}</div>
            <div className="ml-[268px]">{student.delay}</div>
            <div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
