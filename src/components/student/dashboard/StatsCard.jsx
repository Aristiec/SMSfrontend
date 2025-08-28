import React from "react";
import bookIcon from "../../../assets/card_icon1.png";
import FaUserCheck from "../../../assets/card_icon2.png";
import FaAward from "../../../assets/card_icon3.png";
import FaMoneyBill from "../../../assets/card_icon4.png";

const cards = [
  {
    title: "Subjects Enrolled",
    value: "8",
    subtitle: "All subjects active",
    icon: <img src={bookIcon} alt="Book Icon" className="w-5 h-5" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Attendance",
    value: "87%",
    subtitle: "Last updated today",
    icon: <img src={FaUserCheck} alt="User Check Icon" className="w-5 h-5" />,
    bgColor: "bg-orange-100",
  },
  {
    title: "Current CGPA",
    value: "8.7",
    subtitle: "Semester 3",
    icon: <img src={FaAward} alt="Award Icon" className="w-5 h-5" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Fee Status",
    value: "₹45,000",
    subtitle: (
      <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-sm">
        Paid
      </span>
    ),
    icon: <img src={FaMoneyBill} alt="Money Bill Icon" className="w-5 h-5" />,
    bgColor: "bg-green-100",
  },
];

const StatsCard = () => {
  return (
    <div className="w-full  mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default StatsCard;
