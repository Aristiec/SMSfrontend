import React from "react";
import Header from "../components/student/Header";
import Navbar from "../components/student/Navbar";
import { Outlet } from "react-router-dom";
import GeneralAssistant from "../components/student/Ai/generalAssistant";

const StudentLayout = () => {
  return (
    <div className="min-h-screen bg-[#E9EEF4] flex pt-[72px] relative">
      <Header />
      <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-y-auto scrollbar-hide">
        <Navbar />
      </nav>
      <div className="flex-1 ml-[240px] p-4">
        <Outlet />
      </div>
      <div className="fixed right-0 top-0 z-500 bg-[#FAFCFD] w-[36%] h-[100dvh]">
        <GeneralAssistant/>
      </div>
    </div>
  );
};  

export default StudentLayout;
