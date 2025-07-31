import React, { useState } from "react";
import {
  Printer,
  FileSpreadsheet,
  Upload,
  Search,
  ArrowDownUp,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";

const Report = () => {
  const [selectedCourse, setSelectedCourse] = useState("Computer Science");
  const [selectedSemester, setSelectedSemester] = useState("Sem III");
  const [selectedSection, setSelectedSection] = useState("Section A");
  const [selectedSubject, setSelectedSubject] = useState("Web Development");
  const [selectedReportType, setSelectedReportType] = useState("Attendance");
  const [selectedExamType, setSelectedExamType] = useState("All Exams");

  const studentData = [
    {
      id: 1,
      initials: "AS",
      name: "Asha Singh",
      rollNumber: "ROLL0000",
      totalClasses: 30,
      attended: 28,
      percentage: 93,
      status: "Outstanding",
      statusColor: "#10B981",
      progressColor: "#10B981",
    },
    {
      id: 2,
      initials: "AS",
      name: "Asha Singh",
      rollNumber: "ROLL0000",
      totalClasses: 30,
      attended: 19,
      percentage: 62,
      status: "Warning",
      statusColor: "#F97316",
      progressColor: "#F97316",
    },
    {
      id: 3,
      initials: "AS",
      name: "Asha Singh",
      rollNumber: "ROLL0000",
      totalClasses: 30,
      attended: 15,
      percentage: 50,
      status: "Critical",
      statusColor: "#EF4444",
      progressColor: "#EF4444",
    },
  ];

  const examData = [
    {
      name: "Asha Singh",
      id: "1RUB203020",
      exam: "Final Examination",
      marks: "92/100",
      grade: "A+",
      status: "Pass",
    },
    {
      name: "Asha Singh",
      id: "1RUB203020",
      exam: "Final Examination",
      marks: "88/100",
      grade: "A+",
      status: "Pass",
    },
    {
      name: "Asha Singh",
      id: "1RUB203020",
      exam: "Final Examination",
      marks: "32/100",
      grade: "F",
      status: "Fail",
    },
  ];

  const courseOptions = ["Computer Science", "Information Technology", "Electronics", "Mechanical Engineering"];
  const semesterOptions = ["Sem I", "Sem II", "Sem III", "Sem IV", "Sem V", "Sem VI"];
  const sectionOptions = ["Section A", "Section B", "Section C", "Section D"];
  const subjectOptions = ["Web Development", "Data Structures", "Database Management", "Software Engineering"];
  const reportTypeOptions = ["Attendance", "Assignments", "Exams"];
  const examTypeOptions = ["All Exams", "Mid Term", "Final Examination", "Class Test"];

  return (
    <section className="w-full mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col">
        <header className="top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            Reports
          </h1>
        </header>
      </div>

      <div className="bg-[#FAFCFD] border-[#FAFCFD] border-[12px] p-[24px] gap-[24px] rounded-[12px] ">
        <div className="flex flex-row justify-between  ">
          <h2 className="font-[Inter] font-semibold text-[20px] leading-[28px] text-[#1F1D1D]">
            Student Performance Reports
          </h2>
          <div className="flex flex-row gap-5">
            <button className="rounded-[8px] border border-[#1F1D1D] px-4 py-2 gap-[4px] flex items-center justify-center ">
              <Printer className="w-4 h-4 text-[#717171]" />
              <span className="font-[Inter] text-[#1F1D1D]"> Print</span>
            </button>
            <button className="rounded-[8px] border border-[#1F1D1D] px-4 py-2 gap-[4px] flex items-center justify-center">
              <FileSpreadsheet className="w-4 h-4 text-[#717171]" />
              <span className="font-[Inter] text-[#1F1D1D]">Excel</span>
            </button>
            <button className="rounded-[8px] border border-[#1F1D1D] px-4 py-2 gap-[4px] flex items-center justify-center">
              <Upload className="w-4 h-4 text-[#717171]" />
              <span className="font-[Inter] text-[#1F1D1D]">PDF</span>
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-[23px] mt-8">
          {/* Course Dropdown */}
          <div className="flex flex-col gap-1">
            <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171]">
              Course
            </label>
            <div className="w-[195px]">
              <Dropdown
                options={courseOptions}
                selected={selectedCourse}
                onSelect={setSelectedCourse}
                placeholder="Select Course"
                className=" rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
          </div>

          {/* Semester Dropdown */}
          <div className="flex flex-col gap-1">
            <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171]">
              Semester
            </label>
            <div className="w-[175px]">
              <Dropdown
                options={semesterOptions}
                selected={selectedSemester}
                onSelect={setSelectedSemester}
                placeholder="Select Semester"
                className=" rounded-tl-[12px]  rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
          </div>

          {/* Section Dropdown */}
          <div className="flex flex-col gap-1">
            <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171]">
              Section
            </label>
            <div className="w-[175px]">
              <Dropdown
                options={sectionOptions}
                selected={selectedSection}
                onSelect={setSelectedSection}
                placeholder="Select Section"
                className=" rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
          </div>

          {/* Subject Dropdown */}
          <div className="flex flex-col  gap-1">
            <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171]">
              Subject
            </label>
            <div className="w-[195px]">
              <Dropdown
                options={subjectOptions}
                selected={selectedSubject}
                onSelect={setSelectedSubject}
                placeholder="Select Subject"
                className=" rounded-tl-[12px]  rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
          </div>

          {/* Report Type Dropdown */}
          <div className="flex flex-col gap-1">
            <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171]">
              Report Type
            </label>
            <div className="w-[175px]">
              <Dropdown
                options={reportTypeOptions}
                selected={selectedReportType}
                onSelect={(option) => {
                  const value = typeof option === "string" ? option.trim() : option?.value?.trim();
                  setSelectedReportType(value);
                }}
                placeholder="Select Report Type"
                className=" rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
            
          </div>
          
        </div>
          <div className="bg-[#FAFCFD] mt-[26px] gap-[24px] rounded-[12px]">
        <div className="flex flex-row gap-6">
          {selectedReportType === "Attendance" ? (
            <>
              {/* Attendance Statistics Cards */}
              <div className="flex flex-col w-[230px] bg-[#FAFCFD] rounded-[8px] p-[24px] gap-1 shadow-[0px_4px_8px_0px_#0000001F]">
                <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                  Class Average
                </span>
                <span className="font-[Inter] font-bold text-[16px] leading-[24px] text-[#1F1D1D]">
                  82.3%
                </span>
              </div>
              
              <div className="flex flex-col w-[233px] bg-[#FAFCFD] rounded-[8px] p-[24px] gap-1 shadow-[0px_4px_8px_0px_#0000001F]">
                <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                  Highest Attendance
                </span>
                <div className="flex flex-row gap-3">
                  <span className="font-[Inter] font-bold text-[16px] leading-[24px] text-[#1F1D1D]">
                    93%
                  </span>
                  <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                    Asha Singh
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col w-[233px] bg-[#FAFCFD] rounded-[8px] p-[24px] gap-1 shadow-[0px_4px_8px_0px_#0000001F]">
                <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                  Students at Risk
                </span>
                <span className="font-[Inter] font-bold text-[16px] leading-[24px] text-[#FF0000]">
                  1
                </span>
              </div>
              
              <div className="flex flex-col w-[233px]">
                {/* Empty card */}
              </div>
            </>
          ) : (
            <>
              {/* Exam Statistics Cards */}
              <div className="flex flex-col w-[230px] bg-[#FAFCFD] rounded-[8px] p-[24px] gap-1 shadow-[0px_4px_8px_0px_#0000001F]">
                <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                  Average Score
                </span>
                <span className="font-[Inter] font-bold text-[16px] leading-[24px] text-[#1F1D1D]">
                  76.1%
                </span>
              </div>
              
              <div className="flex flex-col w-[233px] bg-[#FAFCFD] rounded-[8px] p-[24px] gap-1 shadow-[0px_4px_8px_0px_#0000001F]">
                <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                  Highest Score
                </span>
                <div className="flex flex-row gap-3">
                  <span className="font-[Inter] font-bold text-[16px] leading-[24px] text-[#1F1D1D]">
                    92%
                  </span>
                  <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                    Asha Singh
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col w-[233px] bg-[#FAFCFD] rounded-[8px] p-[24px] gap-1 shadow-[0px_4px_8px_0px_#0000001F]">
                <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                  Pass Rate
                </span>
                <span className="font-[Inter] font-bold text-[16px] leading-[24px] text-[#10B981]">
                  67%
                </span>
              </div>
              
              <div className="flex flex-col w-[233px]">
                {/* Empty card */}
              </div>
            </>
          )}
        </div>
      </div>

        {/* Attendance Report Section */}
        {selectedReportType.trim().toLowerCase() === "attendance" && (
          <div className="mt-6">
           {selectedReportType === "Attendance" && (
          <div className="bg-[#FAFCFD] border-[#FAFCFD] -ml-[25px]  pl-[25px] pt-[24px] gap-[24px] rounded-[12px]">
            <div className="flex flex-col gap-[24px]">
              {/* Attendance Report Header with Search */}
              <div className="flex flex-row justify-between gap-5 items-center">
                <h3 className="font-[Inter] font-semibold text-[18px] leading-[24px] text-[#1F1D1D]">
                  Attendance Report
                  
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="w-[280px] h-[40px] ml-4 border border-[#E5E5E5] rounded-[8px] px-4 pr-10 py-2 font-[Inter] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#717171]" />
                </div>
              </div>
              
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-12 border-b p-[20px] border-[#71717166] items-center">
                <div className="flex flex-row font-[Inter] font-medium text-[14px] text-[#717171]">
                  Student Name <ArrowDownUp className="w-4 h-4 text-[#717171] ml-2 mt-1" />
                </div>
                <div className="font-[Inter] font-medium text-[14px] text-[#717171] text-center">Total Classes</div>
                <div className="font-[Inter] font-medium text-[14px] text-[#717171] text-center">Attended</div>
                <div className="flex flex-row justify-center font-[Inter] font-medium text-[14px] text-[#717171]">
                  Percentage <ArrowDownUp className="w-4 h-4 text-[#717171] ml-2 mt-1" />
                </div>
                <div className="font-[Inter] font-medium text-[14px] text-[#717171] text-center">Status</div>
              </div>
              
              {/* Table Rows */}
              <div className="flex flex-col">
                {studentData.map((student) => (
                  <div key={student.id} className="grid grid-cols-5 gap-20 py-[20px] px-[19px] border-b border-[#71717166] items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#E5E5E5] rounded-full flex items-center justify-center">
                        <span className="text-[12px] font-medium text-[#717171]">{student.initials}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-[Inter] font-medium text-[14px] text-[#1F1D1D]">{student.name}</span>
                        <span className="font-[Inter] font-normal text-[12px] text-[#717171]">{student.rollNumber}</span>
                      </div>
                    </div>
                    <div className="font-[Inter] font-normal text-[14px] text-[#1F1D1D] text-center">{student.totalClasses}</div>
                    <div className="font-[Inter] font-normal text-[14px] text-[#1F1D1D] text-center">{student.attended}</div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-[100px] h-2 bg-[#E5E5E5] rounded">
                        <div className={`w-[${student.percentage}%] h-full rounded`} style={{width: `${student.percentage}%`, backgroundColor: student.progressColor}}></div>
                      </div>
                      <span className="font-[Inter] font-medium text-[14px] text-[#1F1D1D]">{student.percentage}%</span>
                    </div>
                    <div className="font-[Inter] font-medium text-[14px] text-center" style={{color: student.statusColor}}>{student.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
          </div>
        )}

        {/* Exam Report Section */}
        {selectedReportType.trim().toLowerCase() === "exams" && (
          <div className="mt-6">
            {selectedReportType === "Exams" && (
         <div className=" py-10 flex flex-col  rounded-md">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-[20px] font-semibold text-[#1F1D1D] font-inter ">
          Exam Report
        </h2>
        <div className="flex items-center gap-6">
          {/* Search Box */}
          <div className="flex items-center gap-2 px-3 py-2 border border-[#71717166] rounded-md w-[256px]">
            <Search className="w-4 h-4 text-[#717171]" />
            <input
              type="text"
              placeholder="Search students..."
              className="text-[14px] placeholder-[#717171] bg-transparent outline-none w-full"
            />
          </div>
          {/* Dropdown */}
          {/* <div className="flex justify-between items-center px-4 py-3 border border-[#71717166] rounded-xl w-[180px]">
            <span className="text-sm text-[#1F1D1D]">All exams</span>
            <ChevronDown className="w-4 h-4" />
          </div> */}
          <div className="w-[180px]">
  <Dropdown
    options={examTypeOptions}
    selected={selectedExamType}
    onSelect={(option) => setSelectedExamType(option)}
    placeholder="Select Exam"
    className="rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[14px] border-[#E5E5E5] px-[16px] py-[12px]"
  />
</div>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-[#FFFFFF] border-b border-[#717171] px-4 py-4 flex items-center gap-[130px]">
        <div className="flex items-center gap-20 text-[#717171] text-[14px] font-medium w-full">
          <div className="flex items-center gap-2 w-[280px]">
            Student Name
            <div className="flex flex-col">
              <ArrowDownUp className="w-[14px] h-[14px]" />
              {/* <ChevronDown className="w-[14px] h-[14px] -mt-1" /> */}
            </div>
          </div>
          <div className="w-[150px]">Exam</div>
          <div className="w-[80px]">Marks</div>
          <div className="w-[60px]">Grade</div>
          <div className="w-[60px]">Status</div>
        </div>
      </div>

      {/* Data Rows */}
      {examData.map((student, index) => (
        <div
          key={index}
          className="bg-[#FFFFFF] px-4 py-4 border-b border-[#7171714D] flex items-center gap-[130px]"
        >
          <div className="flex items-center gap-20 w-full">
            {/* Student Info */}
            <div className="flex items-center gap-3 w-[280px]">
              <div className="w-8 h-8 rounded-full bg-[#71717166] flex items-center justify-center text-[#FFFFFF] text-[14px] font-semibold">
                K
              </div>
              <div>
                <div className="text-[14px] font-medium text-[#1F1D1D]">
                  {student.name}
                </div>
                <div className="text-[12px] text-[#717171]">{student.id}</div>
              </div>
            </div>

            {/* Exam Details */}
            <div className="w-[150px] text-[14px] text-[#1F1D1D]">
              {student.exam}
            </div>
            <div className="w-[80px] text-[14px] text-[#1F1D1D]">
              {student.marks}
            </div>
            <div className="w-[60px] text-[14px] text-[#1F1D1D]">
              {student.grade}
            </div>
            <div className="w-[60px]">
              <span
                className={`text-[12px] font-medium px-2 py-1 rounded ${
                  student.status === "Pass"
                    ? "bg-[#ECFDF7] text-[#10B981]"
                    : "bg-[#FEF2F2] text-[#EF4444]"
                }`}
              >
                {student.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

      )}
      </div>
        )}
      </div>
    </section>
  );
};

export default Report;
