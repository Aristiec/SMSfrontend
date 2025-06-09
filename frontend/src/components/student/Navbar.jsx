import React, { useState } from "react";
import { Link } from "react-router-dom";
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

// Updated with route paths
const menuItems = [
  { name: "Dashboard", icon: FaHome, path: "/dashboard" },
  { name: "Timetable", icon: FaRegCalendarAlt, path: "/timetable" },
  { name: "Courses", icon: FaBook, path: "/courses" },
  { name: "Notices", icon: FaBullhorn, path: "/notices" },
  { name: "Assignments", icon: FaClipboardList, path: "/assignments" },
  { name: "Results", icon: FaChartBar, path: "/results" },
  { name: "Attendance", icon: FaCheck, path: "/attendance" },
  { name: "Fee Payment", icon: FaMoneyCheckAlt, path: "/fees" },
  { name: "Profile", icon: FaRegUser, path: "/profile" },
];

const Navbar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-[240px] h-screen bg-white shadow-md flex flex-col justify-between font-[inter] text-[16px] font-normal">
      <ul className="pt-4 flex flex-col space-y-2">
        {menuItems.map(({ name, icon: Icon, path }) => (
          <Link to={path} key={name}>
            <li
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
          </Link>
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
