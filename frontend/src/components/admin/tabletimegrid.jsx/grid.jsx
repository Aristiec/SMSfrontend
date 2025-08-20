import React, { useState } from "react";
import { SquarePen } from "lucide-react";
import { FileText } from "lucide-react";
import { Eye } from "lucide-react";
import { Save } from "lucide-react";
import { Send } from "lucide-react";
import { Plus } from "lucide-react";
import EditTimeSlot from "./editTimeSlot";
import ErrorBoundary from "./ErrorBoundary";

export default function TimetableGrid() {
  const [isEdit, setIsEdit] = useState(false);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = [
    "9:30 - 10:15 AM",
    "10:15 - 11:00 AM",
    "11:15 - 12:00 PM",
    "12:00 - 12:45 PM",
    "1:30 - 2:15 PM",
    "2:15 - 3:00 PM",
    "3:00 - 3:45 PM",
  ];

  const [grid, setGrid] = useState(
    days.reduce((acc, day) => {
      acc[day] = timeSlots.map(() => "");
      return acc;
    }, {})
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-4 py-2  border-1 font-[14px] border-[#1F1D1D] rounded-lg shadow-sm bg-white hover:bg-gray-100">
          <Eye size={16} className="inline mr-2" />
          Preview
        </button>

        <div className="flex gap-4">
          <button className="px-4 py-2 font-[14px] border-1 border-[#1F1D1D] rounded-md shadow-sm bg-white hover:bg-gray-100">
            <FileText size={16} className="inline mr-2" />
            Export to PDF
          </button>
          <button className="px-4 py-2 font-[14px] border-1 border-[#1F1D1D] rounded-md shadow-sm bg-white hover:bg-gray-100">
            <Save size={16} className="inline mr-2" />
            Save Draft
          </button>
          <button className="px-4 py-2 font-[14px] rounded-md shadow bg-[#0A2A47] text-white hover:bg-[#0A2A47]">
            <Send size={16} className="inline mr-2" />
            Publish Timetable
          </button>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <table className="border border-gray-300 w-full text-sm text-center">
          <thead className="bg-white">
            <tr>
              <th className="border border-gray-400 font-medium px-4 py-2 text-lg text-gray-400 text-left w-28">
                Time
              </th>
              {timeSlots.map((slot, i) => {
                const [start, end] = slot.split("-");
                return (
                  <th
                    key={i}
                    className="border border-gray-400 text-lg text-gray-400  font-medium px-2 py-2 relative align-top"
                  >
                    <div className="flex flex-col items-start leading-tight">
                      <span>{start.trim()} -</span>
                      <span>{end.trim()}</span>
                    </div>

                    <button
                      className="absolute top-4 font-bold right-10 text-gray-400 hover:text-gray-600"
                      onClick={() => setIsEdit(true)}
                    >
                      <SquarePen size={24} />
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day} className="border">
                <td className="border border-gray-400 text-gray-400  text-lg px-4 py-2  font-medium bg-white">
                  {day}
                </td>
                {timeSlots.map((_, i) => (
                  <td
                    key={i}
                    onClick={() => handleAssign(day, i)}
                    className="border border-gray-400 px-2 py-6 cursor-pointer"
                  >
                    {grid[day][i] ? (
                      <span className="text-blue-700 font-bold">
                        {grid[day][i]}
                      </span>
                    ) : (
                      <div className="border text-lg border-dashed border-gray-400 text-gray-500 py-4 rounded">
                        <span>Click to</span>
                        <br />
                        <span>assign</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Time Slot Button */}
      <div className="flex justify-end mt-4">
        <button
          className="text-gray-600 flex items-center gap-1 hover:text-gray-900"
          // onClick={() => alert("Add Time Slot functionality")}
        >
          <Plus size={20} />
          Add Time Slot
        </button>
      </div>
      {isEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-none z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsEdit(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>

            {/* Your Component */}
            <ErrorBoundary>
              <EditTimeSlot />
            </ErrorBoundary>
          </div>
        </div>
      )}
    </div>
  );
}
