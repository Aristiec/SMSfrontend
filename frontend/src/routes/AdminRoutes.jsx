import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import Schedule from "../pages/admin/Schedule";
import Courses from "../pages/admin/Courses";
import Results from "../pages/admin/Results";
import Exam from "../pages/admin/Exam";
import OfflineExam from "../pages/admin/OfflineExam";
import Assignments from "../pages/admin/Assignments";
import Attendance from "../pages/admin/Attendance";
import Notices from "../pages/admin/Notices";
import Users from "../pages/admin/UserManagement";
import Settings from "../pages/admin/Settings";
import Library from "../pages/admin/Library";
import Hostel from "../pages/admin/Hostel";
import Transport from "../pages/admin/Transport";
import Support from "../pages/admin/Support";
import Profile from "../pages/admin/Profile";

const AdminRoutes = () => {
  return (
    <>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="courses" element={<Courses />} />
        <Route path="results" element={<Results />} />
        <Route path="exam" element={<Exam />} />
        <Route path="offlineExam" element={<OfflineExam />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="notices" element={<Notices />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="library" element={<Library />} />
        <Route path="hostel" element={<Hostel />} />
        <Route path="transport" element={<Transport />} />
        <Route path="support" element={<Support />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  );
};

export default AdminRoutes;
