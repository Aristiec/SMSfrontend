import React, { useState, useEffect } from "react";
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

const SystemCheck = () => {
  const [checks, setChecks] = useState([
    {
      title: "Browse Compatibility",
      subText: "Checking browser requirements",
      status: "pending",
      key: "browser",
      icon: Monitor,
    },
    {
      title: "Camera Access",
      subText: "Testing webcam functionality",
      status: "pending",
      key: "camera",
      icon: Camera,
    },
    {
      title: "Microphone Access",
      subText: "Testing audio input",
      status: "pending",
      key: "mic",
      icon: Mic,
    },
    {
      title: "Network Connection",
      subText: "Verifying internet stability",
      status: "pending",
      key: "network",
      icon: Wifi,
    },
    {
      title: "Security Setup",
      subText: "Configuring secure environment",
      status: "pending",
      key: "security",
      icon: Shield,
    },
  ]);
  const [isBrowserCompatible, setIsBrowserCompatible] = useState(false);
  const [isCameraAccessible, setIsCameraAccessible] = useState(false);
  const [isMicrophoneAccessible, setIsMicrophoneAccessible] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [securitySetupDone, setSecuritySetupDone] = useState(false);
  useEffect(() => {
    const checkBrowser = () => {
      const supported =
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices &&
        "connection" in navigator;
      updateCheckStatus("browser", supported ? "pass" : "fail");
    };

    const checkCamera = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        updateCheckStatus("camera", "pass");
      } catch {
        updateCheckStatus("camera", "fail");
      }
    };

    const checkMic = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        updateCheckStatus("mic", "pass");
      } catch {
        updateCheckStatus("mic", "fail");
      }
    };

    const checkNetwork = () => {
      updateCheckStatus("network", navigator.onLine ? "pass" : "fail");
    };

    const runAllChecks = async () => {
      checkBrowser();
      await checkCamera();
      await checkMic();
      checkNetwork();
    };

    runAllChecks();
  }, []);
  useEffect(() => {
    const others = checks.filter((c) => c.key !== "security");
    const allPassed = others.every((c) => c.status === "pass");
    const hasFail = others.some((c) => c.status === "fail");
    const currentSecurity = checks.find((c) => c.key === "security")?.status;

    const expected = allPassed ? "pass" : hasFail ? "fail" : "pending";

    if (currentSecurity !== expected) {
      updateCheckStatus("security", expected);
    }
  }, [checks]);

  useEffect(() => {
    if (
      isBrowserCompatible &&
      isCameraAccessible &&
      isMicrophoneAccessible &&
      isOnline
    ) {
      setSecuritySetupDone(true);
    }
  }, [
    isBrowserCompatible,
    isCameraAccessible,
    isMicrophoneAccessible,
    isOnline,
  ]);
  const updateCheckStatus = (key, status) => {
    setChecks((prev) =>
      prev.map((item) => (item.key === key ? { ...item, status } : item))
    );
  };

  const navigate = useNavigate();
  const hasLoadingOrFail = checks.some(
    (check) =>
      check.key !== "security" &&
      (check.status === "pending" || check.status === "fail")
  );

  console.log(hasLoadingOrFail);
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
      {checks.some((check) => check.status === "fail") ? (
        <div className="flex gap-3 p-4 rounded-[8px] bg-[#FEF2F2]">
          <CircleAlert size={20} color="#EF4444" />
          <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#EF4444]">
            We couldn’t access your microphone. Check browser permissions or
            refresh the page to try again.
          </p>
        </div>
      ) : checks.some((check) => check.status === "pending") ? (
        <div className="flex gap-3 p-4 rounded-[8px] bg-[#FFF4ED]">
          <CircleAlert size={20} color="#F97316" />
          <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#F97316]">
            System check is in progress
          </p>
        </div>
      ) : (
        <div className="flex gap-3 p-4 rounded-[8px] bg-[#ECFDF7]">
          <CircleCheckBig size={20} color="#10B981" />
          <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#10B981]">
            Your system meets all the exam requirements. You may now proceed to
            start.
          </p>
        </div>
      )}

      <div className="flex justify-between pb-6">
        <button
          onClick={() => navigate("/student/exam/preexam")}
          className="py-3 px-4 rounded-[8px] bg-[#CFDCEB] flex items-center gap-3 "
        >
          <ChevronLeft size={20} color="#1F1D1D" />
          <p className="font-medium text-[16px] leading-6 tracking-normal font-[Inter] text-[#1F1D1D]">
            Previous
          </p>
        </button>
        <button
          onClick={() => navigate("/student/exam/review")}
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
