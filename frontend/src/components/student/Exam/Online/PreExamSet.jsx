import React from "react";
import { CheckCircle, Clock, Shield, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const instructionCards = [
  {
    id: 1,
    title: "General Exam Guidelines",
    color: "#10B981",
    icon: <CheckCircle size={20} color="#10B981" />,
    points: [
      "Ensure that you are in a quite and well-lit room",
      "Mobile phone, Smart watch, cheating tool or any kind of external materials are strictly prohibited",
      "Keep your student ID card ready for verification",
      "Do not refresh or close the browser once the exam start",
      "Do not open multiple browser or tabs",
    ],
  },
  {
    id: 2,
    title: "Exam Duration & Submission",
    color: "#F97316",
    icon: <Clock size={20} color="#F97316" />,
    points: [
      "Duration: X minutes (auto-submit after time ends)",
      'Click "Submit" before the timer runs out',
      "Answers will auto-save every 30 seconds",
      "Do not click the browser back button or refresh during the test",
      "After submission, you will see a confirmation screen",
    ],
  },
  {
    id: 3,
    title: "Monitoring & Security",
    color: "#0077FF",
    icon: <Shield size={20} color="#0077FF" />,
    points: [
      "Your activity will be monitored via webcam and screen recording",
      "Frequent tab switching or looking away from the screen may flag your session",
      "Any suspicious behavior may result in exam termination",
    ],
  },
];

const PreExamSet = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full rounded-[12px] p-6 bg-[#FAFCFD] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.24)] gap-8 flex flex-col items-center justify-start mx-auto">
      <div className="gap-12 flex flex-col items-center">
        {/* header */}
        <div className="text-center font-bold text-[24px] leading-[36px] text-[#1F1D1D]">
          Pre-Exam Setup
        </div>

        {/* Progress Bar */}
        <div className="flex gap-3 font-[Inter]">
          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#04203E] flex items-center justify-center text-[#FAFCFD] gap-[10px]">
              1
            </div>
            <div className="text-[#04203E] font-medium text-[16px] leading-[24px]">
              Instructions
            </div>
          </div>

          {/* rectangle line */}
          <div className="w-[151px] h-[1px] bg-[#717171] border border-[#717171] mt-5"></div>

          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#CFDCEB] flex items-center justify-center text-[#717171] gap-[10px]">
              2
            </div>
            <div className="text-[#717171] font-medium text-[16px] leading-[24px]">
              System Check
            </div>
          </div>

          <div className="w-[151px] h-[1px] bg-[#717171] border border-[#717171] mt-5"></div>

          <div className="flex gap-4 items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#CFDCEB] flex items-center justify-center text-[#717171]">
              3
            </div>
            <div className="text-[#717171] font-medium text-[16px] leading-[24px]">
              Review
            </div>
          </div>
        </div>

        {/* next sectionh*/}
        <div className="rounded-[8px] border border-[#717171] p-4 px-6 flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="font-bold text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter]">
              Instructions For Exam
            </div>
            <div className="text-[#717171] text-[14px] leading-[20px] font-[Inter]">
              Please read all the instructions carefully before proceeding for
              next step
            </div>
          </div>

          {/* Cards  */}
          <div className="flex flex-col gap-4 font-[Inter]">
            {instructionCards.map((card) => (
              <div
                key={card.id}
                className="rounded-[8px] border border-[#717171] p-4 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  {card.icon}
                  <div className="font-bold text-[16px] text-[#1F1D1D]">
                    {card.title}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {card.points.map((point, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="w-[10px] h-[10px] bg-[#1F1D1D] rounded-full mt-1"></div>
                      <div className="text-[#717171] text-[16px] leading-[24px]">
                        {point}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* button div  */}

      <div className="w-[1072px]  flex justify-between pb-6 font-[Inter]">
        <div className="flex items-center gap-3 bg-[#CFDCEB] rounded-[8px] px-4 py-3 cursor-pointer">
          <ChevronLeft size={16} color="#1F1D1D" strokeWidth={2} />
          <div className="text-[#1F1D1D] font-medium text-[16px] leading-[24px]">
            Previous
          </div>
        </div>
        <div className="flex items-center bg-[#04203E] rounded-[8px] px-4 py-3 cursor-pointer">
          <button
            onClick={() => navigate("/student/preexam2")}
            className="text-[#FAFCFD] font-medium text-[16px] leading-[24px] bg-[#04203E] px-4 py-2 rounded-lg hover:bg-[#031a32] transition-colors"
          >
            I Understand, Continue to System Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreExamSet;
