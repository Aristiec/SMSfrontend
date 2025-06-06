import React from 'react'
import { FaBook, FaUserCheck, FaAward, FaMoneyBill } from "react-icons/fa";

const cards = [
  {
    title: "Subjects Enrolled",
    value: "8",
    subtitle: "All subjects active",
    icon: <FaBook className="text-blue-600 w-5 h-5" />,
    bgColor: "bg-blue-100",
  },
  {
    title: "Attendance",
    value: "87%",
    subtitle: "Last updated today",
    icon: <FaUserCheck className="text-orange-600 w-5 h-5" />,
    bgColor: "bg-orange-100",
  },
  {
    title: "Current CGPA",
    value: "8.7",
    subtitle: "Semester 3",
    icon: <FaAward className="text-yellow-600 w-5 h-5" />,
    bgColor: "bg-yellow-100",
  },
  {
    title: "Fee Status",
    value: "₹45,000",
    subtitle: <span className="text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-sm">Paid</span>,
    icon: <FaMoneyBill className="text-green-600 w-5 h-5" />,
    bgColor: "bg-green-100",
  },
];

const StatsCard = () => {
  return (
    <>
    <div className="w-full max-w-[1280px] mx-auto px-4 pt-10">
      <div className="flex justify-between gap-4 flex-nowrap">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-[248px] h-[148px] rounded-[12px] border border-gray-200 shadow-md px-[24px] py-[32px] flex justify-between items-center bg-white"
          >
            <div className="w-[200px] h-[79px] flex justify-between items-center">
              <div className="w-[109.2px] h-[79px] flex flex-col gap-[5px] justify-between">
                <h4 className="text-sm text-gray-500 font-medium">{card.title}</h4>
                <h2 className="text-2xl font-semibold">{card.value}</h2>
                <p className="text-sm text-gray-500">{card.subtitle}</p>
              </div>
              <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center ${card.bgColor}`}>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default StatsCard