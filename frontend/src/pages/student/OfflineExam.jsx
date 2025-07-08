import React, { useState } from "react";
import StudentInfo from "../../components/student/Exam/Offline/StudentInfo";
import CurrentExam from "../../components/student/Exam/Offline/CurrentExam";
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
    <div className="mx-auto flex flex-col gap-8 min-h-screen">
      <div className="flex flex-col px-4 gap-4 mt-4"> 
      <div className="bg-[#04203E] text-[#FAFCFD] p-6 rounded-lg mb-6">
        <h1 className="text-[24px] font-bold font-[Merriweather]">Exams</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <StudentInfo student={studentData} />
          <CurrentExam
            exam={ongoingExamData}
            onSystemCheck={handleSystemCheck}
            onStartExam={handleStartExam}
          />
        </div>

        <div className="h-full">
          <ExamUpdatesSidebar updates={examUpdates} />
        </div>
      </div>
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
