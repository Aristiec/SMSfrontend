import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePic from "../../assets/headerBG.png";
import {
  Home,
  BookOpen,
  Bell,
  ClipboardCheck,
  UserCheck,
  CreditCard,
  LogOut,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/parent/dashboard" },
  { name: "Performance", icon: TrendingUp, path: "/parent/performance" },
  { name: "Attendance", icon: UserCheck, path: "/parent/attendance" },
  { name: "Assignments", icon: ClipboardCheck, path: "/parent/assignments" },
  { name: "Fee Payment", icon: CreditCard, path: "/parent/fees" },
  { name: "Notifications", icon: Bell, path: "/parent/notifications" },
  { name: "Help & Contact", icon: HelpCircle, path: "/parent/help" },
];

const Navbar = () => {
  const location = useLocation();
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
            <p className="font-semibold text-[#0d2d4f]">Rajesh Kumar</p>
            <p className="text-xs text-gray-500">Parent ID: PAR2030201</p>
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
