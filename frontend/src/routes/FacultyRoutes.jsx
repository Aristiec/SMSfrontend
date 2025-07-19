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
import AssignmentReviewPage from "../pages/faculty/AssignmentReviewPage";

const FacultyRoutes = () => (
  <>
    <Route path="/faculty" element={<FacultyLayout />}>
      <Route index element={<Timetable />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="timetable" element={<Timetable />} />{" "}
      <Route path="dailytimetable" element={<DailyTimeTable />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="notice" element={<Notices />} />
      <Route path="courses" element={<MyCourses />} />
      <Route path="report" element={<Report />} />
      <Route path="students" element={<Students />} />
      <Route path="assignments/create" element={<CreateAssignmentForm />} />
      <Route path="assignments/review" element={<AssignmentReviewPage />} />
    </Route>
  </>
);

export default FacultyRoutes;
