import React, { useState } from "react";
import Header from "../components/student/Header";
import Navbar from "../components/student/Navbar";
import { Outlet } from "react-router-dom";
import GeneralAssistant from "../components/student/Ai/generalAssistant";
// import { logo } from "../assets/logo.svg";

const StudentLayout = () => {
  const [showGeneralAssistant, setShowGeneralAssistant] = useState(true);
  return (
    <div className="min-h-screen bg-[#E9EEF4] flex pt-[72px] relative">
      <Header />
      <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-y-auto scrollbar-hide">
        <Navbar />
      </nav>
      <div className="flex-1 ml-[240px] p-4">
        <Outlet />
      </div>
      <div className="">
        <div
          style={{
            background:
              "linear-gradient(311.58deg, #04203E 14.78%, #0077FF 98.82%)",
          }}
          className=""
        >
          {/* <img src={logo}/> */}
        </div>
      </div>

      {showGeneralAssistant && (
        <div>
          <div className="absolute inset-0 bg-[#1F1D1D]/[0.24] z-10"></div>

          <div className="fixed right-0 top-0 z-500 bg-[#FAFCFD] w-[30%] ">
            <GeneralAssistant />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentLayout;
