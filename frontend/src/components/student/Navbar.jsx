import React, { useState } from "react";
import {
  FaRegUser,
  FaClipboardList,
  FaMoneyCheckAlt,
  FaRegCalendarAlt,
  FaBook,
  FaBullhorn,
  FaChartBar,
  FaCheck,
  FaHome,
} from "react-icons/fa";
import profilePic from "../../assets/headerBG.png";

const menuItems = [
  { name: "Dashboard", icon: FaHome },
  { name: "Timetable", icon: FaRegCalendarAlt },
  { name: "Courses", icon: FaBook },
  { name: "Notices", icon: FaBullhorn },
  { name: "Assignments", icon: FaClipboardList },
  { name: "Results", icon: FaChartBar },
  { name: "Attendance", icon: FaCheck },
  { name: "Fee Payment", icon: FaMoneyCheckAlt },
  { name: "Profile", icon: FaRegUser },
];

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-[240px] h-screen bg-white shadow-md flex flex-col justify-between font-[inter] text-[16px] font-normal">
      <ul className="pt-4 flex flex-col space-y-2">
        {menuItems.map(({ name, icon: Icon }) => (
          <li
            key={name}
            onClick={() => setActive(name)}
            className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
              active === name
                ? "bg-[#04203E] text-white"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <div
              className={`flex items-center gap-3 px-5 ${
                active === name ? "translate-x-4" : ""
              } transition-all duration-200`}
            >
              <Icon />
              {name}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 p-4">
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-10 h-10 object-cover"
        />
        <div>
          <p className="font-semibold text-[#0d2d4f]">Asha Singh</p>
          <p className="text-xs text-gray-500">Student ID: 1RUB203020</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
