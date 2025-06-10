import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";

// Import all student pages
import StudentDashboard from "./pages/student/Dashboard";
import Timetable from "./pages/student/Timetable";
import Courses from "./pages/student/Courses";
import Notices from "./pages/student/Notices";
import Assignments from "./pages/student/Assignments";
import Results from "./pages/student/Results";
import Attendance from "./pages/student/Attendance";
import FeePayment from "./pages/student/FeePayment";
import Profile from "./pages/student/Profile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#E9EEF4] flex pt-[72px]">

        {/* Navbar */}
        <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-auto scrollbar-hide"/>

        {/* Fixed Header */}
        <Header />

        {/* Fixed Navbar */}
        <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-y-auto scrollbar-hide">

          <Navbar />
        </nav>

        {/* Content */}
        <div className="flex-1 ml-[240px] p-4">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/results" element={<Results />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/fees" element={<FeePayment />} />
            <Route path="/profile" element={<Profile />} />
            {/* Optional default redirect or 404 */}
            <Route path="*" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
