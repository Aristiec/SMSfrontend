import React, { useState } from "react";
import {
  Calendar,
  Clock,
  GraduationCap,
  FileText,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const UpcomingExams = ({ exams, selectedType, onTypeChange, subjects }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  const subjectOptions = [
    "Engineering Mathematics",
    "Engineering Physics",
    "Engineering Chemistry",
    "Intro to Programming",
    "Math",
  ];
  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setIsDropdownOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const filteredExams =
    selectedSubject && selectedSubject !== "All Subjects"
      ? exams.filter((exam) => exam.subject === selectedSubject)
      : exams;

  const totalPages = Math.ceil(filteredExams.length / itemsPerPage);

  const visibleExams = filteredExams.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handelSetReminder = (exam) => {
    const title = encodeURIComponent("Exam Reminder: " + exam.title);
    const startDate = new Date(exam.date);
    const endDate = new Date(startDate.getTime() + exam.duration * 60000);

    const formatmyDate = (date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const start = formatmyDate(startDate);
    const end = formatmyDate(endDate);

    const details = encodeURIComponent(
      `Subject: ${exam.subject}\nQuestions: ${exam.questions}\nType: ${exam.type}`
    );

    const path = window.location.pathname;
    const location = encodeURIComponent(
      path.includes("/offlineExam") ? "Offline" : "Online"
    );

    const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <div className="bg-[#FAFCFD] rounded-lg shadow-sm ">
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
                ? "border-[#1F1D1D] text-[#1F1D1D]"
                : "border-transparent text-[#717171] "
            }`}
            onClick={() => onTypeChange("completed")}
          >
            <GraduationCap className="w-5 h-5" />
            <span>Completed</span>
          </button>
        </div>

        <div className="relative ">
          <button
            className="text-sm border border-[#1F1D1D] rounded-lg px-3 py-2 bg-[#FAFCFD] flex items-center space-x-2 min-w-[180px]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="font-[Inter] text-[#1F1D1D]">
              {selectedSubject}
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
                {subjectOptions.map((subject) => {
                  const isSelected = selectedSubject === subject;
                  return (
                    <div
                      key={subject}
                      onClick={() => handleSubjectChange(subject)}
                      className={`cursor-pointer px-3 py-2 text-sm rounded ${
                        isSelected
                          ? "bg-[#04203E] text-[#FAFCFD]"
                          : "text-[#1F1D1D]"
                      }`}
                    >
                      {subject}
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
              {selectedType === "upcoming" || selectedType === "completed"
                ? "No Upcoming Exams"
                : "No Completed Exams"}
            </h3>

            <p className="text-[#717171] text-sm max-w-md mx-auto mb-6">
              {selectedType === "upcoming" || selectedType === "completed"
                ? "There are no exams scheduled at the moment. Use this time to focus on your coursework or complete pending assignments."
                : "You haven't completed any exams yet. Once you finish your first exam, it will appear here."}
            </p>

            {(selectedType === "upcoming" || selectedType === "completed") && (
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
          <div className="relative">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FAFCFD] border border-gray-300 shadow-md p-2 rounded-full disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-[#1F1D1D]" />
            </button>

            <div className="flex justify-center gap-x-6 px-10 overflow-x-hidden">
              {visibleExams.map((exam, index) => (
                <div
                  key={index}
                  className=" min-w-[360px] max-w-[360px] basis-[360px] flex-shrink-0 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow bg-[#FAFCFD]"
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
                    {subjects[exam.subjectId] || "Loading..."}
                  </p>

                  <div className="space-y-2 text-sm text-[#717171] font-[Inter] font-normal mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="">
                          {exam.durationInMinutes} minutes
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{exam.totalQuestions} questions</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{exam.totalMarks} marks</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 border-t pt-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="w-4 h-4 text-[#1F1D1D]" />
                      <span className="text-[#1F1D1D] font-[Inter]">
                        {new Date(exam.startTime).toLocaleString()}
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
                    <button
                      onClick={() => handelSetReminder(exam)}
                      className="w-full bg-[#04203E] text-[#FAFCFD] py-2 rounded-lg font-medium   flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Set Reminder</span>
                    </button>
                  ) : exam.status === "Completed" && exam.resultAvailable ? (
                    <button className="w-full bg-[#04203E] text-[#FAFCFD] font-[Inter] py-2 rounded-lg font-medium  flex items-center justify-center space-x-2">
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
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
              }
              disabled={currentPage >= totalPages - 1}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FAFCFD] border border-gray-300 shadow-md p-2 rounded-full disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 text-[#1F1D1D]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingExams;
