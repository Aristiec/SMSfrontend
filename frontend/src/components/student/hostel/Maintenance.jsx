import React, { useState } from "react";
import Dropdown from "../../utils/Dropdown.jsx";
import { FileUp } from "lucide-react";

const maintenanceData = [
  {
    id: "MR-2024-001",
    date: "Jan 15, 2024",
    category: "Cleaning",
    description: "Dust and cobwebs in ceiling corner need removal",
    status: "Pending",
  },
  {
    id: "MR-2024-002",
    date: "Feb 08, 2024",
    category: "Plumbing",
    description: "Bathroom sink draining slowly",
    status: "Resolved",
  },
  {
    id: "MR-2024-003",
    date: "Mar 22, 2024",
    category: "Electrical",
    description: "Light fixture in bathroom not working",
    status: "In Progress",
  },
  {
    id: "MR-2024-004",
    date: "Apr 10, 2024",
    category: "Electrical",
    description: "Switchboard sparking when used",
    status: "Rejected",
  },
  {
    id: "MR-2024-005",
    date: "Jun 30, 2024",
    category: "Others",
    description: "Window screen mesh needs replacement",
    status: "Resolved",
  },
];

const Maintenance = () => {
  const statusClasses = {
    Pending: "bg-yellow-100 text-yellow-800",
    Resolved: "bg-[#ECFDF7] text-[#10B981]",
    "In Progress": "bg-[#F4F7FA] text-[#0077FF]",
    Rejected: "bg-red-100 text-red-700",
  };
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex gap-10 ">
        <div
          style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
          className="flex flex-col gap-6 rounded-2 p-6 bg-[#FAFCFD] w-full "
        >
          <div className="flex flex-col gap-6 ">
            <p className="font-[Inter] font-[600] text-[16px] leading-6 tracking-normal items-center flex text-[#1F1D1D]">
              Maintenance Request
            </p>
            <div className="flex juctify-between">
              <div className="flex flex-col gap-2 w-full">
                <label
                  for="category"
                  className="font-[Inter] font-medium text-[12px] leading-5 tracking-normal text-[#1F1D1D] flex items-center"
                >
                  Category
                </label>
                <Dropdown
                  name="category"
                  options={["Electrical", "Plumbing", "Cleaning", "Others"]}
                  onSelect={(value) => setSelectedOption(value)}
                  selected={selectedOption}
                  placeholder="Select Category"
                  className={
                    "rounded-[9px] rounded-t-[9px] border-1 justify-between py-2 px-6  border-[#717171]"
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-[Inter] font-medium text-[12px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                Description
              </p>
              <textarea
                rows={6}
                className="resize-none  rounded-[8px] border-[0.8px] py-3 px-3 gap-2 bg-[#F4F7FA] border-[#717171] font-[Inter] font-[400] text-[16px] leading-4 tracking-normal text-[#717171]"
                placeholder="Please provide details about your request"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button className="bg-[#04203E] flex gap-2 px-3 py-2 rounded-[8px]  rounded-2 ">
              <FileUp size={18} color="#FAFCFD" />
              <p className="text-[#FAFCFD] font-[Inter] font-[400] text-[14px] leading-6 tracking-normal">
                Submit Request
              </p>
            </button>
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
          className="flex flex-col gap-6 p-6 font-[Inter]  bg-[#FAFCFD]"
        >
          <p className=" font-[Inter] font-[600] text-[15.3px] leading-7 tracking-normal flex items-center text-[#1F1D1D]">
            Tips
          </p>
          <ul className="flex flex-col gap-2 list-disc justify-center">
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
              <span className="flex items-center">
                For urgent issues like water leaks or electrical failures,
                please contact the warden directly.
              </span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
              <span className="flex items-center">
                Include your room number in the description.
              </span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
              <span className="flex items-center">
                Be as specific as possible when describing the issue.
              </span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
              <span className="flex items-center">
                Maintenance staff works from 9:00 AM to 6:00 PM on weekdays.
              </span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
              <span className="flex items-center">
                For emergency maintenance after hours, contact the security
                desk.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
        className="flex flex-col rounded-[8px] p-6 gap-3  bg-[#FAFCFD] "
      >
        <p className="font-[Inter] font-[600] text-[16px] leading-7 tracking-normal flex items-center text-[#1F1D1D]">
          Previous Requests
        </p>
        <div
          style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
          className="flex flex-col rounded-[8px] p-6 gap-3 bg-[#FAFCFD]"
        >
          <p className="font-[Inter] font-[600] text-[16px] leading-7 tracking-normal flex items-center text-[#1F1D1D]">
            Previous Requests
          </p>

          {/* Header */}
          <div className="grid grid-cols-5 bg-[#F4F7FA] text-[#717171] text-[14px] font-medium px-4 py-3 border-b border-[#E0E0E0]">
            <p className="text-left">Request ID</p>
            <p className="text-left">Date</p>
            <p className="text-left">Category</p>
            <p className="text-left">Description</p>
            <p className="text-right px-7">Status</p>
          </div>

          {/* Body */}
          {maintenanceData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center px-4 py-4 border-b border-[#E0E0E0] text-[14px] text-[#1F1D1D]"
            >
              <p>{item.id}</p>
              <p>{item.date}</p>
              <p>{item.category}</p>
              <p className="truncate max-w-[180px]">{item.description}</p>
              <p className="text-right">
                <span
                  className={`px-3 py-[2px] rounded-full text-xs font-medium ${
                    statusClasses[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
