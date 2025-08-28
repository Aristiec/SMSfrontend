import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

const courseData = [
  {
    name: "Data Structures",
    code: "CS-301",
    students: 60,
    section: "Section A",
    performance: "82%"
  },
  {
    name: "Database Management",
    code: "CS-302",
    students: 45,
    section: "Section B",
    performance: "78%"
  },
  {
    name: "Computer Networks",
    code: "CS-303",
    students: 52,
    section: "Section A",
    performance: "85%"
  },
  {
    name: "Software Engineering",
    code: "CS-304",
    students: 38,
    section: "Section C",
    performance: "79%"
  },
  {
    name: "Operating Systems",
    code: "CS-305",
    students: 55,
    section: "Section B",
    performance: "88%"
  },
  {
    name: "Web Development",
    code: "CS-306",
    students: 42,
    section: "Section D",
    performance: "91%"
  }
];

const Course = () => {
  return (
    <div
      style={{ boxShadow: "0px 4px 8px 0px #00000033" }}
      className="w-full flex flex-col rounded-[12px] p-4 gap-5 bg-[#FFFFFF] relative"
    >
      <div className="flex  gap-4">
        <ChartNoAxesCombined size={25} color="#0077FF" />
        <p className="font-[Inter] font-[700] text-[20px] leading-[36px] tracking-normal text-[#1F1D1D] ">
          Course Performance Overview
        </p>
      </div>
      <div className="flex flex-col gap-4 max-h-64 overflow-y-auto pr-2 relative" 
           style={{ scrollbarWidth: 'thin', scrollbarColor: '#0077FF #f1f1f1' }}>
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#0077FF] opacity-10 rounded"></div>
        {courseData.map((course, index) => (
          <div key={index} className="flex justify-between p-4 rounded-[8px] bg-[#F5F6F8]">
            <div className="flex flex-col gap-2">
              <p className="font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
                {course.name} ({course.code})
              </p>
              <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">
                {course.students} students • {course.section}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-[Inter] font-[600] text-[16px] leading-[24px] tracking-normal text-[#1F1D1D]">
                {course.performance}
              </p>
              <p className="font-[Inter] font-[400] text-[16px] leading-[24px] tracking-normal text-[#717171]">Avg Performance</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;