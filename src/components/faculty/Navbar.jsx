import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  Calculator,
  ChevronDown,
  ChevronUp,
  LogOut,
  TableProperties,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/faculty/dashboard" },
  { name: "Schedule", icon: Calendar, path: "/faculty/timetable" },

  { name: "Exams", icon: Calculator, path: "/faculty/exam" },
  { name: "Assignments", icon: ClipboardCheck, path: "/faculty/assignments" },
  { name: "Attendance", icon: UserCheck, path: "/faculty/attendance" }, 
  { name: "Result", icon: TableProperties, path: "/faculty/result" },
  { name: "Reports", icon: ChartNoAxesColumn, path: "/faculty/report" },
  { name: "Notices", icon: Bell, path: "/faculty/notice" },
  { name: "Queries", icon: CreditCard, path: "/faculty/students" },
];

const examMenuItems = [
  { name: "Online Exam", path: "/faculty/exam" },
  { name: "Offline Exam", path: "/faculty/offlineExam" },
];

const scheduleMenuItems = [
  { name: "Weekly Timetable", path: "/faculty/timetable" },
  { name: "Daily Timetable", path: "/faculty/dailyTimetable" },
];

const Navbar = () => {
  const location = useLocation();
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  
  const isExamActive =
    location.pathname.startsWith("/faculty/exam") ||
    location.pathname.startsWith("/faculty/offlineExam");
  
  const isScheduleActive =
    location.pathname.startsWith("/faculty/timetable") ||
    location.pathname.startsWith("/faculty/dailyTimetable");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div className="h-full bg-[#FAFCFD] flex flex-col justify-between">
      <ul className="pt-4 flex flex-col space-y-2 flex-1 overflow-y-auto overflow-x-hidden">
        {menuItems.map(({ name, icon: Icon, path }) => {
          const isActive = location.pathname.startsWith(path);
          if (name !== "Exams" && name !== "Schedule") {
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
          } else if (name === "Schedule") {
            return (
              <div key={name}>
                <li
                  className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                    isScheduleActive
                      ? "bg-[#04203E] text-white"
                      : "hover:bg-[#FAFCFD] text-[#1F1D1D]"
                  }`}
                >
                  <div
                    onClick={() => setIsScheduleOpen(!isScheduleOpen)}
                    className="flex items-center justify-between gap-3 px-5 text-[16px] w-full"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-[20px] h-[20px]" />
                      {name}
                    </div>
                    {isScheduleOpen ? (
                      <ChevronUp className="w-[16px] h-[16px]" />
                    ) : (
                      <ChevronDown className="w-[16px] h-[16px]" />
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
                        const isActive = location.pathname.startsWith(path);
                        return (
                          <Link to={path} key={index}>
                            <li
                              className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                                isActive
                                  ? "bg-[#CFDCEB] text-[#1F1D1D]"
                                  : "bg-[#FAFCFD] text-[#1F1D1D]"
                              }`}
                            >
                              <div
                                className={`flex items-center gap-3 px-10 text-[16px] transition-all duration-200`}
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
          } else if (name === "Exams") {
            return (
              <div key={name}>
                <li
                  className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                    isExamActive
                      ? "bg-[#04203E] text-white"
                      : "hover:bg-[#FAFCFD] text-[#1F1D1D]"
                  }`}
                >
                  <div
                    onClick={() => setIsExamOpen(!isExamOpen)}
                    className="flex items-center justify-between gap-3 px-5 text-[16px] w-full"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-[20px] h-[20px]" />
                      {name}
                    </div>
                    {isExamOpen ? (
                      <ChevronUp className="w-[16px] h-[16px]" />
                    ) : (
                      <ChevronDown className="w-[16px] h-[16px]" />
                    )}
                  </div>
                </li>

                <AnimatePresence>
                  {isExamOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col space-y-2 overflow-hidden"
                    >
                      {examMenuItems.map(({ name, path }, index) => {
                        const isActive = location.pathname.startsWith(path);
                        return (
                          <Link to={path} key={index}>
                            <li
                              className={`py-3 px-0 cursor-pointer transition-all duration-200 ${
                                isActive
                                  ? "bg-[#CFDCEB] text-[#1F1D1D]"
                                  : "bg-[#FAFCFD] text-[#1F1D1D]"
                              }`}
                            >
                              <div
                                className={`flex items-center gap-3 px-10 text-[16px] transition-all duration-200`}
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
      <div
        style={{
          borderTop: "1px solid",
          borderImageSource:
            "linear-gradient(90deg, #FAFCFD 0%, #717171 50%, #FAFCFD 100%)",
          borderImageSlice: 1,
        }}
        className="flex flex-col border-t p-4 mb-3 gap-3"
      >
        <div className="flex items-center gap-3 flex-shrink-0">
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
        <button
          onClick={handleLogout}
          className="cursor-pointer flex gap-2 rounded-lg bg-[#FAFCFD] border border-[#71717166] items-center justify-center"
        >
          <LogOut size={14} color="#1F1D1D" />
          <p className="font-[400] text-[14px] font-[Inter] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
            Logout
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;