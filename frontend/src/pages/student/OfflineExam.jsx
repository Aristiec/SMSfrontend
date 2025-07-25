import React, { useState, useEffect } from "react";
import StudentInfo from "../../components/student/Exam/Offline/StudentInfo";
import ExamDatesheet from "../../components/student/Exam/Offline/ExamDatesheet";
import {
  studentData,
  ongoingExamData,
  examUpdates,
  upcomingExams,
  completedExams,
} from "../../data/examData";
import { fetchSubjectsByCourseId } from "../../features/auth/authAPI";
import { fetchExams } from "../../features/auth/authAPI";
const Exam = () => {
  const [isExamOngoing, setIsExamOngoing] = useState(true);
  const [selectedExamType, setSelectedExamType] = useState("upcoming");
  const [exams, setExams] = useState([]);

  const courseId = studentData.courseId;
  const [subjects, setSubjects] = useState([]);
  console.log("Subjects state:", subjects);

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        console.log("studentData:", studentData);
        console.log("courseId:", courseId);

        const response = await fetchSubjectsByCourseId(courseId);
        console.log("Full subjects API response:", response);
        console.log("response.data:", response.data);
        console.log("response.data[0].subjects:", response.data[0]?.subjects);

        setSubjects(response.data[0]?.subjects || []);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    if (courseId) loadSubjects();
  }, [courseId]);

  useEffect(() => {
    const getExams = async () => {
      try {
        const data = await fetchExams();
        console.log("Fetched exams:", data);
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    getExams();
  }, []);

  const handleSystemCheck = () => {
    console.log("Running system check...");
  };

  const handleStartExam = () => {
    console.log("Starting examination...");
  };

  return (
    <div className="mx-auto   flex flex-col gap-8 min-h-screen">
      <div className="flex flex-col px-4 gap-4 mt-4">
        <div className="bg-[#04203E] text-[#FAFCFD] p-6 rounded-lg mb-6">
          <h1 className="text-[24px] font-bold font-[Merriweather]">Exams</h1>
        </div>

        <div className="w-full">
          <div className="mb-4">
            <StudentInfo student={studentData} />
          </div>

          <ExamDatesheet />
        </div>
      </div>
    </div>
  );
};

export default Exam;
