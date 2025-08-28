import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import leftArrow from "../../../assets/left.svg";
import downArrowIcon from "../../../assets/down.svg";
import clockIcon from "../../../assets/redClock.svg";
import anti from "../../../assets/anti.svg";
import page from "../../../assets/page.svg";

const ViewDeatils = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [assignmentData, setAssignmentData] = useState(null);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const location = useLocation();
  const navigate = useNavigate();
  const assignment = location.state?.assignment;

  const id = assignment?.id;

  useEffect(() => {
    if (!id) return;
    const fetchAssignmentDetails = async () => {
      try {
        const res = await fetch(
          `https://f7da-103-16-29-169.ngrok-free.app/api/v1/assignments/${id}`
        );
        const data = await res.json();
        setAssignmentData(data);
      } catch (error) {
        console.error("Failed to fetch assignment details:", error);
      }
    };

    fetchAssignmentDetails();
  }, [id]);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  if (!assignmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#04203E] text-lg">Loading assignment details...</p>
      </div>
    );
  }

  const { title, description, dueDate, attempted, submissionMode } =
    assignmentData;

  return (
    <div className="min-h-screen bg-[#E9EEF4] flex flex-col gap-8 font-[Inter]">
      {/* Header */}
      <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full max-w-7xl h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">
          Assignments
        </h1>
      </header>

      <div className="bg-[#FAFCFD] rounded-[12px] shadow-lg mt-6 p-6 max-w-7xl mx-auto flex flex-col">
        {/* Back Button */}
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={leftArrow} alt="leftBack" className="w-4 h-4" />
          <p className="text-sm text-[#04203E] font-[400]">Back</p>
        </div>

        {/* Assignment Content */}
        <div className="mt-4">
          <h2 className="text-[16px] font-medium text-[#1F1D1D]">{title}</h2>
          <p className="text-[12px] text-[#1F1D1D] mt-2">{description}</p>

          <div className="flex gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <img src={clockIcon} alt="clock" className="w-[13px]" />
              <span className="text-[#EF4444]">Due: {dueDate}</span>
            </div>
            <div className="text-[#1F1D1D]">Submission: {submissionMode}</div>
          </div>

          {!attempted && (
            <div className="mt-4 bg-[#FEF2F2] p-3 rounded-md flex items-center gap-2">
              <img src={anti} alt="anti" />
              <p className="text-[#EF4444] text-[14px]">
                Late submissions are not allowed
              </p>
            </div>
          )}
        </div>

        {/* View More */}
        <div className="mt-6">
          <div
            ref={contentRef}
            style={{ maxHeight }}
            className="overflow-hidden transition-all duration-300 ease-in-out"
          >
            {/* Replace with real dynamic content if available */}
            <p className="text-sm text-[#1F1D1D] mb-2">
              Assignment instructions…
            </p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-[#04203E] text-sm"
          >
            <img src={downArrowIcon} alt="arrow" className="w-[16px] h-[9px]" />
            {isOpen ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDeatils;
