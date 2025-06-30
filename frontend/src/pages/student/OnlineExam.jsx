import React, { useState } from "react";
import { Clock3, Save, RotateCw } from "lucide-react";
import { mockQuestions } from "../../data/mockQuestionData.js";

const OnlineExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState(mockQuestions);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleNext = () => {
    if (selectedAnswer !== null) {
      setQuestions((prev) =>
        prev.map((q, i) => {
          if (i === currentQuestion - 1) {
            return {
              ...q,
              selectedAnswer: selectedAnswer,
              status: "answered",
            };
          }
          return q;
        })
      );
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    if (currentQuestion === mockQuestions.length) {
      setCurrentQuestion(1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
    setSelectedAnswer(null);
    if (currentQuestion === 1) {
      setCurrentQuestion(mockQuestions.length);
    }
  };

  const handleClear = () => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i === currentQuestion - 1) {
          return {
            ...q,
            selectedAnswer: null,
            status: "unanswered",
          };
        }
        return q;
      })
    );
    setSelectedAnswer(null);
  };

  const handleReview = () => {
    setQuestions((prev) =>
      prev.map((q, i) => {
        if (i === currentQuestion - 1) {
          return {
            ...q,
            status: "reviewed",
          };
        }
        return q;
      })
    );
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    if (currentQuestion === mockQuestions.length) {
      setCurrentQuestion(1);
    }
  };

  return (
    <div className="bg-[#FAFCFD] py-10 px-12">
      <div className="px-6 flex gap-60  border border-[#71717199] rounded-[8px] justify-between">
        <div className="py-4 flex gap-9 ">
          <div className="flex gap-4  ">
            <Clock3 size={20} color="#10B981" />
            <p className="font-[Inter] font-[400] text-4 leading-6 tracking-normal text-[#10B981]">
              01:00:24 Time remaining
            </p>
          </div>
          <div className="h-full border border-[#717171]"></div>
          <div className="flex flex-col gap-2">
            <p className="font-[Inter] font-[700] text-[20px] leading-7 tracking-normal text-[#1F1D1D]">
              Database Management System
            </p>
            <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#71717199] font-[Inter]">
              Asha Singh - 1RUB203020
            </p>
          </div>
        </div>
        <div className="flex gap-9 items-center">
          <div className="flex gap-4 items-center">
            <Save size={14} color="#71717199" />
            <p className="font-[Inter] font-[400] text-4 leading-6 tracking-normal text-[#71717199]">
              All responses are saved
            </p>
          </div>
          <button className="rounded-[8px] p-4 gap-2 bg-[#04203E] hover:cursor-pointer ">
            <p className="text-[#FAFCFD] text-[16px] leading-6 font-[600] font-[Inter]">
              Finish Examination
            </p>
          </button>
        </div>
      </div>
      <div className="w-full flex gap-36">
        <div className=" w-1/4 flex flex-col gap-[60px]">
          <div className="flex justify-between">
            <p className=" text-[16px] font-[Inter] font-medium leading-6 tracking-normal text-[#1F1D1D]">
              Progress
            </p>
            <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
              0%
            </p>
          </div>
          <div className="flex justify-between rounded-[8px] py-2 px-4 border-1 border-[#71717199]">
            <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
              Section A - MCQ
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
              Question navigator
            </p>
            <div className="grid grid-cols-5 gap-4">
              {questions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index + 1)}
                  className={`flex items-center justify-center rounded-[8px] py-2 px-4 border-2 gap-2 font-[Inter] font-medium text-[16px] leading-6 tracking-normal
   
    ${
      question.status === "answered"
        ? "bg-[#10B981] text-[#FAFCFD]"
        : question.status === "reviewed"
        ? "bg-[#F97316] text-[#FAFCFD]"
        : currentQuestion === index + 1
        ? "bg-[#CFDCEB] text-black"
        : "bg-white text-[#1F1D1D]"
    }
     ${
       currentQuestion === index + 1
         ? "border-[#0077FF] "
         : "border-[#71717199] "
     }
    `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="size-4 rounded-full bg-[#10B981]"></div>
              <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                Answered
              </p>
            </div>
            <div className="flex gap-3">
              <div className="size-4 rounded-full bg-[#F97316]"></div>
              <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                Marked for Review
              </p>
            </div>
            <div className="flex gap-3">
              <div className="size-4 rounded-full bg-white border border-[#71717199]"></div>
              <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                Unanswered
              </p>
            </div>
          </div>
        </div>
        <div className="pt-10 gap-10  flex flex-col w-full">
          <div className="w-full flex items-center justify-end">
            <button
              onClick={handleReview}
              className="rounded-[8px] py-2 px-4 gap-3 border border-[#71717199] cursor-pointer flex"
            >
              <div className=" size-4 rounded-full bg-[#F97316]"></div>
              <p className="font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] flex items-center">
                Marked for Review
              </p>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {questions.map(
              (question, index) =>
                currentQuestion === question.id && (
                  <div
                    key={index}
                    className="flex flex-col p-6 gap-6 rounded-[8px] border border-[#71717199]"
                  >
                    <p className="font-[Inter] text-xl font-medium leading-7 tracking-normal text-[#1F1D1D]">
                      {question.question}
                    </p>

                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index + 1)}
                        className="flex gap-6 p-4 rounded-[8px] border border-[#717171] items-center cursor-pointer"
                      >
                        <div className="size-3 rounded-full border border-[#717171]"></div>
                        <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                          {option}
                        </p>
                      </button>
                    ))}
                  </div>
                )
            )}
            <div className="flex justify-between">
              <button
                onClick={handleClear}
                className="py-2 items-center cursor-pointer px-4 rounded-[8px] border border-[#71717199] gap-3 flex"
              >
                <RotateCw size={16} color="#1F1D1D" />
                <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#717171]">
                  Clear Answer
                </p>
              </button>
              <div className="flex justify-between gap-4">
                <button
                  onClick={handlePrevious}
                  className="py-2 px-3 bg-[#CFDCEB] rounded-[8px] gap-2  cursor-pointer"
                >
                  <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#717171]">
                    Previous
                  </p>
                </button>
                <button
                  onClick={handleNext}
                  className="py-2 px-9 bg-[#1F1D1D] rounded-[8px] gap-2 cursor-pointer "
                >
                  <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#FAFCFD]">
                    Next
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineExam;
