import React from "react";
import { CheckCircle, Mail, Phone } from "lucide-react";
import profilePic from "../../../../assets/headerBG.png";
import { useNavigate } from "react-router-dom";

const StudentInfo = ({ student }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/student/admit");
  };
  return (
    <div className="bg-[#FAFCFD] rounded-lg p-6 shadow-sm ">
      <div className="flex items-center space-x-4">
        <img
          src={profilePic}
          alt={student.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-[16px] font-bold font-[Inter] text-[#1F1D1D]">
            {student.name}
          </h3>
          <p className="text-[14px] font-[Inter] text-[#1F1D1D] mt-2">
            Student ID: {student.id}
          </p>
          <div className="flex items-center space-x-4 mt-2 text-[12px] font-medium text-[#1F1D1D] font-[Inter]">
            <span>Program: {student.program}</span>
            <span>Semester: {student.semester}</span>
          </div>
          <div className="flex items-center space-x-6 mt-3">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span className="text-[14px] text-[#717171] font-[Inter]">
                {student.email}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span className="text-[14px] text-[#717171] font-[Inter]">
                {student.phone}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 mt-2 pt-2 ml-10">
        <div className="text-center">
          <div className="text-[16px] font-[Inter] font-bold text-[#1F1D1D]">
            {student.attendance}%
          </div>
          <div className="text-[12px] text-[#1F1D1D] font-[Inter]">
            Attendance
          </div>
        </div>
        <div className="text-center">
          <div className="text-[16px] font-[Inter] font-bold text-[#1F1D1D]">
            {student.gpa}
          </div>
          <div className="text-[12px] text-[#1F1D1D] font-[Inter]">GPA</div>
        </div>
        <div className="text-center">
          <div className="text-[16px] font-[Inter] font-bold text-[#1F1D1D]">
            {student.examsLeft}
          </div>
          <div className="text-[12px] text-[#1F1D1D] font-[Inter]">
            Exams Left
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-[#ECFDF7] border border-[#ECFDF7] rounded-lg">
        <div className="flex items-center space-x-2">
          <CheckCircle className="w-4 h-4 text-[#10B981]" />
          <span className="text-[14px] font-[Inter] text-[#10B981]">
            You are eligible to appear for this exam
          </span>
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={handleRedirect}
          className="w-full flex items-center justify-center gap-2 bg-[#04203E] text-[#FAFCFD] font-[Inter] px-5 py-3 rounded-lg text-[14px] font-[Inter] hover:bg-[#031a32] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
            />
          </svg>
          Download Admit Card
        </button>
      </div>
    </div>
  );
};
export default StudentInfo;
