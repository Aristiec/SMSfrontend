import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import profilePic from "../../assets/headerBG.png";
import {
  Home,
  Calendar,
  BookOpen,
  Bell,
  ClipboardCheck,
  ChartNoAxesColumn,
  UserCheck,
  CreditCard,
} from "lucide-react";

// Menu definitions
const menuItems = [
  { name: "Dashboard", icon: Home, path: "/student/dashboard" },
  { name: "Schedule", icon: Calendar, path: "/student/timetable" },
  { name: "Courses", icon: BookOpen, path: "/student/courses" },
  { name: "Notices", icon: Bell, path: "/student/notices" },
  { name: "Assignments", icon: ClipboardCheck, path: "/student/assignments" },
  { name: "Results", icon: ChartNoAxesColumn, path: "/student/results" },
  { name: "Attendance", icon: UserCheck, path: "/student/attendance" },
  { name: "Fee Payment", icon: CreditCard, path: "/student/fees" },
  { name: "Profile", icon: FaRegUser, path: "/student/profile" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="h-full bg-[#FAFCFD] flex flex-col justify-between  ">
      <ul className="pt-4 flex flex-col space-y-2 flex-1 overflow-y-auto overflow-x-hidden">
        {menuItems.map(({ name, icon: Icon, path }) => {
          const isActive = location.pathname.startsWith(path);

          return (
            <Link to={path} key={name}>
              {console.log(isActive, path)}
              <li
                className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#04203E] text-white"
                    : "hover:bg-[#FAFCFD] text-[#1F1D1D]"
                }`}
              >
                <div
                  className={`flex items-center gap-3 px-5 text-[16px] ${
                    isActive ? "translate-x-4" : ""
                  } transition-all duration-200`}
                >
                  <Icon className="w-[20px] h-[20px]" />
                  {name}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="flex items-center gap-3 p-4 flex-shrink-0">
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
