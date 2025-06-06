import React from "react";
import Header from "./components/student/Header";
import Navbar from "./components/student/Navbar";
import StudentDashboard from "./pages/student/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex pt-[72px]">
      <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-auto scrollbar-hide">
        <Navbar />
      </nav>

      <div className="flex-1 ml-[240px] flex flex-col">
        <Header />
        <StudentDashboard />
      </div>
    </div>
  );
}

export default App;
