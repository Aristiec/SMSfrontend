import React from "react";
import { CheckCircle, Mail, Phone } from "lucide-react";
import profilePic from "../../../../assets/headerBG.png";

const StudentInfoCard = ({ student }) => (
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

    <div className="grid grid-cols-3 gap-4 mt-2 pt-2 ml-10">
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
  </div>
);
export default StudentInfoCard;
