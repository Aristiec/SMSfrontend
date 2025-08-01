import React, { useState } from "react";
import { X } from "lucide-react";
import StudentQueryLogo from "../../../assets/Student_Query_logo.png";
import DateQueryLogo from "../../../assets/Date_Query_logo.png";
import BatchQueryLogo from "../../../assets/batch_Query_logo.png";
import TimeQueryLogo from "../../../assets/Time_Query_logo.png";

const InProgressQuery = ({ ticket, onClose, onSubmit }) => {
  const [comment, setComment] = useState("");

  if (!ticket) return null;

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <div className="bg-white rounded-[8px] p-[24px] max-w-2xl w-full mx-4 gap-[35px] flex flex-col max-h-[100vh] overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h2 className="font-[Inter] font-semibold text-[20px] leading-[100%] text-[#1F1D1D]">
            Query Details
          </h2>
          <span className="bg-[#E9EEF4] text-[#0077FF] px-4 py-2 rounded-full font-[Inter] font-normal text-[16px] leading-[100%] inline-block w-fit">
            In process
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-[#717171] hover:text-[#1F1D1D] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Details Section */}
      <div className="bg-[#F5F6F8] rounded-[12px] p-[24px] flex justify-between gap-[44px]">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={StudentQueryLogo} alt="Student" className="w-4 h-4" />
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-[Inter] font-medium text-[16px] leading-[100%] text-[#1F1D1D]">
                Student
              </span>
              <span className="font-[Inter] font-normal text-[16px] leading-[100%] text-[#717171]">
                Aman Singh
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <img src={DateQueryLogo} alt="Date" className="w-4 h-4" />
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-[Inter] font-medium text-[16px] leading-[100%] text-[#1F1D1D]">
                Date
              </span>
              <span className="font-[Inter] font-normal text-[16px] leading-[100%] text-[#717171]">
                {ticket.date}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <img src={BatchQueryLogo} alt="Batch" className="w-4 h-4" />
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-[Inter] font-medium text-[16px] leading-[100%] text-[#1F1D1D]">
                Batch
              </span>
              <span className="font-[Inter] font-normal text-[16px] leading-[100%] text-[#717171]">
                CSE-2024
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <img src={TimeQueryLogo} alt="Time" className="w-4 h-4" />
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-[Inter] font-medium text-[16px] leading-[100%] text-[#1F1D1D]">
                Time
              </span>
              <span className="font-[Inter] font-normal text-[16px] leading-[100%] text-[#717171]">
                10:30 AM
              </span>
            </div>
          </div>
        </div>
      </div>

      

      {/* Resolve Query Section */}
      <div className="flex flex-col gap-4">
        <h3 className="font-[Inter] font-semibold text-[20px] leading-[100%] text-[#1F1D1D]">
          Resolve Query
        </h3>
        <div className="flex flex-col gap-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="border border-[#CCCCCC] rounded-[8px] p-[16px] min-h-[120px] max-h-[200px] resize-none overflow-y-auto font-[Inter] font-normal text-[16px] leading-[100%] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#0077FF]"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={!comment.trim()}
              className="bg-[#10B981] text-[#FAFCFD] rounded-[8px] px-[16px] py-[12px] font-[Inter] font-medium text-[16px] leading-[100%] hover:bg-[#0ea970] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgressQuery;
