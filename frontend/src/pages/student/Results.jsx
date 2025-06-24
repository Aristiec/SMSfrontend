import React, { useState } from "react";
import {
  Download,
  GraduationCap,
  Calendar,
  CheckCircle,
  Dot,
} from "lucide-react";

const currentResults = [
  {
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
  },
  {
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
  },
  {
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
  },
  {
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
  },
];

const Results = () => {
  const [activeSemester, setActiveSemester] = useState("Sem 8");

  const semesters = [
    "Sem 8",
    "Sem 7",
    "Sem 6",
    "Sem 5",
    "Sem 4",
    "Sem 3",
    "Sem 2",
    "Sem 1",
  ];

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-4 mt-4">
        {/* Header Section */}
        <div className="bg-[#04203E] h-[68px] text-[#FAFCFD] p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            <h1 className="text-[24px] font-semibold font-[Merriweather]">
              Resultss
            </h1>
          </div>
          <button className="bg-[#FAFCFD] h-[40px] font-[Inter] text-[12px] text-[#04203E] px-4 py-2 rounded-lg flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Report Card
          </button>
        </div>

        {/* Semester Selection */}
        <div
          className="flex items-center gap-[16px] px-[24px] py-[12px] rounded-[8px] shadow-sm"
          style={{
            background: "#FAFCFD",
            boxShadow: "0px 0px 8px 0px #0000001F",
          }}
        >
          {semesters.map((sem) => (
            <div
              key={sem}
              onClick={() => setActiveSemester(sem)}
              className={`w-[66px] h-[40px] flex items-center justify-center rounded-[8px] cursor-pointer ${
                activeSemester === sem
                  ? "bg-[#04203E]"
                  : "bg-white border border-[#04203E]"
              }`}
            >
              <span
                className={`text-[14px] font-[400] leading-[24px] font-[Inter] ${
                  activeSemester === sem ? "text-[#FAFCFD]" : "text-[#04203E]"
                }`}
              >
                {sem}
              </span>
            </div>
          ))}
        </div>

        {/* Current Results Section */}
        <div className="space-y-4">
          {currentResults.map((result, index) => (
            <div
              key={index}
              className="bg-[#FAFCFD] p-6 rounded-lg border border-[#FAFCFD]"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-[2px]">
                    <h3 className="text-[16px] font-medium text-[#1F1D1D]">
                      Subject
                    </h3>
                  </div>
                  <p className="text-[#1F1D1D] text-[14px] mb-[24px]">
                    {result.subject}
                  </p>

                  <div className="flex flex-wrap gap-6 text-[12px] text-[#1F1D1D]">
                    <div className="flex items-center gap-1">
                      <span>Date: {result.date}</span>
                    </div>
                    <div>
                      <span>Score: {result.score}</span>
                    </div>
                    <div>
                      <span>Grade: {result.grade}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#10B981]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium text-[12px]">
                    {result.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
