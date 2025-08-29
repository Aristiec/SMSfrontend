import React from "react";
import bookIcon from "../../../assets/card_icon1.png";
import staffIcon from "../../../assets/card_icon2.png";
import hostelIcon from "../../../assets/card_icon3.png";
import joinIcon from "../../../assets/card_icon4.png";
import { DollarSign } from "lucide-react";
import {
  CircleAlert,
  CircleCheckBig,
  Ban,
  Book,
  Clock,
  Eye,
  FileUp,
} from "lucide-react";

const cards = [
  {
    title: "Pending Fees",
    value: "30,000",
    subtitle: "Semester 3",
    icon: <CircleAlert className="w-6 h-6 text-orange-500" />,
    bgColor: "bg-[#FFF4ED]",
  },
  {
    title: "Amount Paid",
    value: "150,000",
    subtitle: "Last Update Today",
    icon: <CircleCheckBig className="w-6 h-6 text-green-500" />,
    bgColor: "bg-orange-100",
  },
  // {
  //   title: "Pending Fees",
  //   value: "₹15000",
  //   subtitle: "Pending",
  //   icon: <DollarSign className="w-5 h-5 text-green-600" />,
  //   bgColor: "bg-green-100",
  // },
  {
    title: "Overdue Assignments",
    value: "1",
    subtitle: "",
    icon: <Ban className="w-6 h-6 text-red-500" />,
    bgColor: "bg-blue-100",
  },
];

const FeeStats = () => {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full h-[148px] rounded-[12px] border border-gray-200 shadow-md px-[24px] py-[32px] bg-white flex items-center"
          >
            <div className="flex justify-between items-center w-full gap-[10px]">
              <div className="flex flex-col gap-[5px]">
                <h4 className="font-[Inter] text-[#1F1D1D] text-sm text-500 font-medium">
                  {card.title}
                </h4>
                <h2 className="font-[inter] text-2xl font-semibold">
                  {card.value}
                </h2>
                <p className="font-[inter] text-sm text-gray-500">
                  {card.subtitle}
                </p>
              </div>
              <div
                className={`w-[44px] h-[44px] rounded-full flex items-center justify-center ${card.bgColor}`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeStats;
