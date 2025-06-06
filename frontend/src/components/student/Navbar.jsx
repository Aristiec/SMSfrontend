import React from "react";
import {
  FaUser,
  FaClipboardList,
  FaMoneyBillAlt,
  FaRegCalendarAlt,
  FaBook,
  FaBullhorn,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-[220px] min-h-screen bg-white shadow-md flex flex-col justify-between pt-4">
      <ul>
        <li className="px-5 py-3 text-[#0d2d4f] hover:bg-gray-100 font-medium flex items-center gap-3 bg-[#e9eff5] border-l-4 border-[#0d2d4f]">
          <FaCheckCircle />
          Dashboard
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaRegCalendarAlt />
          Timetable
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaBook />
          Courses
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaBullhorn />
          Notices
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaClipboardList />
          Assignments
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaChartBar />
          Results
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaCheckCircle />
          Attendance
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaMoneyBillAlt />
          Fee Payment
        </li>
        <li className="px-5 py-3 text-gray-600 hover:bg-gray-100 flex items-center gap-3">
          <FaUser />
          Profile
        </li>
      </ul>

      <div className="flex items-center gap-2 p-4 border-t mt-auto">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
        <div className="text-sm text-gray-700">
          <p className="font-semibold">Asha Singh</p>
          <p className="text-xs text-gray-500">Student ID: 1RUB203020</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
