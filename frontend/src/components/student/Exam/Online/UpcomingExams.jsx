import React from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
const UpcomingExams = ({ exams, selectedType, onTypeChange }) => (
  <div className="bg-white rounded-lg shadow-sm ">
    <div className="flex items-center justify-between p-6 border-b">
      <div className="flex space-x-6">
        <button
          className={`pb-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
            selectedType === "upcoming"
              ? "border-slate-800 text-slate-800"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => onTypeChange("upcoming")}
        >
          <Clock className="w-4 h-4" />
          <span>Upcoming</span>
        </button>
        <button
          className={`pb-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
            selectedType === "completed"
              ? "border-slate-800 text-slate-800"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => onTypeChange("completed")}
        >
          <CheckCircle className="w-4 h-4" />
          <span>Completed</span>
        </button>
      </div>

      <select
        className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {selectedType === "upcoming"
              ? "No Upcoming Exams"
              : "No Completed Exams"}
          </h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
            {selectedType === "upcoming"
              ? "There are no exams scheduled at the moment. Use this time to focus on your coursework or complete pending assignments."
              : "You haven't completed any exams yet. Check back after taking your first exam."}
          </p>

          {selectedType === "upcoming" && (
            <div className="flex justify-center space-x-3">
              <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center space-x-2">
                <span>📚</span>
                <span>Study Resources</span>
              </button>
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center space-x-2">
                <span>📝</span>
                <span>Go to Assignments</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-900 text-base">
                  {exam.title}
                </h3>
                {exam.backlog && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                    Backlog
                  </span>
                )}
              </div>

              <p className="text-gray-700 font-medium mb-3">{exam.subject}</p>

              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{exam.duration} minutes</span>
                  <span className="ml-4">{exam.questions} questions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 flex items-center justify-center">
                    {exam.type === "Quiz" ? "📝" : "💻"}
                  </span>
                  <span>{exam.type}</span>
                  <span className="ml-4">{exam.marks} marks</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">{exam.date}</span>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    exam.status === "Starting soon"
                      ? "bg-orange-100 text-orange-600"
                      : exam.status === "Scheduled"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {exam.status}
                </span>
              </div>

              <button className="w-full bg-slate-800 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Set Reminder</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default UpcomingExams;
