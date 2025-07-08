import React, { useState } from "react";
import { UserRoundCheck, Phone } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";


const dropdown = {
  department: {
    placeholder: "Select Course/Department",
    options: ["Computer Science", "Information Technology", "Electronics", "Mechanical"],
  },
  semester: {
    placeholder: "Select your semester",
    options: ["Semester 1", "Semester 2", "Semester 3", "Semester 4"],
  },
};

const Transport = ({
  
}) => {
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <div className="mx-auto flex flex-col font-[Inter] min-h-screen">
      <div className="flex flex-col px-4 gap-1 mt-4">
        <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto mb-4">
          <h1 className="text-[24px] font-bold font-[Merriweather]">Transport</h1>
        </header>

        <section
          style={{ boxShadow: "0px 4px 8px 0px #0000003D" }}
          className="flex flex-col rounded-[12px] p-6 gap-6 bg-[#FAFCFD] w-full"
        >
          {/* header */}
          <div className="flex flex-col gap-[8px]">
            <div className="font-[Inter] font-semibold text-[20px] leading-[28px]">
              Request Transport Service
            </div>
            <div className="font-[Inter] font-[400] text-[14px] leading-[20px] text-[#4B5563]">
              Fill out the form below to request campus transportation
            </div>
          </div>

          {/* Personal Details */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[12px]">
              <UserRoundCheck className="w-[16px] h-[16px]" />
              <div className="font-[Inter] text-[16px] leading-[24px] font-semibold text-[#000000]">
                Personal Details
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-6">
             
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Full Name</label>
                <input 
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-[8px] border border-[#717171] text-[16px] text-[#111827] px-6 py-2 placeholder-[#111827]"
                />
              </div>

             
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Student ID</label>
                <input
                  type="text"
                  placeholder="Enter student ID"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 text-[16px] text-[#111827] placeholder-[#111827]"
                />
              </div>

             
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Course/Department</label>
                <Dropdown 
                   options={dropdown.department.options}
                  selected={course}
                  onSelect={setCourse}
                  placeholder={dropdown.department.placeholder}
                  
                />
              </div>

             
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Semester</label>
                <Dropdown
                  options={dropdown.semester.options}
                  selected={semester}
                  onSelect={setSemester}
                  placeholder={dropdown.semester.placeholder}
                />
              </div>
            </div>
          </div>

          {/*  Contact Details */}
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex items-center gap-[12px]">
              <Phone className="w-[16px] h-[16px]" />
              <div className="font-[Inter] text-[16px] leading-[24px] font-semibold text-[#000000]">
                Contact Details
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-6">
              
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Mobile Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>

           
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter your e-mail address"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>

             
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">Emergency Contact Number</label>
                <input
                  type="text"
                  placeholder="Enter emergency contact"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>

           
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="text-[12px] font-medium text-[#374151]">
                  Emergency Contact Number <span className="text-[#6B7280]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter emergency contact"
                  className="w-full rounded-[8px] border border-[#717171] px-6 py-2 placeholder-[#111827]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transport;
