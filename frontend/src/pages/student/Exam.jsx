import React, { useState } from "react";
import StudentInfoCard from "../../components/student/Exam/Online/StudentInfoCard";
import OngoingExam from "../../components/student/Exam/Online/OnGoingExam";
import UpcomingExams from "../../components/student/Exam/Online/UpcomingExams";
import ExamUpdatesSidebar from "../../components/student/Exam/Online/ExamUpdatesSidebar";
import NoOngoingExam from "../../components/student/Exam/Online/NoOngoingExam";
const Exam = () => {
  const [isExamOngoing, setIsExamOngoing] = useState(true);
  const [selectedExamType, setSelectedExamType] = useState("upcoming");

  const studentData = {
    name: "Asha Singh",
    id: "TRUB203020",
    program: "Computer Science",
    semester: "IV",
    email: "ashasinghCS@university.ariestic.edu.in",
    phone: "+1 (555) 123-4567",
    attendance: 92,
    gpa: 7.9,
    examsLeft: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  };

  const ongoingExamData = {
    title: "Mid-Term Examination - Sem IV",
    subject: "Database Management System",
    duration: 150,
    questions: 45,
    totalMarks: 100,
    endTime: "12:30 PM",
    timeLeft: 42,
    systemCheckComplete: false,
  };

  const examUpdates = [
    {
      type: "live",
      title: "Exam is now live",
      message:
        "DBMS exam has began. All students are required to join immediately. You have until 12:30 PM to complete the paper.",
      time: "Today, 10:00 AM",
    },
    {
      type: "reminder",
      title: "Exam Reminder",
      message:
        "DBMS exam starts in 10 minutes. All students must complete the system check and be ready to start on time.",
      time: "Today, 9:50 AM",
    },
    {
      type: "reminder",
      title: "Exam Reminder",
      message:
        "DBMS Exam is scheduled for tomorrow at 10:00 AM. Make sure you've completed the system check in advance.",
      time: "Yesterday, 10:00 AM",
    },
  ];

  const upcomingExams = [
    {
      title: "Programming Practical - Sem II",
      subject: "Java Programming",
      date: "July 5, 2025",
      time: "2:00 PM",
      status: "scheduled",
    },
    {
      title: "Programming Practical - Sem IV",
      subject: "Advanced Database",
      date: "July 8, 2025",
      time: "10:00 AM",
      status: "scheduled",
    },
  ];

  const completedExams = [
    {
      title: "Quiz - Data Structures",
      subject: "Computer Science",
      date: "June 25, 2025",
      time: "11:00 AM",
      status: "completed",
    },
  ];

  const handleSystemCheck = () => {
    console.log("Running system check...");
  };

  const handleStartExam = () => {
    console.log("Starting examination...");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="bg-[#04203E] text-[#FAFCFD] p-6 rounded-lg mb-6">
        <h1 className="text-[24px] font-bold font-[Merriweather]">Exams</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
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
  );
};

export default Exam;
