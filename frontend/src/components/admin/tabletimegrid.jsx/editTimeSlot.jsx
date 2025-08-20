import React, { useState } from "react";
import { Trash, Save } from "lucide-react";
import Dropdown from "../../utils/Dropdown";

const EditTimeSlot = () => {
  const [semester, setSemester] = useState("");
  const [faculty, setFaculty] = useState("");

  return (
    <div className="max-w-md mx-auto p-1 bg-white ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Time Slot</h1>

      <div className="space-y-6">
        {/* Day and Time */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Monday</h2>
          <p className="text-gray-600">9:30 - 10:15 AM</p>
        </div>

        {/* Semester Dropdown */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Semester</h2>
          <Dropdown
            options={["Semester 1", "Semester 2", "Semester 3", "Semester 4"]}
            onSelect={(value) => setSemester(value)}
            placeholder="Select Semester"
            selected={semester}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            spanClassName="truncate"
          />
        </div>

        {/* Faculty Dropdown */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">Faculty</h2>
          <Dropdown
            options={[
              "Prof. Sharma",
              "Prof. Gupta",
              "Prof. Iyer",
              "Prof. Khan",
            ]}
            onSelect={(value) => setFaculty(value)}
            placeholder="Select Faculty"
            selected={faculty}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            spanClassName="truncate"
          />
        </div>

        {/* Room Input (Optional) */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-1">
            Room (Optional)
          </h2>
          <input
            type="text"
            placeholder="e.g., Room 101, Lab A"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button className="px-4 py-2 text-gray-700 font-medium border items-center justify-center border-gray-300 rounded-md hover:bg-gray-50">
            <Trash size={22} className="inline mr-2" />
            Clear Slot
          </button>
          <button className="px-4 py-2 bg-[#0A2A47] text-white font-medium rounded-md hover:bg-[#0A2A47]">
            <Save size={22} className="inline mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTimeSlot;
