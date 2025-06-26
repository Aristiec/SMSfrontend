import React, { useState } from "react";
import Header from "../components/student/Header";
import Navbar from "../components/student/Navbar";
import { Outlet } from "react-router-dom";

import GeneralAssistant from "../components/student/AI/General/GeneralAssistant.jsx";
import DocumentAssistant from "../components/student/AI/Document/ChatWidget.jsx";

import logo from "../assets/logo.svg";
import pdf from "../assets/pdf.svg";
import bot from "../assets/bot.svg";
import {motion} from "framer-motion"

const StudentLayout = () => {
  const [showGeneralAssistant, setShowGeneralAssistant] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const handleClick =()=>{
    setShowGeneralAssistant(!showGeneralAssistant)
    setShowTab(!showTab)
  }
  return (
    <div className="min-h-screen bg-[#E9EEF4] flex pt-[72px] relative">
      <Header />
      <nav className="w-[240px] fixed left-0 top-[72px] bottom-0 bg-white shadow-md overflow-y-auto scrollbar-hide">
        <Navbar />
      </nav>
      <div className="flex-1 ml-[240px] p-4">
        <Outlet />
      </div>
      <div className=" relative z-10000">
        <div
          onClick={() => setShowTab(!showTab)}
          className="fixed right-5 bottom-4 w-11 cursor-pointer"
        >
          <img src={logo} />
        </div>
        {showTab && (
          <motion.div 
          initial={{ opacity: 0,scale:0, }}
          animate={{ opacity: 1,scale:1, }}
          transition={{ fadeIn: { duration: 0.5 } }}


          className=" flex flex-col gap-[16px] fixed right-15 bottom-20 cursor-pointer ">
            <div className="flex gap-[12px] rounded-[8px] justify-center items-center bg-[#04203E] px-[12px] py-[8px]">
              <img src={pdf} />
              <p className="font-[Inter] font-[400] text-[#FAFCFD] text-[14px] leading-[18px] text-center tracking-[0]">
                Document Assistant
              </p>
            </div>
            <div onClick={handleClick} className="flex gap-[12px] rounded-[8px] justify-center items-center bg-[#04203E] px-[12px] py-[8px] cursor-pointer">
              <img src={bot} />
              <p className="font-[Inter] font-[400] text-[#FAFCFD]  text-[14px] leading-[18px] text-center tracking-[0]">
                General Assistant
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {showGeneralAssistant && (
        <div>
          <div className="absolute inset-0 bg-[#1F1D1D]/[0.24] z-10"></div>

          <div className="fixed right-0 top-0 z-500 bg-[#FAFCFD] w-[30%] ">
            <GeneralAssistant setShowGeneralAssistant={setShowGeneralAssistant} showGeneralAssistant={showGeneralAssistant} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentLayout;
