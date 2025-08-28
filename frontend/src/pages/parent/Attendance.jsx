
import React, { useState, useEffect } from "react";
import { Calendar, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState({
    overall: {
      percentage: 86.0,
      attended: 271,
      total: 315,
      missed: 44
    },
    alerts: [
      { subject: "Operating Systems", percentage: 74, status: "Low" },
      { subject: "Database Management System", percentage: 72.9, status: "Low" }
    ],
    subjects: [
      {
        subject: "Data Structures and Algorithms",
        attended: 44,
        total: 50,
        missed: 6,
        percentage: 88.0,
        status: "Excellent"
      },
      {
        subject: "Operating Systems", 
        attended: 38,
        total: 45,
        missed: 7,
        percentage: 84.4,
        status: "Good"
      },
      {
        subject: "Database Management System",
        attended: 40,
        total: 45,
        missed: 5,
        percentage: 88.9,
        status: "Good"
      },
      {
        subject: "Computer Networks",
        attended: 35,
        total: 40,
        missed: 5,
        percentage: 87.5,
        status: "Good"
      },
      {
        subject: "Software Engineering",
        attended: 42,
        total: 45,
        missed: 3,
        percentage: 93.3,
        status: "Excellent"
      },
      {
        subject: "Artificial Intelligence",
        attended: 36,
        total: 45,
        missed: 9,
        percentage: 80.0,
        status: "Good"
      },
      {
        subject: "Web Development",
        attended: 36,
        total: 45,
        missed: 9,
        percentage: 80.0,
        status: "Good"
      }
    ]
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent":
        return "text-[#10B981]";
      case "Good":
        return "text-[#059669]";
      case "Poor":
        return "text-[#F59E0B]";
      case "Critical":
        return "text-[#EF4444]";
      default:
        return "text-[#6B7280]";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "Excellent":
        return "bg-[#ECFDF5]";
      case "Good":
        return "bg-[#ECFDF5]";
      case "Poor":
        return "bg-[#FFFBEB]";
      case "Critical":
        return "bg-[#FEF2F2]";
      default:
        return "bg-[#F9FAFB]";
    }
  };

  return (
    <main className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 font-[Inter]">
      <div className="flex flex-col px-2 gap-[32px] mt-4">
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overall Attendance Card */}
          <div className="bg-[#FAFCFD] rounded-[12px] p-6 shadow-lg">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
                <Calendar className="w-[22px] h-[22px] text-[#04203E]" />
              </div>
              <div className="text-[#1F1D1D] font-semibold text-[16px]">
                Overall Attendance
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="font-bold text-[#1F1D1D] text-[24px] leading-[40px]">
                {attendanceData.overall.percentage}%
              </div>
              <div className="w-full bg-gray-200 rounded-[4px] h-[8px] overflow-hidden">
                <div
                  className="h-full bg-[#04203E]"
                  style={{ width: `${attendanceData.overall.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Classes Attended Card */}
          <div className="bg-[#FAFCFD] rounded-[12px] p-6 shadow-lg">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#ECFDF7] flex items-center justify-center">
                <CheckCircle className="w-[22px] h-[22px] text-[#10B981]" />
              </div>
              <div className="text-[#1F1D1D] font-semibold text-[16px]">
                Classes Attended
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-baseline">
                <span className="text-[#027A48] font-bold text-[24px] leading-[40px]">
                  {attendanceData.overall.attended}
                </span>
                <span className="text-[#1F1D1D] text-[14px]">
                  of {attendanceData.overall.total} classes
                </span>
              </div>
              <div className="text-[#1F1D1D] text-[12px]">
                {attendanceData.overall.percentage}% of total classes
              </div>
            </div>
          </div>

          {/* Classes Missed Card */}
          <div className="bg-[#FAFCFD] rounded-[12px] p-6 shadow-lg">
            <div className="flex gap-3 items-center mb-4">
              <div className="w-[44px] h-[44px] rounded-full bg-[#FEF2F2] flex items-center justify-center">
                <XCircle className="w-[22px] h-[22px] text-[#EF4444]" />
              </div>
              <div className="text-[#1F1D1D] font-semibold text-[16px]">
                Classes Missed
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-baseline">
                <span className="text-[#EF4444] font-bold text-[24px] leading-[40px]">
                  {attendanceData.overall.missed}
                </span>
                <span className="text-[#1F1D1D] text-[14px]">
                  of {attendanceData.overall.total} classes
                </span>
              </div>
              <div className="text-[#1F1D1D] text-[12px]">
                {(100 - attendanceData.overall.percentage).toFixed(1)}% of total classes
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Alerts */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div className="bg-[#04203E] text-white px-6 py-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Attendance Alerts</h3>
          </div>
          
          <div className="p-6">
            <div className="text-[#1F1D1D] text-[14px] mb-4">
              Detailed breakdown of your son's attendance in each subject
            </div>
          
            <div className="space-y-3">
              {attendanceData.alerts.map((alert, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between"
                  style={{
                    gap: '8px',
                    opacity: 1,
                    paddingTop: '12px',
                    paddingRight: '24px',
                    paddingBottom: '12px',
                    paddingLeft: '24px',
                    borderRadius: '8px',
                    background: '#FAFCFD',
                    boxShadow: '0px 4px 8px 0px #0000001F'
                  }}
                >
                  <div className="text-[#1F1D1D] font-medium text-[14px]">
                    {alert.subject}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#FEF3C7] text-[#F59E0B] font-medium text-[12px] rounded-full border border-[#F59E0B]">
                      {alert.status}
                    </span>
                    <span className="text-[#1F1D1D] font-bold text-[14px]">
                      {alert.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 rounded-[8px]">
              <div className="text-[#1F1D1D] text-[12px] font-medium">
                <span className="font-semibold">Note:</span> Minimum required attendance is 75%. 
                Please contact your class teacher if you need to discuss your attendance.
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Attendance Table */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header */}
          <div 
            className="flex justify-start items-center"
            style={{
              opacity: 1,
              paddingTop: '12px',
              paddingRight: '24px',
              paddingBottom: '12px',
              paddingLeft: '24px',
              borderRadius: '12px 12px 0 0',
              background: '#04203E'
            }}
          >
            <h2 className="text-white text-xl font-semibold">Subject - wise Attendance</h2>
          </div>
          
          <div className="p-6">
            <div className="text-[#717171] text-[14px] mb-6">
              Detailed breakdown of your son's attendance in each subject
            </div>

            <div className="overflow-x-auto">
              {/* Table Headers */}
              <div className="grid grid-cols-5 gap-6 pb-4 mb-4 border-b border-[#E5E7EB]">
                <div className="text-left font-semibold text-[#717171] text-[14px] px-4">
                  Subject
                </div>
                <div className="text-center font-semibold text-[#717171] text-[14px] px-4">
                  Classes Attended
                </div>
                <div className="text-center font-semibold text-[#717171] text-[14px] px-4">
                  Classes Missed
                </div>
                <div className="text-center font-semibold text-[#717171] text-[14px] px-4">
                  Attendance
                </div>
                <div className="text-center font-semibold text-[#717171] text-[14px] px-4">
                  Status
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-3">
                {attendanceData.subjects.map((subject, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-5 items-center gap-6"
                    style={{
                      opacity: 1,
                      paddingTop: '16px',
                      paddingRight: '12px',
                      paddingBottom: '16px',
                      paddingLeft: '12px',
                      borderRadius: '8px',
                      background: '#FAFCFD',
                      boxShadow: '0px 4px 8px 0px #0000001F'
                    }}
                  >
                    <div className="text-[#1F1D1D] font-medium text-[14px] px-4">
                      {subject.subject}
                    </div>
                    <div className="text-[#1F1D1D] font-semibold text-[14px] text-center px-4">
                      {subject.attended} / {subject.total}
                    </div>
                    <div className="text-[#1F1D1D] font-semibold text-[14px] text-center px-4">
                      {subject.missed}
                    </div>
                    <div className="text-[#1F1D1D] font-semibold text-[14px] text-center px-4">
                      {subject.percentage}%
                    </div>
                    <div className="flex justify-center px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[12px] font-medium ${getStatusBg(
                          subject.status
                        )} ${getStatusColor(subject.status)}`}
                      >
                        {subject.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4  rounded-[8px]">
              <div className="text-[#1F1D1D] text-[14px] font-medium">
                <span className="font-semibold">Note:</span> Minimum required attendance is 75%. 
                Please contact your class teacher if you need to discuss your attendance.
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Attendance;

