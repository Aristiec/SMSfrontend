import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ExamInstructions from "../components/student/Exam/Offline/ExamInstructions";
import OfflineExam from "../pages/student/OfflineExam";
import AdmitCard from "../components/student/Exam/Offline/AdmitCard";
import SignIn from "../pages/student/Login/SignIn.jsx";
import ResetPassword from "../pages/student/Login/ResetPassword.jsx";
import Seating from "../components/student/Exam/Offline/Seating";
import ExamReview from "../components/student/Exam/Online/preExam/Review.jsx";
import OnlineExam from "../components/student/Exam/Online/examPage/OnlineExam";
import Library from "../pages/Library";
import ActivityHistory from "../components/student/Library/ActivityHistory";
import BookDetails from "../components/student/Library/BookDetails";
import BrowseLibrary from "../components/student/Library/BrowseLibrary";
import Fines from "../components/student/Library/Fines";
import IssuedBooks from "../components/student/Library/IssuedBooks";
import Wishlist from "../components/student/Library/Wishlist";
import FeePayment1 from "../pages/student/Fee/FeePayment1.jsx";
import CodeSend from "../pages/student/Login/CodeSend";
import CodeVerify from "../pages/student/Login/CodeVerify";
import TransportService from "../components/student/TransportService.jsx";
import ProtectedRoute from "../components/ProtectedRoute";
const StudentRoutes = () => {
  return (
    <>
      <Route path="/student" element={<StudentLayout />}>
        <Route path="" element={<StudentDashboard />} />
        <Route path="timetable/academicCal" element={<AcademicCalendar />} />
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
        <Route
          path="results/recheckStatus"
          element={<RecheckRequestStatus />}
        />
        <Route path="support" element={<Support />} />
        <Route path="book/:id" element={<BookDetails />} />
        <Route path="transport" element={<Transport />} />
        <Route path="transport/map" element={<TransportMap />} />
        <Route path="library" element={<Library />} />
        <Route path="exam/preexam" element={<Instructions />} />
        <Route path="exam/systemCheck" element={<SystemCheck />} />
        <Route path="exam/review" element={<ExamReview />} />
        <Route path="instructions" element={<ExamInstructions />} />
        <Route path="offlineExam/admit" element={<AdmitCard />} />
        <Route path="offlineExam/seating" element={<Seating />} />
        <Route path="activity" element={<ActivityHistory />} />
        <Route path="lib" element={<BrowseLibrary />} />
        <Route path="fine" element={<Fines />} />
        <Route path="issued" element={<IssuedBooks />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="transportService" element={<TransportService />} />
        <Route path="fees/payment" element={<FeePayment1 />} />
      </Route>
      <Route path="test" element={<OnlineExam />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="code" element={<CodeSend />} />
      <Route path="codeverify" element={<CodeVerify />} />
      <Route path="resetpassword" element={<ResetPassword />} />
    </>
  );
};

export default StudentRoutes;
