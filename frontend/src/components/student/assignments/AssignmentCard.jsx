import React, { useState, useRef, useEffect } from "react";

import {
  Ban,
  ChevronDown,
  Clock,
  File,
  AlertCircle,
  CheckCircle,
  ChevronUp,
} from "lucide-react";

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
              {assignment.status === "overdue" ? (
                <Ban className="w-4 h-4 text-[#EF4444]" />
              ) : assignment.status === "pending" ? (
                <AlertCircle className="w-4 h-4 text-[#F97316]" />
              ) : (
                <CheckCircle className="w-5 h-5 text-[#10B981] " />
              )}
              <p
                className="text-[16px] font-[600] font-[Inter] leading-[20px] flex items-center"
                style={{ color: getStatusColor() }}
              >
                {assignment.status.charAt(0).toUpperCase() +
                  assignment.status.slice(1)}
              </p>
            </div>
          </div>


          {/* Middle Section */}
          <div className="flex items-center gap-6 flex-wrap text-[14px]">
            <div
              className={`flex items-center gap-1 ${
                assignment.status === "overdue"
                  ? "text-[#EF4444]"
                  : "text-[#1F1D1D]"
              } `}
            >
              <Clock
                className="w-4 h-4"
                style={{
                  color:
                    assignment.status === "overdue"
                      ? "text-[#EF4444]"
                      : "text-[#1F1D1D]",
                }}
              />
              <span className="font-[400]">Due:</span>
              <span className={`font-[400] `}>{assignment.dueDate}</span>
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
            <div className="flex flex-col gap-1 ">
              <h3 className=" font-[700]  flex items-center ">
                Assignment Instruction:
              </h3>
              <p className=" flex items-center">
                Read the full play with focus on key scenes (witches,
                soliloquies, Lady Macbeth’s arc, final act). Choose focus area:
              </p>
              <ul className="  list-disc list-inside">
                <li>Theme (e.g., ambition, guilt, fate vs free will)</li>
                <li>Character (e.g., Macbeth, Lady Macbeth)</li>
                <li>
                  Literary device (e.g., symbolism, motifs, foreshadowing)
                </li>
              </ul>
              <p>
                Review at least 3 academic sources (books, journals, essays).
              </p>
              <p>Summarize and analyze the views of each critic.</p>
              <p>
                Add your own interpretation and compare it with critics’ views.
              </p>
              <p>
                Discuss modern relevance of the play or chosen theme/character.
              </p>
              <p>
                Write 1000–1500 words, properly structured with intro, body, and
                conclusion.
              </p>
              <p>Use quotes from the play to support analysis.</p>
              <p>
                Follow formatting rules: Times New Roman, 12pt, 1.5 spacing,
                submit as PDF or Word.
              </p>
              <p>Include references (MLA/APA/Chicago style).</p>
            </div>

            <div className="flex flex-col py-[12px] gap-[12px] font-[Inter]">
              <p className="font-[700] text-[14px] leading-[24px] tracking-[0] flex items-center text-[#1F1D1D]">
                Recourses
              </p>
              <div className="flex flex-col gap-[8px]">

                {assignment.files && assignment.files.length > 0 ? (
                  assignment.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex gap-[8px] rounded-[8px] p-[8px] bg-[#CFDCEB]"
                    >
                      <File />
                      <p className="font-[400] text-[13.6px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                        {file}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="font-[400] text-[13.6px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                    No files available
                  </p>
                )}
              </div>
            </div>
          </div>


          {/* Toggle Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 cursor-pointer w-fit"
          >

            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
            <p className="text-[14px] font-[400] text-[#04203E]">
              {isOpen ? "View Less" : "View More"}
            </p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ViewDetails;
