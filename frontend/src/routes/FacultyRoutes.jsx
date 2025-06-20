import React from "react";
import { Route } from "react-router-dom";
import FacultyLayout from "../layouts/FacultyLayout";
import Timetable from "../pages/faculty/TimeTable";
import DailyTimeTable from "../pages/faculty/DailyTT";
const FacultyRoutes = () => (
  <>
    <Route path="/faculty" element={<FacultyLayout />}>
      <Route index element={<Timetable />} /> {/* /faculty */}
      <Route path="timetable" element={<Timetable />} />{" "}
      <Route path="dailytimetable" element={<DailyTimeTable />} />{" "}
      {/* /faculty/timetable */}
    </Route>
  </>
);

export default FacultyRoutes;
