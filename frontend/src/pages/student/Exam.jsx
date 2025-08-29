import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExamNotifications } from "../../features/examSlice";
import {
  fetchSubjectsByCourseId,
  fetchUpcomingExamsAPI,
} from "../../features/auth/authAPI";
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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { updates, loading } = useSelector((state) => state.exam);
  const [exams, setExams] = useState([]);
  const [subjects, setSubjects] = useState({});
  const [loadingExams, setLoadingExams] = useState(false);

  const [isExamOngoing, setIsExamOngoing] = useState(true);
  const [selectedExamType, setSelectedExamType] = useState("upcoming");

  const handleSystemCheck = () => {
    console.log("Running system check...");
  };

  const handleStartExam = () => {
    console.log("Starting examination...");
  };
  
  useEffect(() => {
    if (user?.courseId && user?.sem && user?.token) {
      dispatch(
        fetchExamNotifications({
          courseId: user.courseId,
          semester: user.sem,
          token: user.token,
        })
      );
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user?.courseId && user?.token) {
      console.log("User found, fetching exam data...");
    } else {
      console.log("No user data, using mock exam data");
      // Use mock data when no user data is available
      setExams(upcomingExams);
      const mockSubjects = {
        1: "Data Structures",
        2: "Python", 
        3: "Web Development",
        4: "Advanced SQL",
        5: "System Design",
        6: "Neural Networks",
        7: "Network Protocols",
        8: "React Native"
      };
      setSubjects(mockSubjects);
      return;
    }

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startDate = startOfMonth.toISOString().split("T")[0];

    const threeYearsLater = new Date(now);
    threeYearsLater.setFullYear(threeYearsLater.getFullYear() + 3);
    const endDate = threeYearsLater.toISOString().split("T")[0];

    console.log({ startDate, endDate });

    const subjectId = null;

    //Fetch subjects first
    fetchSubjectsByCourseId(user.courseId)
      .then((res) => {
        console.log("Subjects API response:", res.data);

        let subjectList = [];
        res.data.forEach((student) => {
          if (Array.isArray(student.subjects)) {
            subjectList = subjectList.concat(student.subjects);
          }
        });

        const subjectMap = {};
        subjectList.forEach((s) => {
          subjectMap[s.id] = s.name;
        });
        console.log("Subject Map:", subjectMap);
        setSubjects(subjectMap);

        //Then fetch exams
        return fetchUpcomingExamsAPI(
          user.courseId,
          null,
          startDate,
          endDate,
          user.token
        );
      })
      .then((res) => {
        console.log("Fetched exams:", res.data);
        setExams(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        // Fallback to mock data when API fails
        console.log("API failed, using mock exam data");
        setExams(upcomingExams);
        const mockSubjects = {
          1: "Data Structures",
          2: "Python", 
          3: "Web Development",
          4: "Advanced SQL",
          5: "System Design",
          6: "Neural Networks",
          7: "Network Protocols",
          8: "React Native"
        };
        setSubjects(mockSubjects);
      });
  }, [user]);

  return (
    <div className="mx-auto flex flex-col gap-8 min-h-screen overflow-x-hidden">
      <div className="flex flex-col px-4 gap-4 mt-4">
        {/* Header */}
        <div className="bg-[#04203E] text-[#FAFCFD] p-6 rounded-lg mb-6">
          <h1 className="text-[24px] font-bold font-[Merriweather]">Exams</h1>
        </div>

        {/* Flex Layout Instead of Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full flex-grow items-stretch">
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
              <ExamUpdatesSidebar updates={loading ? [] : (updates.length > 0 ? updates : examUpdates)} />
            </div>
          </div>
        </div>

        {/* Bottom Section (Upcoming / Completed Exams) */}
        <div className="mt-6">
          <UpcomingExams
            exams={selectedExamType === "upcoming" ? exams : completedExams}
            selectedType={selectedExamType}
            onTypeChange={setSelectedExamType}
            subjects={subjects}
          />
        </div>
      </div>
    </div>
  );
};

export default Exam;
