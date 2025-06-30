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
import Recheck from "../components/student/Recheck";
import Exam from "../pages/student/Exam";
import Support from "../pages/student/Support.jsx";
import ChatWidget from "../components/student/AI/Document/DocumentAssistant.jsx";
import RecheckRequestStatus from "../components/student/RecheckRequestStatus.jsx";
import Transport from "../pages/student/Transport.jsx";
import TransportMap from "../components/student/TransportMap.jsx";
import Instructions from "../components/student/Exam/Online/preExam/Instructions.jsx";
import SystemCheck from "../components/student/Exam/Online/preExam/SystemCheck.jsx";
import Review from "../components/student/Exam/Online/preExam/Review.jsx";
import PreExamSet from "../components/student/Exam/Online/PreExamSet.jsx";
import PreExam2 from "../components/student/Exam/Online/preExam/PreExam2.jsx";
import OfflineExam from "../pages/student/OfflineExam";
const StudentRoutes = () => (
  <Route path="/student" element={<StudentLayout />}>
    <Route path="" element={<StudentDashboard />} />
    <Route path="academicCal" element={<AcademicCalendar />} />
    <Route path="chat" element={<ChatWidget />} />
    <Route path="exam" element={<Exam />} />
    <Route path="offlineExam" element={<OfflineExam />} />
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
    <Route path="results/recheck" element={<Recheck />} />
    <Route path="results/recheckStatus" element={<RecheckRequestStatus />} />
    <Route path="support" element={<Support />} />
    <Route path="transport" element={<Transport />} />
    <Route path="transport/map" element={<TransportMap />} />
     <Route path="instructions" element={<Instructions />} />
    <Route path="systemCheck" element={<SystemCheck />} />
    <Route path="review" element={<Review/>} />
    
    <Route path="preexam" element={<PreExamSet />} />
    <Route path="preexam2" element={<PreExam2 />} />
  </Route>
);

export default StudentRoutes;
