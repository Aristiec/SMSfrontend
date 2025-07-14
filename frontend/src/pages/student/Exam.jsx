import React, { useState } from "react";
import StudentInfoCard from "../../components/student/Exam/Online/StudentInfoCard";
import OngoingExam from "../../components/student/Exam/Online/OnGoingExam";
import UpcomingExams from "../../components/student/Exam/Online/UpcomingExams";
import ExamUpdatesSidebar from "../../components/student/Exam/Online/ExamUpdatesSidebar";
import NoOngoingExam from "../../components/student/Exam/Online/NoOngoingExam";
import {
  studentData,
  ongoingExamData,
  examUpdates,
  upcomingExams,
  completedExams,
} from "../../data/examData";

const Exam = () => {
  const [isExamOngoing, setIsExamOngoing] = useState(true);
  const [selectedExamType, setSelectedExamType] = useState("upcoming");

  const handleSystemCheck = () => {
    console.log("Running system check...");
  };

  const handleStartExam = () => {
    console.log("Starting examination...");
  };

  return (
    <div className="mx-auto flex flex-col gap-8 min-h-screen overflow-x-hidden">
      <div className="flex flex-col px-4 gap-4 mt-4">
        {/* Header */}
        <div className="bg-[#04203E] text-[#FAFCFD] p-6 rounded-lg mb-6">
          <h1 className="text-[24px] font-bold font-[Merriweather]">Exams</h1>
        </div>

        {/* Flex Layout Instead of Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full flex-grow ">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 flex flex-col h-full">
            <div className="flex-1 flex flex-col space-y-6">
              <StudentInfoCard student={studentData} />
              {isExamOngoing ? (
                <OngoingExam
                  exam={ongoingExamData}
                  onSystemCheck={handleSystemCheck}
                  onStartExam={handleStartExam}
                />
              ) : (
                <NoOngoingExam />
              )}
            </div>
          </div>

          {/* Right Section (Sidebar) */}
          <div className="w-full lg:w-1/3 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <ExamUpdatesSidebar updates={examUpdates} />
            </div>
          </div>
        </div>

        {/* Bottom Section (Upcoming / Completed Exams) */}
        <div className="mt-6">
          <UpcomingExams
            exams={
              selectedExamType === "upcoming" ? upcomingExams : completedExams
            }
            selectedType={selectedExamType}
            onTypeChange={setSelectedExamType}
          />
        </div>
      </div>
    </div>
  );
};

export default Exam;
