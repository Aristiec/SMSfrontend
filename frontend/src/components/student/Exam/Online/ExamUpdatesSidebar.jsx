import React from "react";
import { AlertCircle, Bell } from "lucide-react";
const ExamUpdatesSidebar = ({ updates }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col h-full">
    <div className="flex items-center space-x-2 mb-6">
      <Bell className="w-5 h-5 text-[#1F1D1D]" />
      <h2 className="text-[20px] font-[Inter] font-semibold text-[#1F1D1D]">
        Exam Updates
      </h2>
    </div>

    {/* Make this container grow to fill remaining space */}
    <div className="flex-1 flex flex-col">
      {/* Notifications list */}
      <div className="space-y-4 overflow-y-auto flex-1">
        {updates.map((update, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              update.type === "live" ? "bg-[#FEF2F2]" : "bg-[#F4F7FA]"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle
                className={`w-5 h-5 ${
                  update.type === "live" ? "text-red-500" : "text-[#1F1D1D]"
                }`}
              />
              <h3 className="font-medium font-[Inter] text-[#1F1D1D] text-[16px]">
                {update.title}
              </h3>
            </div>

            <p className="text-[#1F1D1D] text-[12px] font-[Inter] leading-relaxed mb-1">
              {update.message}
            </p>
            <span className="text-[#717171] font-[Inter] text-[12px]">
              {update.time}
            </span>
          </div>
        ))}
      </div>

      {updates.length < 1 && <div className="flex-grow"></div>}
    </div>
  </div>
);

export default ExamUpdatesSidebar;
