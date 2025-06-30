import React, { useState, useEffect } from "react";
import { Clock, AlertCircle, Settings } from "lucide-react";

const OnGoingExam = ({ exam, onSystemCheck, onStartExam }) => {
  const [timeLeft, setTimeLeft] = useState(exam.timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Ongoing Exam</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{exam.title}</h3>
          <p className="text-gray-600">{exam.subject}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>{exam.duration} minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{exam.questions} questions</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Theory</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{exam.totalMarks} marks</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-blue-800 font-medium">
            Ongoing - Ends at {exam.endTime} ({timeLeft} minutes left)
          </span>
        </div>

        <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-orange-600" />
            <span className="text-orange-800 text-sm">
              System check must be completed before you can begin the exam
            </span>
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            onClick={onSystemCheck}
            className="flex-1 bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Settings className="w-4 h-4" />
            <span>Run System Check Now</span>
          </button>
          <button
            onClick={onStartExam}
            disabled={!exam.systemCheckComplete}
            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
              exam.systemCheckComplete
                ? "bg-blue-600 text-white hover:bg-blue-700"
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
