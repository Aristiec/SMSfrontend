import React from "react";
import { User } from "lucide-react";

const tab = [
  {
    title: "Today's Lectures",
    number: 6,
    subtitle: "Next at 10:00 AM - Data Structures",
  },
  {
    title: "Active Students",
    number: 250,
    subtitle: "Across 4 courses this semester",
  },
  {
    title: "Pending\nAssignments",
    number: 20,
    subtitle: "Assignment evaluations due",
  },
  {
    title: "Upcoming Exams",
    number: 4,
    subtitle: "This week - 2 online, 1 offline",
  },
];
const Cards = () => {
  return (
    <div className="flex gap-5 w-full flex-wrap md:flex-nowrap">
      {tab.map((item, index) => (
        <div
        key={index}
          style={{ boxShadow: "4px 4px 8px 0px #00000033" }}
          className="flex flex-col rounded-[12px] border border-[#FAFCFD] py-6 px-6 gap-2 bg-[#FAFCFD] w-full min-w-[200px]"
        >
          <div className="flex gap-2 justify-between w-full">
            <div className="flex items-start flex-col gap-5 max-w-[70%]">
              <p className="font-[Inter] font-[600] text-[12px] leading-[16px] tracking-normal text-[#1F1D1D] w-full break-words">
                {item?.title}
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-[Inter] font-[600] text-[27px] leading-[32px] tracking-normal text-[#1F1D1D]">
                  {item?.number}
                </p>
                <p className="font-[Inter] font-[400] text-[12px] leading-[16px] tracking-normal text-[#717171] break-words">
                  {item?.subtitle}
                </p>
              </div>
            </div>
            <div className="bg-[#FFF4ED]  size-10 rounded-full flex items-center justify-center">
              <User size={20} color="#F97316" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
