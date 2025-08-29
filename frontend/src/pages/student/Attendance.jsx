import React, { useState, useEffect } from "react";
import calendarIcon from "../../assets/calendar.svg";
import progressBar from "../../assets/progressBar.svg";
import checkIcon from "../../assets/completed.svg";
import missedIcon from "../../assets/missedIcon.svg";
import {
  fetchAttendanceStats,
  fetchSubjectwiseAttendance,
} from "../../features/auth/authAPI";
import { CloudAlert } from "lucide-react";
import { mockOverallStats, mockSubjectAttendance } from "../../data/mockAttendance";

const AttendanceTable = () => {
  const [overallStats, setOverallStats] = useState(null);
  const [subjectAttendance, setSubjectAttendance] = useState([]);

  useEffect(() => {
    const getAttendance = async () => {
      try {
        const studentId = localStorage.getItem("studentId");
        
        // If no studentId, use mock data immediately
        if (!studentId) {
          console.log("No studentId found, using mock attendance data");
          setOverallStats(mockOverallStats);
          setSubjectAttendance(mockSubjectAttendance);
          return;
        }

        const [overallRes, subjectwiseRes] = await Promise.all([
          fetchAttendanceStats(studentId),
          fetchSubjectwiseAttendance(studentId),
        ]);

        console.log("subjectwiseRes.data:", subjectwiseRes);

        // Set overall stats from API
        setOverallStats(overallRes.data);

        // Process subject attendance data from API
        const subjectData = subjectwiseRes.data.map((item) => {
          let status = "";
          if (item.attendancePercentage >= 85) status = "Outstanding";
          else if (item.attendancePercentage >= 75) status = "Satisfactory";
          else if (item.attendancePercentage >= 60) status = "Poor";
          else status = "Critical";

          return {
            subject: item.subjectName,
            attended: item.presentLectures,
            total: item.totalLectures,
            missed: item.missedLectures,
            attendance: item.attendancePercentage.toFixed(1),
            status: status,
          };
        });

        setSubjectAttendance(subjectData);
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
        // Fallback to mock data when API fails
        console.log("API failed, using mock attendance data");
        setOverallStats(mockOverallStats);
        setSubjectAttendance(mockSubjectAttendance);
      }
    };

    getAttendance();
  }, []);
  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-6 mt-4">
        {/* Header */}
        <div className="sticky top-20 w-full h-[64px] bg-[#04203E] rounded-[12px] px-[24px] py-[18px] flex items-center">
          <div className="text-white font-bold text-[24px] leading-[28px]">
            Attendance
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            {/* Card 1: Overall Attendance */}
            <div className="flex-1 rounded-[12px] p-[24px] bg-[#FAFCFD] shadow-lg">
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full bg-[#F2F4F7] flex items-center justify-center">
                  <img
                    src={calendarIcon}
                    alt="calendar"
                    className="w-[22px] h-[22px]"
                  />
                </div>
                <div className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px]">
                  Overall Attendance
                </div>
              </div>

              <div className="flex flex-col gap-[10px] mt-4">
                <div className="font-bold text-[#1F1D1D] text-[24px] leading-[36px]">
                  {overallStats
                    ? `${overallStats.attendancePercentage.toFixed(1)}%`
                    : "Loading..."}
                </div>
                <div className="w-full bg-gray-200 rounded-[4px] h-[8px] overflow-hidden">
                  <div
                    className="h-full bg-[#04203E]"
                    style={{
                      width: overallStats
                        ? `${overallStats.attendancePercentage.toFixed(1)}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Card 2: Classes Attended */}
            <div className="flex-1 h-[158px] rounded-[8px] p-[24px] bg-[#FAFCFD] shadow-lg">
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full bg-[#ECFDF7] flex items-center justify-center">
                  <img
                    src={checkIcon}
                    alt="check icon"
                    className="w-[22px] h-[22px]"
                  />
                </div>
                <div className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px]">
                  Classes Attended
                </div>
              </div>

              <div className="flex flex-col gap-[4px] mt-4">
                <div className="flex gap-[8px] items-baseline">
                  <span className="text-[#027A48] font-bold text-[24px] leading-[36px]">
                    {overallStats ? overallStats.presentLectures : "--"}
                  </span>
                  <span className="text-[#1F1D1D] text-[14px] leading-[20px]">
                    of {overallStats ? overallStats.totalLectures : "--"}{" "}
                    classes
                  </span>
                </div>
                <div className="text-[#1F1D1D] text-[12px] leading-[18px]">
                  {overallStats
                    ? `${overallStats.attendancePercentage.toFixed(
                      1
                    )}% of total classes`
                    : ""}
                </div>
              </div>
            </div>

            {/* Card 3: Classes Missed */}
            <div
              className="flex-1 h-[158px] rounded-[8px] p-[24px] bg-[#FAFCFD] shadow-md"
              style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
            >
              <div className="flex gap-[12px] items-center">
                <div className="w-[44px] h-[44px] rounded-full bg-[#FEF2F2] flex items-center justify-center">
                  <img
                    src={missedIcon}
                    alt="missed icon"
                    className="w-[22px] h-[22px]"
                  />
                </div>
                <div className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px]">
                  Classes Missed
                </div>
              </div>

              <div className="flex flex-col gap-[4px] mt-4">
                <div className="flex gap-[8px] items-baseline">
                  <span className="text-[#EF4444] font-bold text-[24px] leading-[36px]">
                    {overallStats ? overallStats.missedLectures : "--"}
                  </span>
                  <span className="text-[#1F1D1D] text-[14px] leading-[20px]">
                    of {overallStats ? overallStats.totalLectures : "--"}{" "}
                    classes{" "}
                  </span>
                </div>
                <div className="text-[#1F1D1D] text-[12px] leading-[18px]">
                  {overallStats
                    ? `${(100 - overallStats.attendancePercentage).toFixed(
                      1
                    )}% of total classes`
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
          className="p-6 bg-[#FAFCFD] font-[Inter] rounded-[12px] w-full  flex flex-col "
        >
          <div className="flex gap-[4px] flex-col justify-center-center">
            <h2 className=" text-[16px] font-bold leading-[28px] tracking-[0] text-[#1F1D1D] ">
              Subject-wise Attendance
            </h2>
            <p className="font-medium text-[12px] leading-[28px] tracking-[0] text-[#1F1D1D]  ">
              Detailed breakdown of your attendance in each subject
            </p>
          </div>

          <div className="overflow-x-hidden flex gap-[12px]">
            <table className="min-w-[99%] my-2 mx-2  ">
              <thead className="font-[Inter]  border-b-1  px-6 py-[8px] font-semibold  text-[14px] leading-[16px] tracking-0  items-center text-left text-[#1F1D1D] min-w-full gap-[12px]">
                <tr className=" ">
                  <th className="p-3 font-semibold ">Subject</th>
                  <th className="p-3 font-semibold ">Classes Attended</th>
                  <th className="p-3 font-semibold ">Classes Missed</th>
                  <th className="p-3 font-semibold ">Attendance</th>
                  <th className="p-3 font-semibold ">Status</th>
                </tr>
              </thead>
              <tbody className="bg-[#FAFCFD]  px-[12px] py-[24px] border-spacing-y-[12px] min-w-full gap-[12px]">
                {subjectAttendance.length > 0 ? (
                  subjectAttendance.map((item, index) => {
                    const statusColor =
                      item.status === "Outstanding"
                        ? "text-[#10B981]"
                        : item.status === "Satisfactory"
                          ? "text-[#04203E]"
                          : item.status === "Poor"
                            ? "text-[#F97316]"
                            : "text-[#EF4444]";

                    return (
                      <tr
                        key={index}
                        style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
                        className="px-[12px] rounded-[12px] py-[24px] align-middle"
                      >
                        <td className="py-3 px-4 font-normal text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle ">
                          {item.subject}
                        </td>
                        <td className="py-3 px-4 font-normal text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle">
                          {item.attended} / {item.total}
                        </td>
                        <td className="py-3 px-4 font-normal text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle">
                          {item.missed}
                        </td>
                        <td className="py-3 px-4 font-normal text-[#1F1D1D] font-[Inter] text-left text-[14px] align-middle">
                          {item.attendance}%
                        </td>
                        <td
                          className={`py-3 text-[11px] sm:text-[14px] font-[Inter] font-medium ${statusColor}`}
                        >
                          {item.status}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  // <tr>
                  //   <td colSpan="5">Loading...</td>
                  // </tr>
                  <tr>
                    <td colSpan="5">
                    <div className="flex flex-col items-center gap-3 ">
                      <div className="w-[72px] h-[72px] rounded-full bg-[#F5FAFF] flex flex-col items-center justify-center shadow-lg gap-3 p-5 mt-" >

                        <CloudAlert size={40} color="#2196F3" />
                      </div>
                      <span className="font-inter font-[600] text-[16px] leading-[24px] text-center">
                        No Attendance Record Found!
                      </span>

                      <button
                        // onClick={() => navigate("/student/tdetailss")}
                        className="w-[200px] h-[40px] rounded-[8px] px-[12px] py-[8px] bg-[#04203E] flex items-center justify-center font-inter font-semibold text-[14px] leading-[24px] tracking-[0] text-white text-center"
                        type="button"
                      >
                        Please Contact the Admin
                      </button>

                    </div>
                    </td>
                   
                  </tr>

                )}
              </tbody>
            </table>
          </div>

          <p className="text-xs font-[Inter] text-[#1F1D1D] mt-3 font-[500px] flex gap-1 items-center  ">
            <strong className="font-[700px]">Note:</strong> Minimum required
            attendance is 75%. Please contact your class teacher if you need to
            discuss your attendance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTable;
