import React, { useEffect, useState } from "react";
import {
  Clock3,
  Save,
  RotateCw,
  FileScan,
  Calendar,
  Files,
  File,
} from "lucide-react";
import {
  mockQuestions,
  mockSubjectiveQuestions,
} from "../../../../../data/mockQuestionData.js";
import Dropdown from "../../../../utils/Dropdown.jsx";

const OnlineExam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState(mockQuestions);
  const [subjectiveQuestion, setSubjectiveQuestion] = useState(
    mockSubjectiveQuestions
  );
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [subjectiveAnswer, setSubjectiveAnswer] = useState("");
  const [showSubjective, setShowSubjective] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const currentSetOfQuestions = showSubjective ? subjectiveQuestion : questions;
  const setCurrentSetOfQuestions = showSubjective
    ? setSubjectiveQuestion
    : setQuestions;
  const handleNext = () => {
    if (!showSubjective) {
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

      setCurrentQuestion((prev) =>
        prev === mockQuestions.length ? 1 : prev + 1
      );
      setSelectedAnswer(null);

      // subjective next
    } else {
      if (selectedFile === null && subjectiveAnswer.trim() !== "") {
        setSubjectiveQuestion((prev) =>
          prev.map((q, i) => {
            if (i === currentQuestion - 1) {
              return {
                ...q,
                subjectiveAnswer: subjectiveAnswer,
                status: "answered",
              };
            }
            return q;
          })
        );
      } else {
        if (selectedFile !== null) {
          setSubjectiveQuestion((prev) =>
            prev.map((q, i) => {
              if (i === currentQuestion - 1) {
                return {
                  ...q,
                  status: "answered",
                  file: selectedFile,
                };
              }
              return q;
            })
          );
        }
      }
      setCurrentQuestion((prev) =>
        prev === mockSubjectiveQuestions.length ? 1 : prev + 1
      );
      setSubjectiveAnswer("");
      setSelectedFile(null);
    }
  };

  const handlePrevious = () => {
    const newIndex =
      currentQuestion === 1
        ? currentSetOfQuestions.length
        : currentQuestion - 1;

    setCurrentQuestion(newIndex);

    if (!showSubjective) {
      const previousAnswer = questions[newIndex - 1]?.selectedAnswer || null;
      setSelectedAnswer(previousAnswer);
    } else {
      const prevQuestion = subjectiveQuestion[newIndex - 1];
      setSubjectiveAnswer(prevQuestion?.subjectiveAnswer || "");
      setSelectedFile(prevQuestion?.file || null);
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

    setSubjectiveQuestion((prev) =>
      prev.map((q, i) => {
        if (i === currentQuestion - 1) {
          return {
            ...q,
            subjectiveAnswer: "",
            status: "unanswered",
            file: null,
          };
        }
        return q;
      })
    );
    setSubjectiveAnswer("");
    setSelectedFile(null);
  };

  const handleReview = () => {
    setCurrentSetOfQuestions((prev) =>
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
    setSubjectiveAnswer("");
    setSelectedFile(null);
    if (currentQuestion === mockQuestions.length) {
      setCurrentQuestion(1);
    }
  };

  const handleSelect = (selectedAnswer, index) => {
    if (index === 0) {
      setShowSubjective(false);
    } else setShowSubjective(true);
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
        <div className=" w-1/4 flex flex-col gap-[60px] pt-10">
          <div className="flex justify-between">
            <p className=" text-[16px] font-[Inter] font-medium leading-6 tracking-normal text-[#1F1D1D]">
              Progress
            </p>
            <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
              0%
            </p>
          </div>
          <Dropdown
            options={["Section A - MCQ", "Section B - Subjective"]}
            placeholder={"Section A - MCQ"}
            onSelect={handleSelect}
          />
          <div className="flex flex-col gap-6">
            <p className="font-[Inter] font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
              Question navigator
            </p>
            <div className="grid grid-cols-5 gap-4">
              {currentSetOfQuestions.map((question, index) => (
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
            <div className="flex gap-3 items-center">
              <div className="size-4 rounded-full bg-[#10B981]"></div>
              <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                Answered
              </p>
            </div>
            <div className="flex gap-3 items-center ">
              <div className="size-4 rounded-full bg-[#F97316]"></div>
              <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                Marked for Review
              </p>
            </div>
            <div className="flex gap-3 items-center">
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
              className="rounded-[8px] py-2 px-4 gap-3 border border-[#71717199] cursor-pointer flex items-center"
            >
              <div className=" size-4 rounded-full bg-[#F97316]"></div>
              <p className="font-[Inter] font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] flex items-center">
                Marked for Review
              </p>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {currentSetOfQuestions.map(
              (question, index) =>
                currentQuestion === question.id && (
                  <div
                    key={index}
                    className="flex flex-col p-6 gap-6 rounded-[8px] border border-[#71717199]"
                  >
                    <p className="font-[Inter] text-xl font-medium leading-7 tracking-normal text-[#1F1D1D]">
                      {question.question}
                    </p>

                    {!showSubjective &&
                      question?.options?.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedAnswer(index + 1)}
                          className="flex gap-6 p-4 rounded-[8px] border border-[#717171] items-center cursor-pointer"
                        >
                          <div
                            className={`size-3 rounded-full border border-[#717171] ${
                              selectedAnswer === index + 1 ? "bg-[black]" : ""
                            }`}
                          ></div>
                          <p className="font-[400] text-[16px] leading-6 tracking-normal text-[#1F1D1D] ">
                            {option}
                          </p>
                        </button>
                      ))}

                    {showSubjective && (
                      <div className="flex flex-col gap-4">
                        <textarea
                        key={currentQuestion}
                          value={subjectiveAnswer || subjectiveQuestion.find(
                        (q) => q.id === currentQuestion - 1
                      )?.answer}  
                          onChange={(e) => setSubjectiveAnswer(e.target.value)}
                          placeholder="Write your answer in the given space"
                          className="w-full p-4 h-[256px] resize-none overflow-y-scroll scrollbar-hide rounded-[8px] border border-[#717171] text-[16px] font-[400] leading-6 tracking-normal text-[#717171] "
                        />
                      </div>
                    )}
                  </div>
                )
            )}
            {showSubjective && (
              <div className="flex gap-6 justify-center w-full items-center">
                <div className="flex-1 h-px bg-[#717171] mx-2 w-[190px]"></div>
                <div>or</div>
                <div className="flex-1 h-px bg-[#717171] mx-2 w-[190px] "></div>
              </div>
            )}

            {showSubjective && (
              <div className="border border-[#71717199] bg-[#FAFCFD] rounded-[8px] p-6 flex gap-4 flex-col">
                <p className="flex gap-4 font-[Inter] font-[600] text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
                  Upload File
                </p>
                <div className="flex gap-2 flex-col">
                  <div className="flex gap-2 items-center">
                    <FileScan size={12} color="#717171" />
                    <p className="font-[Inter] font-medium text-[12px] leading-4 tracking-[-2%] text-[#717171]">
                      Make a clean scan of your file
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Calendar size={12} color="#717171" />
                    <p className="font-[Inter] font-medium text-[12px] leading-4 tracking-[-2%] text-[#717171]">
                      Mar 16, 2025
                    </p>
                  </div>
                </div>

                <div
                  className={`relative rounded-lg  text-center 
                          cursor-pointer flex flex-col  p-4 gap-3  justify-center items-center  
                      `}
                >
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none rounded-lg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      fill="none"
                      stroke="rgba(4,32,62,0.4)"
                      strokeWidth="2"
                      strokeDasharray="12, 8"
                      rx="12"
                    />
                  </svg>

                  <input
                    type="file"
                    multiple
                    accept=".pdf"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setSelectedFile(file);
                      e.target.value = null;
                    }}
                    className={`absolute inset-0 w-full h-full opacity-0 z-10
                           pointer-events-auto
                        `}
                  />

                  <Files
                    className={`w-[28px] h-[28px] 
                           text-[#717171]
                        mx-auto `}
                  />
                  <p
                    className={`text-[12px]  leading-5 tracking-[-2%]
                           text-[#717171] font-[Inter] font-[400] 
                        `}
                  >
                    Upload Attachment
                  </p>
                  <p
                    className={`text-[10px]  leading-5 tracking-[-2%]
                           text-[#717171] font-[Inter] font-[400]
                        `}
                  >
                    File Limit - 5 MB . PDF
                  </p>
                </div>
              </div>
            )}

            {(selectedFile ||
              subjectiveQuestion.some(
                (q) => q.id === currentQuestion && q.file
              )) && (
              <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[8px] rounded-[8px] p-[8px] bg-[#CFDCEB]">
                  <File />
                  <p className="font-[400] text-[13.6px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                    {selectedFile?.name ||
                      subjectiveQuestion.find(
                        (q) => q.id === currentQuestion - 1
                      )?.file?.name}
                  </p>
                </div>
              </div>
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
