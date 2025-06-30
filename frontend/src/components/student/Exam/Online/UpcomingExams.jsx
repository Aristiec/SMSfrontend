import React from "react";
import { Calendar } from "lucide-react";
const UpcomingExams = ({ exams, selectedType, onTypeChange }) => (
  <div className="bg-white rounded-lg shadow-sm border">
    <div className="flex items-center justify-between p-6 border-b">
      <div className="flex space-x-6">
        <button
          className={`pb-2 border-b-2 font-medium text-sm ${
            selectedType === "upcoming"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => onTypeChange("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`pb-2 border-b-2 font-medium text-sm ${
            selectedType === "completed"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => onTypeChange("completed")}
        >
          Completed
        </button>
      </div>

      <select
        className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue=""
      >
        <option value="">Select Exam Type</option>
        <option value="mid-term">Mid-Term</option>
        <option value="final">Final</option>
        <option value="practical">Practical</option>
      </select>
    </div>

    <div className="p-6">
      {exams.length === 0 ? (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-600">No {selectedType} exams found</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {exams.map((exam, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{exam.title}</h3>
                  <p className="text-sm text-gray-600">{exam.subject}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {exam.date} • {exam.time}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    exam.status === "scheduled"
                      ? "bg-blue-100 text-blue-800"
                      : exam.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {exam.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default UpcomingExams;
