import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { fetchAssignmentById } from "../../../features/auth/authAPI"; // 🔒 API commented out
import leftArrow from "../../../assets/left.svg";
import downArrowIcon from "../../../assets/down.svg";
import clockIcon from "../../../assets/redClock.svg";
import blackClock from "../../../assets/clock.svg";
import anti from "../../../assets/anti.svg";
import page from "../../../assets/page.svg";
import pending from "../../../assets/pending.svg";
import submitted from "../../../assets/completed.svg";

// 🔹 Mock Assignment Data
const mockAssignment = {
  id: 1,
  title: "IP Protocols",
  subjectName: "Operating System",
  description: "This assignment needs to be done on pen and paper.",
  maxMarks: 100,
  dueDate: "2024-12-08T23:59:00",
  attempted: false,
  instructions: `Write short notes on the following:
  - TCP vs UDP
  - IPv4 Header structure
  - Error detection in IP`,
  resources: [
    "IP_Protocols_Guide.pdf",
    "Networking_Basics.pptx",
    "Assignment_Template.docx",
  ],
};

const ViewDetails = () => {
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");
  const { id } = useParams();

  const getStatus = (assignment) => {
    if (assignment?.attempted) return "submitted";
    const today = new Date();
    const due = new Date(assignment?.dueDate);
    if (due < today) return "overdue";
    return "pending";
  };

  useEffect(() => {
    const loadAssignment = async () => {
      try {
        // const data = await fetchAssignmentById(id); // 🔒 API call
        const status = getStatus(mockAssignment); // ✅ Mocked logic
        setAssignment({ ...mockAssignment, status });
      } catch (error) {
        console.error("Failed to fetch assignment details", error);
      } finally {
        setLoading(false);
      }
    };

    loadAssignment();
  }, [id]);

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#04203E] text-lg">Loading assignment details...</p>
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#EF4444] text-lg">Assignment not found</p>
      </div>
    );
  }

  const statusIcon =
    assignment.status === "overdue"
      ? anti
      : assignment.status === "pending"
      ? pending
      : submitted;

  const statusColor =
    assignment.status === "overdue"
      ? "text-[#EF4444]"
      : assignment.status === "pending"
      ? "text-[#F97316]"
      : "text-[#10B981]";

  return (
    <div className="w-full rounded-[12px] p-6 bg-[#FAFCFD] shadow-md">
      <div className="flex flex-col gap-2">
        {/* Top Section */}
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-[16px] leading-[24px] text-[#1F1D1D] font-[500]">
                {assignment.title}
              </p>
              <p className="text-[16px] leading-[24px] text-[#1F1D1D] font-[400]">
                {assignment.subjectName || "Subject"}
              </p>
            </div>
            <p className="text-[12px] font-[400] leading-[18px] text-[#1F1D1D]">
              {assignment.description}
            </p>
          </div>

          <div className="flex items-start gap-2 mt-2 sm:mt-0">
            <img src={statusIcon} alt="status" />
            <p className={`text-[16px] font-[600] leading-[17px] ${statusColor}`}>
              {assignment.status.charAt(0).toUpperCase() +
                assignment.status.slice(1)}
            </p>
          </div>
        </div>

        {/* Due Date + Marks */}
        <div
          className={`${
            assignment.status === "overdue" ? "text-[#EF4444]" : "text-[#1F1D1D]"
          } flex items-center gap-6 flex-wrap text-[12px]`}
        >
          <div className="flex items-center gap-1">
            <img
              src={assignment.status === "overdue" ? clockIcon : blackClock}
              alt="clock"
              className="w-[13px] h-[13px]"
            />
            <span className="text-[14px] font-[400] font-[Inter]">Due:</span>
            <span className="font-[Inter] text-[14px]">
              {new Date(assignment.dueDate).toLocaleString()}
            </span>
          </div>
          {assignment.maxMarks && (
            <div className="flex items-center gap-1">
              <span className="text-[#1F1D1D] text-[14px]">
                Max Marks: {assignment.maxMarks}
              </span>
            </div>
          )}
        </div>

        {/* Late Notice */}
        {assignment.status === "overdue" && (
          <div className="my-2">
            <div className="flex rounded-[8px] gap-[8px] p-[8px] items-center bg-[#FEF2F2]">
              <img src={anti} alt="late" />
              <p className="text-[#EF4444] text-[16px] font-[400]">
                Late submissions are not allowed
              </p>
            </div>
          </div>
        )}

        {/* Instructions + Resources */}
        <div
          ref={contentRef}
          style={{ maxHeight }}
          className="overflow-hidden transition-all duration-300 ease-in-out text-[#1F1D1D] text-[14px] leading-[24px] gap-[12px]"
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-[700]">Assignment Instruction:</h3>
            {assignment.instructions ? (
              <p className="whitespace-pre-line">{assignment.instructions}</p>
            ) : (
              <p>Instructions not provided.</p>
            )}
          </div>

          {assignment.resources && assignment.resources.length > 0 && (
            <div className="flex flex-col py-[12px] gap-[12px]">
              <p className="font-[700] text-[14px]">Resources</p>
              <div className="flex flex-col gap-[8px]">
                {assignment.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex gap-[8px] rounded-[8px] p-[8px] bg-[#CFDCEB]"
                  >
                    <img src={page} alt="resource" />
                    <p className="text-[#04203E] text-[13.6px]">{resource}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View More Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 cursor-pointer w-fit mt-2"
        >
          <img src={downArrowIcon} alt="arrow" className="w-[16px] h-[9px]" />
          <p className="text-[14px] font-[400] text-[#04203E]">
            {isOpen ? "View Less" : "View More"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default ViewDetails;
