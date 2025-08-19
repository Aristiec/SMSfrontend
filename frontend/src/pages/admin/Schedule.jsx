import React, { useState } from "react";
import { Calendar } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";
import TimetableGrid from "../../components/admin/tabletimegrid.jsx/grid";

export default function Timetable() {
  const [course, setCourse] = useState("");
  const [section, setSection] = useState("");
  const [semester, setSemester] = useState("");
  const [grid, setGrid] = useState(false);

  return (
    <>
      <div className="bg-[#0A2A47] text-white text-xl font-semibold  font-Merriweather px-6 py-4 rounded-md shadow">
        Timetable
      </div>

      {/* Filters */}

      <div className="bg-white mt-4 p-6 rounded-lg shadow">
        <div className="flex flex-wrap items-center gap-6">
          {/* Course Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <div className="flex items-center gap-2">
              <Dropdown
                options={["B.Tech", "M.Tech", "MBA", "BBA"]}
                onSelect={(value) => setCourse(value)}
                placeholder="Select Course"
                selected={course}
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                spanClassName="truncate"
              />
            </div>
          </div>

          {/* Section Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Section
            </label>
            <div className="flex items-center gap-2">
              <Dropdown
                options={["A", "B", "C", "D"]}
                onSelect={(value) => setSection(value)}
                placeholder="Select Section"
                selected={section}
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                spanClassName="truncate"
              />
            </div>
          </div>

          {/* Semester Dropdown */}
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Semester
            </label>
            <div className="flex items-center gap-2">
              <Dropdown
                options={[
                  "Semester 1",
                  "Semester 2",
                  "Semester 3",
                  "Semester 4",
                ]}
                onSelect={(value) => setSemester(value)}
                placeholder="Select Semester"
                selected={semester}
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                spanClassName="truncate"
              />
            </div>
          </div>

          {/* Generate Grid Button */}
          <div className="self-end flex flex-col">
            <button
              disabled={!course || !section || !semester}
              className={`px-6 py-2 rounded-md shadow font-medium ${
                course && section && semester
                  ? "bg-[#0A2A47] text-white hover:bg-[#0A2A47]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              onClick={() => setGrid(true)}
            >
              <Calendar size={16} className="inline mr-2" />
              Generate Grid
            </button>
          </div>
        </div>
      </div>
      <br />

      {grid == false ? (
        <div className="min-h-screen bg-gray-50 p-6">
          {/* Empty State */}
          <div className="bg-white mt-6 p-10 rounded-lg shadow flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10m-12 4h14M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-gray-700 font-medium">
              No timetable found for this course
            </p>
            <p className="text-gray-500 text-sm">
              Use the dropdowns above to start scheduling classes.
            </p>
          </div>
        </div>
      ) : (
        <TimetableGrid setGrid={setGrid} />
      )}
    </>
  );
}
