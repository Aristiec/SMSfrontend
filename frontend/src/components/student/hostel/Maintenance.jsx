import React, { useState } from "react";
import Dropdown from "../../utils/Dropdown.jsx";

const Maintenance = () => {
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
               <span className="flex items-center">For urgent issues like water leaks or electrical failures,
              please contact the warden directly.</span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
               <span className="flex items-center">Include your room number in the description.</span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
               <span className="flex items-center">Be as specific as possible when describing the issue.</span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
               <span className="flex items-center">Maintenance staff works from 9:00 AM to 6:00 PM on weekdays.</span>
            </li>
            <li className=" font-[Inter] font-[400] text-[14px] leading-5 tracking-normal  text-[#717171]">
               <span className="flex items-center">For emergency maintenance after hours, contact the security desk.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
