import React, { useState, useRef, useEffect } from "react";
import { Ban, ChevronDown, Clock, File } from "lucide-react";

const AssignmentCard = ({ assignment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  const getStatusColor = () => {
    switch (assignment.status) {
      case "overdue":
        return "#EF4444"; // red
      case "pending":
        return "#F97316"; // amber
      case "submitted":
        return "#10B981"; // green
      default:
        return "#6B7280"; // gray
    }
  };

  return (
    <div className="p-4 font-[Inter]">
      <div className="w-full rounded-[12px] p-6 bg-[#FAFCFD] shadow">
        <div className="flex flex-col gap-2">
          {/* Top Section */}
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-[16px] font-[500] text-[#1F1D1D]">
                  {assignment.title}
                </p>
                <p className="text-[16px] font-[400] text-[#1F1D1D]">
                  {assignment.subject}
                </p>
              </div>
              <p className="text-[12px] font-[400] text-[#1F1D1D]">
                {assignment.description}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <Clock className="w-5 h-5" />
              <p
                className="text-[16px] font-[600]"
                style={{ color: getStatusColor() }}
              >
                {assignment.status.charAt(0).toUpperCase() +
                  assignment.status.slice(1)}
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex items-center gap-6 flex-wrap text-[14px]">
            <div className="flex items-center gap-1 text-[#1F1D1D]">
              <Clock className="w-4 h-4" style={{ color: getStatusColor() }} />
              <span className="font-[400]">Due:</span>
              <span className="font-[400]">{assignment.dueDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-[400] text-[#1F1D1D]">
                Max Marks: {assignment.maxMarks}
              </span>
            </div>
          </div>

          {/* Overdue Note */}
          {assignment.status === "overdue" && (
            <div className="flex rounded-[8px] gap-[8px] p-[8px] items-center bg-[#FEF2F2]">
              <Ban className="h-4 w-4 text-[#EF4444]" />
              <p className="font-[400] text-[16px] text-[#EF4444]">
                Late submissions are not allowed
              </p>
            </div>
          )}

          {/* Expandable Content */}
          <div
            ref={contentRef}
            style={{ maxHeight }}
            className="overflow-hidden transition-all duration-300 ease-in-out text-[#1F1D1D] text-[14px]"
          >
            {/* Replace this section with actual instructions/resources if available */}
            <div className="pt-2 ">
              <h1 className="font-bold">Assignment Instructions.</h1>
              <p className="whitespace-pre-line">{assignment.instructions}</p>
            </div>
            <div className="pt-2">
              <p className="font-bold">Resources</p>
              <div className="flex flex-col gap-[8px] pt-1">
                <div className="flex gap-2 bg-[#CFDCEB] p-2 rounded">
                  <File />
                  <p className="text-[#04203E] text-[14px]">
                    {assignment.file}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >
            <ChevronDown className="w-5 h-5" />
            <p className="text-[14px] font-[400] text-[#04203E]">
              {isOpen ? "View Less" : "View More"}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
