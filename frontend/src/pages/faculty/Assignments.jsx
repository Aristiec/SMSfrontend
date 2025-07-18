import React, { useState } from "react";
import {
  Search,
  CircleCheckBig,
  Calendar,
  Eye,
  Timer,
  CircleAlert,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const assignmentData = [
  {
    title: "Literature Review",
    subject: "English Literature",
    description: "Analysis of Shakespeare’s Macbeth.",
    dueDate: "Feb 5, 2024",
    dueTime: "11:59 PM",
    maxMarks: 20,
    status: {
      submitted: 22,
      pending: 8,
      overdue: 5,
      total: 35,
    },
  },
  {
    title: "Physics Lab Report",
    subject: "Physics",
    description: "Experiment on Newton’s Laws of Motion.",
    dueDate: "Feb 8, 2024",
    dueTime: "10:00 AM",
    maxMarks: 25,
    status: {
      submitted: 18,
      pending: 12,
      overdue: 3,
      total: 33,
    },
  },
  {
    title: "History Assignment",
    subject: "World History",
    description: "Causes and impact of World War II.",
    dueDate: "Feb 10, 2024",
    dueTime: "05:00 PM",
    maxMarks: 30,
    status: {
      submitted: 26,
      pending: 5,
      overdue: 2,
      total: 33,
    },
  },
];

const Assignments = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const tabs = ["All", "Active", "Past"];
  return (
    <section className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col">
        <header className=" top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full  h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            Assignments
          </h1>
          <button
            onClick={() => navigate("/faculty/assignments/create")}
            className="bg-[#FAFCFD] py-2 px-3 gap-2 rounded-[8px] font-[Inter] font-[400] leading-6 tracking-normal flex items-center justify-center text-[#1F1D1D]"
          >
            Create New
          </button>
        </header>
        <div
          style={{ boxShadow: "0px 0px 8px 0px #0000001F" }}
          className="bg-[#FAFCFD] rounded-[8px] flex justify-between py-3 px-6 mt-4"
        >
          <div className="flex gap-4">
            {tabs.map((tab, index) => (
              <button
                onClick={() => setActiveTab(tab)}
                key={index}
                className={`${
                  activeTab === tab
                    ? "bg-[#04203E] text-[#FAFCFD] "
                    : "text-[#04203E]"
                } gap-3 rounded-[8px]  py-2 px-3 border border-[#1F1D1D] font-[Inter] font-400 text-[14px] leading-6 tracking-normal flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-[#FAFCFD] rounded-[8px] py-2 px-3 border gap-2 border-[#717171] flex items-center">
            <Search size={16} color="#717171" />
            <input
              placeholder="Search Assignments..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-0 font-[Inter] text-[14px] font-[400] leading-5 tracking-normal text-[#717171]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {assignmentData?.map((assignment, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
            className="bg-[#FAFCFD] p-6 gap-6 rounded-[12px] flex flex-col "
          >
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <p className=" font-medium text-[16px]  leading-6 tracking-normal items-center  text-[#1F1D1D">
                        {assignment?.title}
                      </p>
                      <p className=" font-medium text-[16px]  leading-6 tracking-normal items-center  text-[#1F1D1D">
                        {assignment?.subject}
                      </p>
                    </div>
                    <p className="flex gap-2 px-1 font-[400] text-[12px] leading-4 items-center tracking-normal text-[#1F1D1D]">
                      {assignment?.description}
                    </p>
                  </div>
                  <div className="flex gap-3 items-center  ">
                    <button className="flex py-2 px-3 gap-3 rounded-[8px] border items-center border-[#04203E] ">
                      <Eye size={16} color="#04203E" />
                      <p className=" flex font-[400] text-[14px] leading-6 tracking-normal text-[#04203E] items-center">
                        View Details
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex gap-6 items-center">
                  <div className="flex gap-1 items-center">
                    <div className="flex gap-1 items-center">
                      <Calendar size={12} color="#717171" />
                      <p className="text-[#1F1D1D] font-[400] text-[12px] leading-5 tracking-normal flex items-center">
                        Due:
                      </p>
                    </div>
                    <p className="font-[400] text-[12px] leading-5 tracking-normal items-center flex text-[#1F1D1D] ">
                      {assignment?.dueDate}, {assignment?.dueTime}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#1F1D1D]">
                      Max Marks:
                    </p>
                    <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#1F1D1D]">
                      {assignment?.maxMarks}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-10">
                {Object.entries(assignment?.status).map((status, index) => (
                  <div key={index} className="flex gap-2">
                    {console.log("status:", status)}
                    <div
                      className={`size-8 rounded-full  flex items-center justify-center ${
                        status[0] === "submitted"
                          ? "bg-[#ECFDF7]"
                          : status[0] === "pending"
                          ? "bg-[#FFF4ED]"
                          : status[0] === "overdue"
                          ? "bg-[#FFF4ED]"
                          : "bg-[#E9EEF4]"
                      }`}
                    >
                      {status[0] === "submitted" ? (
                        <CircleCheckBig size={16} color="#10B981" />
                      ) : status[0] === "pending" ? (
                        <Timer size={16} color="#F97316" />
                      ) : status[0] === "overdue" ? (
                        <CircleAlert size={16} color="#EF4444" />
                      ) : (
                        <Clock size={16} color="#0077FF" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="Font-[400] text-[12px] leading-4 tracking-normal items-center  text-[#717171]">
                        {status[0].charAt(0).toUpperCase() + status[0].slice(1)}
                      </p>
                      <p className="font-[500] text-[14px] leading-5 tracking-normal items-center  text-[#1F1D1D]">
                        {status[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assignments;
