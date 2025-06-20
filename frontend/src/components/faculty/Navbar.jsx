import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineAssignmentTurnedIn,
  MdReportGmailerrorred,
} from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {
  Home,
  Calendar,
  BookOpen,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", icon: Home, path: "/faculty/dashboard" },
  { name: "MyCourses", icon: BookOpen, path: "/" },
  { name: "Students", icon: GraduationCap, path: "/" },
  { name: "Assignments", icon: MdOutlineAssignmentTurnedIn, path: "/" },
  { name: "Attendance", icon: UserCheck, path: "/" },
  { name: "Report", icon: MdReportGmailerrorred, path: "/" },
  { name: "Fee Payment", icon: FiCreditCard, path: "/" },
  { name: "Schedule", icon: Calendar },
];

const scheduleMenuItems = [
  { name: "Weekly Schedule", path: "/" },
  { name: "Daily Schedule", path: "/faculty/timetable" },
];

const Navbar = () => {
  const location = useLocation();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <div className="h-full w-[250px] bg-[#FAFCFD] flex flex-col justify-between border-r">
      <ul className="pt-4 flex flex-col space-y-2 flex-1 overflow-y-auto">
        {menuItems.map(({ name, icon: Icon, path }) => {
          const isActive = location.pathname === path;

          if (name !== "Schedule") {
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
          } else {
            return (
              <div key={name}>
                <li className="py-3 px-0 cursor-pointer text-[#1F1D1D] hover:bg-[#FAFCFD] transition-all duration-200">
                  <div
                    onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                    className="flex items-center gap-3 px-5 text-[14px] cursor-pointer"
                  >
                    <Icon className="w-[16px] h-[16px]" />
                    {name}
                    {isScheduleOpen ? (
                      <TiArrowSortedUp className="w-[16px] h-[16px] ml-2" />
                    ) : (
                      <TiArrowSortedDown className="w-[16px] h-[16px] ml-2" />
                    )}
                  </div>
                </li>

                <AnimatePresence>
                  {isScheduleOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-2 overflow-hidden"
                    >
                      {scheduleMenuItems.map(({ name, path }, index) => {
                        const isActive = location.pathname === path;
                        return (
                          <Link to={path} key={index}>
                            <li
                              className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                                isActive
                                  ? "bg-[#04203E] text-white"
                                  : "hover:bg-[#FAFCFD] text-[#1F1D1D]"
                              }`}
                            >
                              <div
                                className={`flex items-center gap-3 px-10 text-[14px] ${
                                  isActive ? "translate-x-4" : ""
                                } transition-all duration-200`}
                              >
                                {name}
                              </div>
                            </li>
                          </Link>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Navbar;
