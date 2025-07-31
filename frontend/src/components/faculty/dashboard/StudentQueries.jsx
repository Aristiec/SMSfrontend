import React from "react";
import { User } from "lucide-react";

const queries = [
  {
    name: "Assignment Doubt",
    student: "John Smith - CS-301",
    new: true,
  },
  {
    name: "Assignment Doubt",
    student: "John Smith - CS-301",
    new: false,
  },
];

const StudentQueries = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className=" w-full bg-[#FFFFFF] flex flex-col rounded-[12px] gap-8 p-4 justify-between"
    >
      <div className="flex  gap-7 items-center ">
        <User size={18} color="black" />
        <p className="font-[Inter] font-[700] text-[20px] leading-[36px] tracking-normal text-[#1F1D1D]">
          Student Queries
        </p>
      </div>
      <div className="flex flex-col gap-5">
        {queries?.map((q, index) => (
          <div className="flex  gap-14">
            <div className="flex flex-col gap-2">
              <p className="font-[Inter] font-medium text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
                {q.name}
              </p>
              <p className="font-[Inter] font-[400] text-[16px] leading-[14px] tracking-normal  text-[#1F1D1D]">
                {q.student}
              </p>
            </div>
            <div>
              <div
                className={`flex items-center justify-center rounded-[50px] py-1 px-3 gap-2  ${
                  q.new
                    ? " text-[#FAFCFD]  bg-[#F97316]"
                    : "bg-[#E9E9E9] text-[#1F1D1D]"
                }`}
              >
                <p className="fomt-[Inter] font-[400] text-[16px] leading-[24px] tracking-normalflex items-center justify-center">
                  {q.new ? "New" : "Replied"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex rounded-[8px] p-3 gap-2 border border-[#CCCCCCCC] items-center justify-center">
        <p className="font-[Inter] font-medium text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
          View All Queries
        </p>
      </div>
    </div>
  );
};

export default StudentQueries;
