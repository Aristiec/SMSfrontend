import { Route } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../pages/student/Dashboard";
import Timetable from "../pages/student/Timetable";
import Courses from "../pages/student/Courses";
import Notices from "../pages/student/Notices";
import Assignments from "../pages/student/Assignments";
import AssignmentDetails from "../pages/student/AssignmentDetails";
import Results from "../pages/student/Results";
import Attendance from "../pages/student/Attendance";
import FeePayment from "../pages/student/FeePayment";
import Profile from "../pages/student/Profile";
import AcademicCalendar from "../pages/student/AcademicCalendar";
import ChatWidget from "../components/student/AI/ChatWidget";
const StudentRoutes = () => (
  <Route path="/student" element={<StudentLayout />}>
    <Route path="" element={<StudentDashboard />} />
    <Route path="academicCal" element={<AcademicCalendar />} />
    <Route path="chat" element={<ChatWidget />} />
    <Route path="dashboard" element={<StudentDashboard />} />
    <Route path="dashboard" element={<StudentDashboard />} />
    <Route path="timetable" element={<Timetable />} />
    <Route path="courses" element={<Courses />} />
    <Route path="notices" element={<Notices />} />
    <Route path="assignments" element={<Assignments />} />
    <Route path="assignments/:id" element={<AssignmentDetails />} />
    <Route path="results" element={<Results />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="fees" element={<FeePayment />} />
    <Route path="profile" element={<Profile />} />
  </Route>
);

export default StudentRoutes;
