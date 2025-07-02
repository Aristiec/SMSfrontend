import React, { useState, useEffect } from "react";
import {
  Clock,
  AlertCircle,
  Settings,
  Book,
  FileText,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnGoingExam = ({ exam, onSystemCheck, onStartExam }) => {
  const [timeLeft, setTimeLeft] = useState(exam.timeLeft);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-[#FAFCFD] rounded-lg p-6 shadow-sm ">
      <h2 className="text-[20px] font-[Inter] font-semibold text-[#1F1D1D] mb-6">
        Ongoing Exam
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-[16px] font-semibold text-[#1F1D1D]">
            {exam.title}
          </h3>
          <p className="text-[#1F1D1D] text-[14px] font-medium">
            {exam.subject}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1 text-[12px] font-[Inter] text-[#717171]">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#717171]" />
            <span>{exam.duration} minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-[#717171]" />
            <span>{exam.questions} questions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Book className="w-4 h-4 text-[#717171]" />
            <span>Theory</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{exam.totalMarks} marks</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 rounded-lg">
          <Calendar className="w-4 h-4 text-[#1F1D1D]" />
          <span className="text-[#1F1D1D] font-[Inter]">{exam.date}</span>
          <div className=" w-3 h-3 bg-[#10B981] rounded-full"></div>
          <span className="text-[#1F1D1D] font-medium text-[16px]">
            Ongoing - Ends at {exam.endTime}
            <span className="text-[12px] text-[#EF4444] font-[Inter] font-bold">
              {" "}
              ({timeLeft} minutes left)
            </span>
          </span>
        </div>

        <div className="p-3 bg-[#FFF4ED] border border-[#FFF4ED] rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-[#F97316]" />
            <span className="text-[#F97316] text-[14px] font-[Inter]">
              System check must be completed before you can begin the exam
            </span>
          </div>
        </div>

        <div className="flex space-x-3 pt-4 border-t border-[#71717166]">
          <button
            onClick={() => navigate("/student/exam/preexam")}
            className="flex-1 bg-[#04203E] text-[#FAFCFD] px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span className="text-[16px] font-[Inter]">
              Run System Check Now
            </span>
          </button>
          <button
            onClick={onStartExam}
            disabled={!exam.systemCheckComplete}
            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
              exam.systemCheckComplete
                ? "bg-[#CFDCEB] text-[#717171]"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Start Examination</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnGoingExam;
