import React, { useState } from "react";
import { Download, GraduationCap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const currentResults = [
  {
    title: "Data Structures and Algorithms",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:false
  },
  
  {
    title: "Operating Systems",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:true
  },
  {
    title: "Database Management System",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:false
  },
  {
    title: "Computer Networks",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:false
  },
  {
    title: "Software Engineering",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:false
  },
  {
    title: "Artificial Intelligence",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:false
  },
  {
    title: "Web Development",
    subject: "Mid-Term",
    date: "Jan 15, 2024",
    score: "87/100 (87.0%)",
    grade: "A",
    status: "Pass",
    recheck:false
  },
];

const Results = () => {
  const [activeSemester, setActiveSemester] = useState("Sem 8");
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();


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

  const handleButtonClick = (result,index) => {
    
    if(result.recheck){
      navigate("recheckStatus",{state:{result:result}})
    }
    else{
      navigate("recheck",{state:{result:result}})
    }

  };

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-6 mt-4">
        {/* Header */}
        <div className="sticky top-20 bg-[#04203E] h-[68px] text-[#FAFCFD] p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <GraduationCap className="w-6 h-6" />
            <h1 className="text-[24px] font-semibold font-[Merriweather]">
              Results
            </h1>
          </div>
          <button className="bg-[#FAFCFD] h-[40px] text-[12px] text-[#04203E] px-4 py-2 rounded-lg flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Report Card
          </button>
        </div>

        {/* Semester Selection */}
        <div className="flex items-center gap-[16px] px-[24px] py-[12px] rounded-[8px] shadow-sm bg-[#FAFCFD]">
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
                className={`text-[14px] font-[400] leading-[24px] ${
                  activeSemester === sem ? "text-[#FAFCFD]" : "text-[#04203E]"
                }`}
              >
                {sem}
              </span>
            </div>
          ))}
        </div>

        {/*  Results Section */}
        <div className="space-y-4">
          {currentResults.map((result, index) => (
            <div
              key={index}
              className="bg-[#FAFCFD] p-6 rounded-lg border border-[#FAFCFD]"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-[2px]">
                    <h3 className="text-[16px] font-[500] leading-[24px] text-[#1F1D1D]">
                      {result.title}
                    </h3>
                  </div>
                  <p className="text-[#1F1D1D] text-[14px] font-[400] leading-[24px] mb-[10px]">
                    {result.subject}
                  </p>

                  <div className="flex flex-wrap gap-6 text-[12px] text-[#1F1D1D]">
                    <div>Date: {result.date}</div>
                    <div>Score: {result.score}</div>
                    <div className="font-[500]">Grade: {result.grade}</div>
                  </div>
                </div>

                {/* Status and Button */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium text-[12px]">
                      {result.status}
                    </span>
                  </div>

                  <button
                    onClick={() => handleButtonClick(result,index)}
                    className={`h-[40px] w-[145px] text-[14px] leading-[24px] font-['Inter'] font-[400] text-center flex items-center justify-center rounded-[8px] border mt-8 ${
                      result.recheck === false
                        ? "bg-[#04203E] text-[#FAFCFD] border-[#04203E]"
                        : "bg-white text-[#04203E] border-[#04203E]"
                    }`}
                  >
                    {result.recheck === true ? "Recheck Status" : "Apply for Recheck"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  content */}
        <div className="h-[200px] flex flex-col gap-[10px]">
          <div className="bg-[#CFDCEB] h-[176px] gap-[12px] p-[12px] rounded-[8px]">
            <div className="h-[18px] font-[Inter] font-[500] text-[12px] leading-[18px] mb-[8px]">
              Exam Recheck Policy
            </div>

            <ul className="h-[122px] flex flex-col gap-[8px] list-disc pl-[16px] font-[Inter] font-[400] text-[12px] leading-[18px]">
              <li>
                Recheck requests must be submitted within 10 days after the exam
                results are published.
              </li>
              <li>
                A processing fee of ₹500 will be applied to your student account
                if the recheck request is approved.
              </li>
              <li>
                Supporting documents are optional but may help in the assessment
                of your request.
              </li>
              <li>
                Recheck results will be communicated within 5-7 working days
                after submission.
              </li>
              <li>The decision of the examination committee is final.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
