import React from "react";
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

const previousSemesters = [
  {
    semester: "Spring 2023",
    cgpa: "3.7",
    credits: "15",
  },
];

const Results = () => {
  return (
    <div className="max-w-[1440px] mt-[20px] mx-[20px] space-y-[20px]">
      {/* Header Section */}
      <div className="bg-[#04203E] h-[68px] text-[#FAFCFD] p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
          <h1 className="text-[24px] font-semibold font-[Merriweather]">
            Results
          </h1>
        </div>
        <button className="bg-[#FAFCFD] h-[40px] font-[Inter] text-[12px] text-[#04203E] px-4 py-2 rounded-lg flex items-center gap-2 ">
          <Download className="w-4 h-4" />
          Download Report Card
        </button>
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
                <span className="font-medium text-[12px]">{result.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Semesters Section */}
      <div className="space-y-4">
        <div className="bg-[#04203E] text-[#FAFCFD] p-4 rounded-lg flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Previous Semesters</h2>
        </div>

        <div className="space-y-4">
          {previousSemesters.map((semester, index) => (
            <div
              key={index}
              className="bg-[#FAFCFD] p-6 rounded-lg border border-[#FAFCFD]"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-[#1F1D1D] text-[14px] mb-[4px]">
                    {semester.semester}
                  </p>

                  <div className="flex flex-wrap gap-1 text-[12px] text-[#1F1D1D]">
                    <div className="flex items-center gap-1">
                      <span>CGPA: {semester.cgpa}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Dot className="w-4 h-4" />
                      <span>Credits: {semester.credits}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="bg-[#04203E] h-[44px] text-[#FAFCFD] px-4 py-2 rounded-lg flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span className="font-medium text-[12px]">
                      Download Report
                    </span>
                  </button>
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
