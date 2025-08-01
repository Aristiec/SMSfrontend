import { Search } from "lucide-react";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const Mcq = () => {
  const [option, setOption] = useState([]);
  const [optionInput, setOptionInput] = useState("");
  const [question, setQuestion] = useState("");
  const [mcqQuestions, setMcqQuestions] = useState([]);
  const [answer, setAnswer] = useState(null);

  const handleAddOption = () => {
    if (optionInput.trim() !== "") {
      setOption([...option, optionInput]);
      setOptionInput("");
    }
  };

  const handleAnswerSelect = (i) => {
    const selectedAnswer = option[i];
    setAnswer(selectedAnswer);
    console.log(selectedAnswer);
  };

  const handlePreview = () =>{
      
  }
  const handleNext = () => {
    const trimmedInput = optionInput.trim();
    const finalOptions = trimmedInput ? [...option, trimmedInput] : [...option];

    if (!question.trim() || finalOptions.length < 2) {
      alert("Please enter a question and at least two options.");
      return;
    }
    const newQuestion = {
      question,
      options: finalOptions,
      answer,
    };

    setMcqQuestions([...mcqQuestions, newQuestion]);
    console.log([...mcqQuestions, newQuestion]);

    // Reset for next question
    setQuestion("");
    setOption([]);
    setOptionInput("");
    setAnswer(null);
  };

  return (
    <div className="flex flex-col font-[Inter] w-full gap-8">
      <p className="font-medium text-[20px] leading-[30px] tracking-normal text-[#000000]">
        Create multiple choice questions-
      </p>
      <div className="gap-10 flex w-full items-start">
        <p className="font-medium text-[20px] leading-[30px] tracking-normal py-2 text-[#000000]">
          {mcqQuestions.length + 1}.
        </p>
        <div className="flex flex-col w-full gap-7 justify-center">
          <div className="w-full rounded-[8px] border border-[#CCCCCC] py-2 px-3 gap-2 justify-center">
            <input
              placeholder="Add question..."
              className="w-full outline-none font-[Inter] font-medium text-[20px] leading-[30px] tracking-normal placeholder:text-[#CCCCCC] text-[black]"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className="flex flex-col rounded-[8px] border border-[#CCCCCC] p-6 gap-6 ">
            {option.map((item, index) => (
              <div
                key={index}
                className="flex w-full items-center rounded-[8px] border border-[#CCCCCC] p-4 gap-6 "
              >
                <div
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-3 h-3 border  border-[#CCCCCC] rounded-full ${
                    answer === item ? "bg-[#10B981] border-[#10B981]" : ""
                  }`}
                ></div>
                <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
                  {item}
                </p>
              </div>
            ))}
            <div className="flex rounded-[8px] items-center  gap-6">
              <div className="flex  rounded-[8px] border border-[#CCCCCC] p-4 items-center  gap-6  w-full">
                <div className="w-3 h-3 border  border-[#CCCCCC] rounded-full"></div>
                <input
                  placeholder="Enter your answer"
                  className="font-[400] text-[16px] outline-none leading-[24px] tracking-normal placeholder:text-[#CCCCCC] text-[black] "
                  value={optionInput}
                  onChange={(e) => setOptionInput(e.target.value)}
                />
              </div>
            </div>

            <div className="flex">
              <button
                onClick={handleAddOption}
                className="flex py-2 px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center "
              >
                <Plus size={11} />
                <p className="font-[500] text-[16px] leading-[24px] tracking-normal text-[#717171]">
                  Add Option
                </p>
              </button>
            </div>
          </div>
          <div className="flex  justify-between w-full gap-7">
            <button onClick={()=>handlePreview(inde)} className="w-full flex  py-3 px-7 gap-2 bg-[#04203E] rounded-[8px] items-center justify-center">
              <p className="font-[Inter] font-medium text-[20px] leading-6 tracking-normal text-[#FAFCFD]">
                Preview
              </p>
            </button>
            <button
              onClick={handleNext}
              disabled={!question.trim() || option.length < 2}
              className={`w-full flex py-3 px-7 gap-2 rounded-[8px] items-center justify-center transition 
    ${
      !question.trim() || option.length < 2
        ? "bg-gray-300 cursor-not-allowed text-[#999999]"
        : "bg-[#04203E] text-[#FAFCFD] hover:bg-[#031a31]"
    }`}
            >
              <p className="font-[Inter] font-medium text-[20px] leading-6 tracking-normal text-[#FAFCFD]">
                Create New Question
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcq;
