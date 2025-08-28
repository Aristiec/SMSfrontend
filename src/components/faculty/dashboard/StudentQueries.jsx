import React, { useState } from "react";
import { User } from "lucide-react";

const queries = [
  {
    name: "Assignment Doubt",
    student: "John Smith - CS-301",
    new: true,
  },
  {
    name: "Assignment Doubt",
    student: "Michael Johnson - CS-302",
    new: false,
  },
  {
    name: "Exam Clarification",
    student: "Emily Brown - CS-301",
    new: true,
  },
  {
    name: "Project Guidance",
    student: "Sarah Wilson - CS-304",
    new: false,
  },
  {
    name: "Course Material",
    student: "Daniel Lee - CS-302",
    new: true,
  },
  {
    name: "Test Schedule",
    student: "Sophia Martinez - CS-303",
    new: false,
  },
  {
    name: "Lab Report Issue",
    student: "Matthew Taylor - CS-305",
    new: true,
  },
  {
    name: "Assignment Extension",
    student: "Olivia Garcia - CS-301",
    new: false,
  },
];

const StudentQueries = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedQueries = showAll ? queries : queries.slice(0, 2);
  
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className="w-full bg-[#FFFFFF] flex flex-col rounded-[12px] gap-6 p-4 justify-between relative"
    >
      <div className="flex gap-7 items-center">
        <User size={18} color="black" />
        <p className="font-[Inter] font-[700] text-[20px] leading-[36px] tracking-normal text-[#1F1D1D]">
          Student Queries
        </p>
      </div>
      {showAll && (
        <div className="absolute right-1 top-16 bottom-14 w-1 bg-[#0077FF] opacity-10 rounded"></div>
      )}
      <div className={`flex flex-col gap-5 ${showAll ? 'max-h-[350px] overflow-y-auto pr-2' : ''}`}
           style={showAll ? { scrollbarWidth: 'thin', scrollbarColor: '#0077FF #f5f5f5' } : {}}>
        {displayedQueries.map((q, index) => (
          <div key={index} className="flex justify-between w-full py-1">
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
                className={`flex items-center justify-center rounded-[50px] py-1 px-4 ${
                  q.new
                    ? "text-[#FAFCFD] bg-[#F97316]"
                    : "bg-[#E9E9E9] text-[#1F1D1D]"
                }`}
              >
                <p className="font-[Inter] font-medium text-[14px] leading-[24px] tracking-normal">
                  {q.new ? "New" : "Replied"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div 
        onClick={() => setShowAll(!showAll)}
        className="flex rounded-[8px] p-2.5 gap-2 border border-[#CCCCCCCC] items-center justify-center cursor-pointer hover:bg-[#f7f7f7] transition-colors"
      >
        <p className="font-[Inter] font-medium text-[15px] leading-[24px] tracking-normal text-[#1F1D1D]">
          {showAll ? "Show Less" : "View All Queries"}
        </p>
      </div>
    </div>
  );
};

export default StudentQueries;
