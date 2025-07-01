import React, { useState } from "react";
import Header from "./Header";
import Stage from "./Stage";
import { useNavigate } from "react-router-dom";

import {
  Monitor,
  Camera,
  Mic,
  Wifi,
  Shield,
  CircleCheckBig,
  CircleAlert,
  Loader,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const checks = [
  {
    title: "Browse Compatibility",
    subText: "Checking browser requirements",
    status: "pass",
    icon: Monitor,
  },
  {
    title: "Camera Access",
    subText: "Testing webcam functionality",
    status: "pass",
    icon: Camera,
  },
  {
    title: "Microphone Access",
    subText: "Testing audio input",
    status: "pass",
    icon: Mic,
  },
  {
    title: "Network Connection",
    subText: "Verifying internet stability",
    status: "pass",
    icon: Wifi,
  },
  {
    title: "Security Setup",
    subText: "Configuring secure environment",
    status: "pass",
    icon: Shield,
  },
];
<<<<<<< HEAD:frontend/src/components/student/Exam/Online/preExam/SystemCheck.jsx
const SystemCheck = () => {
  const navigate = useNavigate();
=======
const PreExam2 = () => {
    const navigate = useNavigate();
<<<<<<< HEAD:frontend/src/components/student/Exam/Online/preExam/SystemCheck.jsx
>>>>>>> f591ff8 (onlineexam):frontend/src/components/student/Exam/Online/preExam/PreExam2.jsx
=======
>>>>>>> e2c0f9bc6a9d7da036db907ae22881cfdf2a70b6:frontend/src/components/student/Exam/Online/preExam/PreExam2.jsx
  const hasLoadingOrFail = checks.some(
    (check) => check.status === "loading" || check.status === "fail"
  );
//   console.log(hasLoadingOrFail);
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #0000003D" }}
      className="flex flex-col gap-8 p-6 rounded-[12px] bg-[#FAFCFD]"
    >
      <div className="flex gap-12 flex-col w-full items-center justify-center">
        <div className="flex flex-col gap-12 w-[70%]">
          <Header />
          <Stage currentStage={2} />
        </div>
      </div>
      <div className="flex flex-col gap-8 p-6 border border-[#71717199] rounded-[8px] mx-20 ">
        <div className="flex flex-col gap-2">
          <p className="font-[Inter] font-[700] text-[16px] leading-6 tracking-normal flex justify-center items-center text-[#1F1D1D] ">
            System Compatibility Check
          </p>
          <p className="font-[Inter] font-[400] text-[14px] leading-6 tracking-normal text-[#717171] flex justify-center items-center">
            Please wait while we verify your system meets the exam requirement
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          {checks.map((check, index) => {
            const Icon = check.icon;
            return (
              <div
                key={index}
                className="flex p-4 justify-between border-1 border-[#71717199] text-[#FAFCFD] rounded-[8px] items-center"
              >
                <div className="flex flex-col gap-[6px] justify-center ">
                  <div className="flex gap-6 items-start justify-start">
                    <div className="flex items-start py-1">
                      <Icon size={16} color="#1F1D1D" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-[Inter] font-[700] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                        {check.title}
                      </p>
                      <p className="font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#717171] flex justify-end">
                        {check.subText}
                      </p>
                    </div>
                  </div>
                </div>
                {check.status === "pass" ? (
                  <CircleCheckBig size={24} color="#10B981" />
                ) : check.status === "fail" ? (
                  <CircleAlert size={24} color="#EF4444" />
                ) : (
                  <Loader size={24} color="#3B82F6" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {hasLoadingOrFail ? (
        <div className="flex gap-3 p-4 rounded-[8px]  bg-[#FFF4ED]">
          <CircleAlert size={20} color="#F97316" />
          <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#F97316]">
            System check is in progress
          </p>
        </div>
      ) : (
        <div className="flex gap-3 p-4 rounded-[8px]  bg-[#ECFDF7]">
          <CircleCheckBig size={20} color="#10B981" />
          <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#10B981]">
            Your system meets all the exam requirements. You may now proceed to
            start.
          </p>
        </div>
      )}

      <div className="flex justify-between pb-6">
<<<<<<< HEAD:frontend/src/components/student/Exam/Online/preExam/SystemCheck.jsx
<<<<<<< HEAD:frontend/src/components/student/Exam/Online/preExam/SystemCheck.jsx
        <button  onClick={() => navigate("/student/instructions")} className="py-3 px-4 rounded-[8px] bg-[#CFDCEB] flex items-center gap-3 ">
=======
        <button onClick={() => navigate("/student/preexam")} className="py-3 px-4 rounded-[8px] bg-[#CFDCEB] flex items-center gap-3 ">
>>>>>>> f591ff8 (onlineexam):frontend/src/components/student/Exam/Online/preExam/PreExam2.jsx
=======
        <button onClick={() => navigate("/student/preexam")} className="py-3 px-4 rounded-[8px] bg-[#CFDCEB] flex items-center gap-3 ">
>>>>>>> e2c0f9bc6a9d7da036db907ae22881cfdf2a70b6:frontend/src/components/student/Exam/Online/preExam/PreExam2.jsx
          <ChevronLeft size={20} color="#1F1D1D" />
          <p className="font-medium text-[16px] leading-6 tracking-normal font-[Inter] text-[#1F1D1D]">
            Previous
          </p>
        </button>
        <button onClick={() => navigate("/student/review")}
          disabled={hasLoadingOrFail}
          className={`py-3 px-4 rounded-[8px] flex items-center gap-3 ${
            hasLoadingOrFail
              ? "bg-[#CFDCEB] cursor-not-allowed opacity-50"
              : "bg-[#04203E] "
          }`}
        >
          <p
            className={`font-medium text-[16px] leading-6 tracking-normal font-[Inter] ${
              hasLoadingOrFail ? "text-[#717171]" : "text-[#FAFCFD]"
            }`}
          >
            Next
          </p>
          {hasLoadingOrFail ? (
            <ChevronRight size={20} color="#717171" />
          ) : (
            <ChevronRight size={20} color="#FAFCFD" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SystemCheck;
