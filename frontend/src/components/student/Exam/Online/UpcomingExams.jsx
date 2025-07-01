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
  const [selectedFilter, setSelectedFilter] = useState(null);

  const examTypes = [
    "Formative",
    "Summative",
    "Lab",
    "Viva",
    "Quiz",
    "Backlog",
  ];

  const handleFilterChange = (examType) => {
    setSelectedFilter((prev) => (prev === examType ? null : examType));
    setIsDropdownOpen(false);
  };
  const filteredExams = selectedFilter
    ? exams.filter((exam) => exam.type === selectedFilter)
    : exams;

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
              {selectedFilter ? selectedFilter : "Select Exam Type"}
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
                {examTypes.map((type) => {
                  const isSelected = selectedFilter === type;
                  return (
                    <div
                      key={type}
                      onClick={() => handleFilterChange(type)}
                      className={`cursor-pointer px-3 py-2 text-sm rounded ${
                        isSelected
                          ? "bg-[#04203E] text-[#FAFCFD]"
                          : "text-[#1F1D1D] hover:bg-gray-100"
                      }`}
                    >
                      {type}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {filteredExams.length === 0 ? (
          <div className="text-center pt-12">
            <div className="w-16 h-16 bg-[#F4F7FA] rounded-full flex items-center shadow-lg justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-[#0077FF]" />
            </div>

            <h3 className="text-lg font-semibold text-[#1F1D1D] mb-2">
              {selectedType === "upcoming"
                ? "No Upcoming Exams"
                : "No Completed Exams"}
            </h3>

            <p className="text-[#717171] text-sm max-w-md mx-auto mb-6">
              {selectedType === "upcoming"
                ? "There are no exams scheduled at the moment. Use this time to focus on your coursework or complete pending assignments."
                : "You haven't completed any exams yet. Once you finish your first exam, it will appear here."}
            </p>

            {selectedType === "upcoming" && (
              <>
                <div
                  className="w-full h-px bg-[#71717166] mb-6"
                  style={{ maxWidth: "1072px", margin: "0 auto" }}
                ></div>
                <div className="flex justify-center space-x-3 mt-5">
                  <button className="bg-[#04203E] text-[#FAFCFD] font-[Inter] text-[16px] px-16 py-4 rounded-lg font-medium flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Study Resources</span>
                  </button>
                  <button className="bg-[#CFDCEB] text-[#1F1D1D] font-[Inter] text-[16px] px-16 py-4 rounded-lg font-medium  flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Go to Assignments</span>
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredExams.map((exam, index) => (
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
