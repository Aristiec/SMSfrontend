import React, { useState } from "react";
import {
  Calendar,
  Clock,
  GraduationCap,
  FileText,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const UpcomingExams = ({ exams, selectedType, onTypeChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const examTypes = [
    "Formative",
    "Summative",
    "Lab",
    "Viva",
    "Quiz",
    "Backlog",
  ];

  const handleFilterChange = (examType) => {
    setSelectedFilters((prev) =>
      prev.includes(examType)
        ? prev.filter((type) => type !== examType)
        : [...prev, examType]
    );
  };

  const filteredExams =
    selectedFilters.length === 0
      ? exams
      : exams.filter(
          (exam) =>
            selectedFilters.includes(exam.type) ||
            (selectedFilters.includes("Backlog") && exam.backlog)
        );
  return (
    <div className="bg-[#FAFCFD] rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-4">
        <div className="flex space-x-6">
          <button
            className={`pb-2 border-b-2 font-medium font-[Inter] text-sm flex items-center space-x-2 ${
              selectedType === "upcoming"
                ? "border-[#1F1D1D] text-[#1F1D1D]"
                : "border-transparent text-[#717171]"
            }`}
            onClick={() => onTypeChange("upcoming")}
          >
            <Clock className="w-4 h-4" />
            <span>Upcoming</span>
          </button>
          <button
            className={`pb-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              selectedType === "completed"
                ? "border-slate-800 text-slate-800"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => onTypeChange("completed")}
          >
            <GraduationCap className="w-5 h-5" />
            <span>Completed</span>
          </button>
        </div>

        <div className="relative">
          <button
            className="text-sm border border-[#1F1D1D] rounded-lg px-3 py-2 bg-[#FAFCFD] flex items-center space-x-2 min-w-[150px]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="font-[Inter] text-[#1F1D1D]">
              Select Exam Type
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-1 right-0 bg-[#FAFCFD] border border-gray-200 rounded-lg shadow-lg z-10 w-full">
              <div className="p-2 space-y-1">
                {examTypes.map((type) => (
                  <div
                    key={type}
                    onClick={() => {
                      handleFilterChange(type);
                      setIsDropdownOpen(false);
                    }}
                    className="cursor-pointer px-3 py-2 text-sm text-[#000000] hover:bg-[#04203E] hover:text-[#FAFCFD] rounded"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {exams.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#F4F7FA] font-[Inter] rounded-full flex items-center shadow-lg justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-[#0077FF]" />
            </div>

            <h3 className="text-lg font-semibold font-[Inter] text-[#1F1D1D] mb-2">
              {selectedType === "upcoming"
                ? "No Upcoming Exams"
                : "No Completed Exams"}
            </h3>
            <p className="text-[#717171] font-[Inter] text-sm max-w-md mx-auto mb-6 ">
              {selectedType === "upcoming"
                ? "There are no exams scheduled at the moment. Use this time to focus on your coursework or complete pending assignments."
                : "You haven't completed any exams yet. Check back after taking your first exam."}
            </p>

            {selectedType === "upcoming" && (
              <div className="flex justify-center space-x-3">
                <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center space-x-2">
                  <span>📚</span>
                  <span>Study Resources</span>
                </button>
                <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center space-x-2">
                  <span>📝</span>
                  <span>Go to Assignments</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exams.map((exam, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-[#1F1D1D] text-[16px] font-[Inter]">
                    {exam.title}
                  </h3>
                  {exam.backlog && (
                    <span className="bg-[#FEF2F2] text-[#EF4444] font-[Inter] text-xs px-2 py-1 rounded-full font-medium">
                      Backlog
                    </span>
                  )}
                </div>

                <p className="text-[#1F1D1D] text-[14px] font-[Inter] font-medium mb-3">
                  {exam.subject}
                </p>

                <div className="space-y-2 text-sm text-[#717171] font-[Inter] font-normal mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="">{exam.duration} minutes</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{exam.questions} questions</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{exam.type}</span>
                    </div>
                    <span>{exam.marks} marks</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 border-t pt-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-[#1F1D1D]" />
                    <span className="text-[#1F1D1D] font-[Inter]">
                      {exam.date}
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      exam.status === "Starting soon"
                        ? "bg-[#FFF4ED] text-[#F97316]"
                        : exam.status === "Completed"
                        ? "bg-[#ECFDF7] text-[#10B981]"
                        : "text-[#1F1D1D]"
                    }`}
                  >
                    {exam.status}
                  </span>
                </div>

                {selectedType === "upcoming" ? (
                  <button className="w-full bg-[#04203E] text-[#FAFCFD] py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Set Reminder</span>
                  </button>
                ) : exam.status === "Completed" && exam.resultAvailable ? (
                  <button className="w-full bg-[#04203E] text-[#FAFCFD] font-[Inter] py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2">
                    <span>View Result</span>
                  </button>
                ) : (
                  <button className="w-full bg-[#CFDCEB] text-[#717171] font-[Inter] py-2 rounded-lg font-medium cursor-not-allowed flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Awaiting Result</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingExams;
