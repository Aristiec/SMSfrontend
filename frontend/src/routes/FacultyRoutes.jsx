import React from "react";
import { Route } from "react-router-dom";
import FacultyLayout from "../layouts/FacultyLayout";
import Timetable from "../pages/faculty/TimeTable";
import DailyTimeTable from "../pages/faculty/DailyTT";
import Assignments from "../pages/faculty/Assignments";
import Dashboard from "../pages/faculty/Dashboard";
import Notices from "../pages/faculty/Notices";
import MyCourses from "../pages/faculty/MyCourses";
import Report from "../pages/faculty/Report";
import Students from "../pages/faculty/Students";
import CreateAssignmentForm from "../components/faculty/CreateAssignment";
import AssignmentReviewPage from "../components/faculty/AssignmentReviewPage";
import AssignmentDetail from "../components/faculty/AssignmentDetail";
import OfflineExam from "../components/faculty/Exams/Offline/OfflineExam";
import ExamMangement from "../components/faculty/Exams/Offline/ExamMangement";
import AcademicCalendar from "../pages/faculty/AcedmicCalender";
import OnlineExam from "../components/faculty/Exams/online/OnlineExam";
import Attendacnce from "../pages/faculty/Attendacnce";
// import Reports from "../pages/faculty/Reports";
const FacultyRoutes = () => (
  <>
    <Route path="/faculty" element={<FacultyLayout />}>
      <Route index element={<Timetable />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="timetable" element={<Timetable />} />{" "} */}
      <Route path="timetable" element={<AcademicCalendar />} />{" "}
      <Route path="dailytimetable" element={<DailyTimeTable />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="notice" element={<Notices />} />
      <Route path="courses" element={<MyCourses />} />
      <Route path="report" element={<Report />} />
      <Route path="students" element={<Students />} />
      <Route path="assignments/create" element={<CreateAssignmentForm />} />
      <Route path="assignments/review" element={<AssignmentReviewPage />} />
      <Route path="assignments/detail" element={<AssignmentDetail />} />
      <Route path="offline" element={<OfflineExam />} />
      <Route path="online" element={<OnlineExam />} />
      <Route path="exam" element={<OfflineExam />} />
      <Route path="examManagement" element={<ExamMangement />} />
      <Route path="attendance" element={<Attendacnce />} />
      {/* <Route path="report" element={<Reports />} /> */}
    </Route>
  </>
);

export default FacultyRoutes;
