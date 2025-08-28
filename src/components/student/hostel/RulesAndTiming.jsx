import React from 'react';
import { ClipboardList, Clock } from "lucide-react";

const hostelTimings = [
  { title: "Hostel Gate Opening", time: "5:00 AM" },
  { title: "Quiet Hours Ends", time: "6:00 AM" },
  { title: "Mess Breakfast", time: "7:00 AM - 9:00 AM" },
  { title: "Mess Lunch", time: "12:00 PM - 2:00 PM" },
  { title: "Mess Dinner", time: "7:00 PM - 9:00 PM" },
  { title: "Quiet Hours Begin", time: "9:00 PM" },
  { title: "Hostel Gate Opening", time: "10:00 PM" },
];

const hostelRules = [
  "Students must carry their ID cards at all times.",
  "Visitors are allowed only in the common area from 4:00 PM to 8:00 PM.",
  "No loud music or noise during quiet hours.",
  "Cooking in rooms is strictly prohibited.",
  "Consumption of alcohol, smoking, and drugs is strictly prohibited.",
  "Students must inform the warden for overnight leaves.",
  "Keep your rooms clean and tidy at all times.",
];

const RulesAndTiming = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#FAFCFD] font-[Inter] p-6">

      
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Timings Card */}
        <div className="bg-[rgb(250,252,253)] shadow-md rounded-lg p-6 gap-6 w-1/2  md:w-full w-full">
          <h2 className="text-[#1F1D1D] font-semibold text-[16px] leading-[24px] mb-4">
            Hostel Timings
          </h2>
          <div className="flex flex-col gap-4">
            {hostelTimings.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3 text-[14px] text-[#717171]">
                  <Clock className="w-[14px] h-[14px] text-[#717171]" />
                  {item.title}
                </div>
                <div className="text-[14px] font-semibold text-[#1F1D1D]">
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules Card */}
        <div className="bg-[#FAFCFD] shadow-md rounded-lg p-6 w-1/2  md:w-full w-full">
          <h2 className="text-[#1F1D1D] font-semibold text-[16px] leading-[24px] mb-4">
            Hostel Rules
          </h2>
          <ul className="flex flex-col gap-5 text-[14px] leading-[20px] text-[#1F1D1D] font-[400]">
            {hostelRules.map((rule, index) => (
              <li key={index} className="flex items-start gap-2">
                <ClipboardList className="w-[20px] h-[20px] text-[#1F1D1D]" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Guest Policy */}
      <div className="bg-[#FAFCFD] shadow-md rounded-lg p-6 flex flex-col gap-6">
        <div>
          <h2 className="text-[#1F1D1D] font-semibold text-[16px] leading-[28px] mb-2">
            Guest Policy
          </h2>
          <p className="text-[14px] text-[#1F1D1D] leading-[20px] font-normal">
            Parents and immediate family members may visit during designated visiting hours (4:00 PM to 8:00 PM) after obtaining permission from the hostel warden.
            Guests are not permitted to stay overnight without prior written approval from the hostel administration. A guest register must be signed at the security desk for all visitors.
          </p>
        </div>

        <div className="bg-[#CFDCEB] rounded-[8px] p-3">
          <span className="text-[#1F1D1D] font-semibold text-[14px]">
            Note:
          </span> 
          <span className="text-[#1F1D1D] text-[14px] font-[Inter] font-normal">
            For overnight guest accommodations, please submit a request at least 48 hours in advance.
            Guest accommodation is subject to availability and approval.
          </span>
        </div>
      </div>
    </div>
  );
};

export default RulesAndTiming;
