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
  { name: "Home", icon: Home, path: "/faculty/dashboard" },
  { name: "MyCourses", icon: Calendar, path: "/" },
  { name: "Students", icon: BookOpen, path: "/" },
  { name: "Assignments", icon: Bell, path: "/" },
  { name: "Grades", icon: ClipboardCheck, path: "/" },
  { name: "Calendar", icon: ChartNoAxesColumn, path: "/" },
  { name: "Attendance", icon: UserCheck, path: "/" },
  { name: "Query", icon: CreditCard, path: "/" },
  { name: "Report", icon: FaRegUser, path: "/" },
  { name: "Fee Payment", icon: FaRegUser, path: "/" },
  { name: "Profile", icon: FaRegUser, path: "/" },
  { name: "Timetable", icon: FaRegUser, path: "/faculty/timetable" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-[250px] bg-[#FAFCFD] flex flex-col justify-between border-r">
      <ul className="pt-4 flex flex-col space-y-2 flex-1 overflow-y-auto">
        {menuItems.map(({ name, icon: Icon, path }) => {
          const isActive = location.pathname === path;

          return (
            <Link to={path} key={name}>
              <li
                className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-[#04203E] text-white"
                    : "hover:bg-[#FAFCFD] text-[#1F1D1D]"
                }`}
              >
                <div
                  className={`flex items-center gap-3 px-5 text-[14px] ${
                    isActive ? "translate-x-4" : ""
                  } transition-all duration-200`}
                >
                  <Icon className="w-[16px] h-[16px]" />
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
