import React, { useState } from 'react';

function SubjectiveQuestion() {
  const [questionText, setQuestionText] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');

  return (
    <div className="p-6  ">
      {/* Header */}
      <h1 
        className="font-[Inter] font-medium text-[20px] leading-[30px] tracking-[0%] text-[#000000] mb-6"
        style={{ fontWeight: 500 }}
      >
        Create subjective questions-
      </h1>

      {/* Question Number and Input Field */}
      <div className="flex items-start gap-4 mb-6">
        <span className="text-[16px] font-medium text-[#000000] mt-3">1.</span>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Add question..."
          className="w-full h-[50px] rounded-[8px] border border-[#CCCCCC] pt-[10px] pb-[10px] pl-[12px] pr-[12px] opacity-100 gap-[10px] focus:outline-none focus:border-[#0077FF]"
        />
      </div>

      {/* Text Box for Question Description */}
      <textarea
        value={questionDescription}
        onChange={(e) => setQuestionDescription(e.target.value)}
        placeholder="Enter question description..."
        className="w-full h-[332px] rounded-[8px] border border-[#717171] p-[24px] opacity-100 gap-[24px] resize-none focus:outline-none focus:border-[#0077FF] ml-7"
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-6 ml-7">
        <button
          className="w-[620px] h-[44px] rounded-[8px] border border-[#717171] bg-[#04203E] pt-[10px] pr-[28px] pb-[10px] pl-[28px] opacity-100 gap-[10px] font-[Inter] font-medium text-[16px] leading-[24px] tracking-[0%] text-[#FAFCFD]"
          style={{ fontWeight: 500 }}
        >
          Preview
        </button>
        <button
          className="w-[620px] h-[44px] rounded-[8px] border border-[#717171] bg-[#04203E] pt-[10px] pr-[28px] pb-[10px] pl-[28px] opacity-100 gap-[10px] font-[Inter] font-medium text-[16px] leading-[24px] tracking-[0%] text-[#FAFCFD]"
          style={{ fontWeight: 500 }}
        >
          Create New Question
        </button>
      </div>
    </div>
  );
}

export default SubjectiveQuestion;