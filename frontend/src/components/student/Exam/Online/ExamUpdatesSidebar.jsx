import React from "react";
import { AlertCircle } from "lucide-react";
const ExamUpdatesSidebar = ({ updates }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border">
    <div className="flex items-center space-x-2 mb-6">
      <AlertCircle className="w-5 h-5 text-blue-600" />
      <h2 className="text-lg font-semibold text-gray-900">Exam Updates</h2>
    </div>

    <div className="space-y-4">
      {updates.map((update, index) => (
        <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
          <div className="flex items-start space-x-2">
            <div
              className={`w-2 h-2 rounded-full mt-2 ${
                update.type === "live"
                  ? "bg-red-500"
                  : update.type === "reminder"
                  ? "bg-orange-500"
                  : "bg-blue-500"
              }`}
            ></div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm">
                {update.title}
              </h3>
              <p className="text-gray-600 text-xs mt-1">{update.message}</p>
              <span className="text-gray-500 text-xs">{update.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ExamUpdatesSidebar;
