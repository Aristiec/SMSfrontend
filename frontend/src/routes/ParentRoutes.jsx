import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentLayout from "../layouts/ParentLayout";
import Dashboard from "../pages/parent/Dashboard";
import Performance from "../pages/parent/Performance";
import Attendance from "../pages/parent/Attendance";
import Assignments from "../pages/parent/Assignments";
import Fees from "../pages/parent/Fees";
import Notifications from "../pages/parent/Notifications";
import Help from "../pages/parent/Help";
import Profile from "../pages/parent/Profile";

const ParentRoutes = () => {
  return (
    <>
      <Route path="/parent" element={<ParentLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="performance" element={<Performance />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="fees" element={<Fees />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="help" element={<Help />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  );
};

export default ParentRoutes;
