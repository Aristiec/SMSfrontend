import React, { useState } from "react";
import Dropdown from "../../utils/Dropdown";

const ApplyMarks = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const handleQuestionSelect = (option) => {
    setSelectedQuestion(option);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-[#FFFFFF] rounded-lg p-6 shadow-md space-y-6">
      {/* Heading */}
      <h2 className="text-[20px] font-semibold text-[#1F1D1D] font-[Inter]">
        Schedule New Exams
      </h2>

      {/* Form */}
      <div className="space-y-6">
        {/* Custom Dropdown for Question Number */}
        <div className="space-y-3">
          <div className="text-[16px] text-[#1F1D1D] font-normal font-[Inter]">
            Question Number
          </div>
          <Dropdown
            options={["Q1", "Q2", "Q3"]}
            placeholder="Select question number"
            selected={selectedQuestion}
            onSelect={handleQuestionSelect}
          />
        </div>

        {/* Total Marks */}
        <div className="space-y-3">
          <div className="text-[16px] text-[#1F1D1D] font-normal">
            Total Marks
          </div>
          <input
            type="number"
            value="2"
            readOnly
            className="w-full border border-[#CCCCCC] rounded-lg px-4 py-3 text-[16px] font-normal text-[#1F1D1D] outline-none"
          />
        </div>

        {/* Marks Obtained */}
        <div className="space-y-3">
          <div className="text-[16px] text-[#1F1D1D] font-normal">
            Marks Obtained
          </div>
          <input
            type="number"
            placeholder="Enter the marks"
            className="w-full border border-[#CCCCCC] rounded-lg px-4 py-3 text-[16px] font-normal text-[#1F1D1D] outline-none"
          />
        </div>
      </div>

      {/* Finish Button */}
      <button className="w-full bg-[#04203E] text-[#FFFFFF] font-semibold text-[16px] py-3 rounded-lg transition-colors">
        Finish
      </button>
    </div>
  );
};

export default ApplyMarks;
