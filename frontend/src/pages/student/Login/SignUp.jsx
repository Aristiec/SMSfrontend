import React, { useState, useRef, useEffect } from "react";
import LoginImage from "../../../assets/login_image.svg";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Choose your role");

  const dropdownRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (role) => {
    setSelectedRole(role);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 flex justify-center items-center bg-[#FAFCFD]">
        <img
          src={LoginImage}
          alt="Sign Up Visual"
          className="w-[596.91px] h-[505.57px]"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="rounded-[8px] p-10 bg-[#FAFCFD] shadow-[4px_4px_4px_0px_rgba(23,26,31,0.25),-4px_-4px_4px_0px_rgba(255,255,255,0.25)]">
          <div className="w-[352px] flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-[24px] leading-[32px] font-bold font-[Archivo] text-[#04203E]">
                Welcome
              </h1>
              <p className="text-[12px] leading-[18px] text-[#04203E] font-[Inter]">
                Sign up to create your account
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 font-[Inter]">
              
              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] focus:outline-none text-[#717171] text-[12px] italic"
                />
              </div>

              
              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] focus:outline-none text-[#717171] text-[12px] italic"
                />
              </div>

             
              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] focus:outline-none text-[#717171] text-[12px] italic"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] focus:outline-none text-[#717171] text-[12px] italic"
                />
              </div>

             
              <div className="flex flex-col gap-3">
                <label className="text-[16px] font-medium text-[#04203E]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] focus:outline-none text-[#717171] text-[12px] italic"
                />
              </div>

              
              <div className="flex flex-col gap-2" ref={dropdownRef}>
                <label className="text-[16px] font-medium text-[#04203E]">
                  Select Role
                </label>
                <div className="relative flex flex-col">
                  <button
                    onClick={toggleDropdown}
                    className="w-full h-[40px] rounded-[8px] px-3 border border-[#717171] flex justify-between items-center gap-[10px] bg-white"
                  >
                    <span className="text-[#717171] text-[12px] leading-[22px]">
                      {selectedRole}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                   <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="w-[99%] mt-2 bg-white border border-[#717171] rounded-[6px] shadow flex flex-col gap-1 p-1"
                    >
                      <div
                        className="bg-[#D9D9D9] rounded-[4px] px-2 py-1 cursor-pointer hover:bg-[#cfcfcf] text-[12px]"
                        onClick={() => handleSelect("Faculty")}
                      >
                        Faculty
                      </div>
                      <div
                        className="bg-[#D9D9D9] rounded-[4px] px-2 py-1 cursor-pointer hover:bg-[#cfcfcf] text-[12px]"
                        onClick={() => handleSelect("Student")}
                      >
                        Student
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col gap-4 font-[Inter]">
              <button className="w-full h-[32px] rounded-[8px] bg-[#04203E] text-[#FAFCFD] text-[12px] font-bold">
                Create account
              </button>
            </div>

            
            <div className="flex items-center gap-6">
              <div className="flex-grow h-[1px] bg-[#717171]"></div>
              <span className="text-[#1F1D1D] text-[16px]">OR</span>
              <div className="flex-grow h-[1px] bg-[#717171]"></div>
            </div>

           
            <button className="w-full h-[40px] border border-[#717171] rounded-[6px] gap-3 font-[Inter] text-[16px] leading-[22px]">
              Continue with Google
            </button>

            
            <div className="flex justify-center gap-[4px]">
              <p className="text-[12px] text-[#717171] leading-[20px] font-[Inter]">
                Already have an account?
              </p>
              <button
                onClick={() => navigate("/signin")}
                className="text-[12px] text-[#04203E] underline leading-[22px] font-[Inter]"
              >
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
