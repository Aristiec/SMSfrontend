import React from "react";
// import { FaClock, FaDoorOpen } from "react-icons/fa";
import { MapPin, Clock } from "lucide-react";

export default function ParentPerformance() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Section - Performance */}
      <div className="bg-white rounded-xl shadow">
        {/* Header */}
        <div className="bg-[#0A2342] text-white font-[Merriweather] px-4 py-3 rounded-t-xl">
          This Months Performance
        </div>

        <div className="p-5 space-y-5">
          {/* Performance Card */}
          {[
            {
              title: "Academics",
              grade: "A",
              color: "green",
              percent: "94%",
              width: "94%",
            },
            {
              title: "Attendance",
              grade: "C",
              color: "red",
              percent: "34%",
              width: "34%",
            },
            {
              title: "Behavior",
              grade: "B",
              color: "orange",
              percent: "34%",
              width: "34%",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-4">
              {/* Top Row */}
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-[#1F1D1D]">{item.title}</h4>
                <div className="flex items-center space-x-2">
                  <span
                    className={`border rounded-full px-2 text-xs font-bold text-${item.color}-600 border-${item.color}-500`}
                  >
                    {item.grade}
                  </span>
                  <span className="text-[#1F1D1D] font-semibold">
                    {item.percent}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-[90%] bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-[#0A2342] h-3 rounded-full"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Notice and Announcements */}
      <div className="bg-white rounded-xl shadow">
        {/* Header */}
        <div className="bg-[#0A2342] text-white font-[Merriweather] px-4 py-3 rounded-t-xl">
          Notice and Announcements
        </div>

        <div className="p-5 space-y-6">
          {/* Parent Teacher Meeting */}
          <div>
            <h3 className="flex items-center font-semibold text-gray-900 mb-3">
              <Clock className="mr-2 text-[#1F1D1D]" size={21} /> Parent Teacher
              Meeting
            </h3>

            {/* Individual Meeting */}
            <div className="bg-[#ECFDF7] rounded-lg p-4 flex justify-between items-start mb-3">
              <div>
                <h4 className="font-semibold text-[#1F1D1D]">
                  Individual Meeting
                </h4>
                <p className="text-sm text-[#1F1D1D]">
                  One on one discussion with subject teachers
                </p>
                <p className="flex items-center text-sm text-[#1F1D1D] mt-1">
                  <MapPin className="mr-1 text-gray-800" size={16} /> Room 501
                </p>
              </div>
              <div className="text-right text-sm text-[#1F1D1D]">
                <p>2/15/2024</p>
                <p>12:00 PM</p>
              </div>
            </div>

            {/* Group Meeting */}
            <div className="bg-[#ECFDF7] rounded-lg p-4 flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-[#1F1D1D]">Group Meeting</h4>
                <p className="text-sm text-[#1F1D1D]">
                  General discussion about progress and rules
                </p>
                <p className="flex items-center text-sm text-[#1F1D1D] mt-1">
                  <MapPin className="mr-1 text-gray-800" size={16} /> Room 502
                </p>
              </div>
              <div className="text-right text-sm text-[#1F1D1D]">
                <p>2/15/2024</p>
                <p>12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Events and Holidays */}
          <div>
            <h3 className="flex items-center font-semibold text-gray-900 mb-3">
              <Clock className="mr-2 text-[#1F1D1D]" size={21} /> Events and
              Holidays
            </h3>

            <div className="bg-[#E9EEF4] rounded-lg p-4 flex justify-between items-center mb-2">
              <span className="font-medium text-[#1F1D1D]">Republic Day</span>
              <span className="text-sm text-[#1F1D1D]">2/15/2024</span>
            </div>

            <div className="bg-[#E9EEF4] rounded-lg p-4 flex justify-between items-center">
              <span className="font-medium text-[#1F1D1D]">Holikadahan</span>
              <span className="text-sm text-[#1F1D1D]">3/15/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
