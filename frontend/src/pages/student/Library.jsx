import React from "react";
import { Book, Clock, DollarSign } from "lucide-react";
import LowerComponent from "../../components/student/Library/LowerComponent.jsx";

const cardData = [
  {
    id: 1,
    title: "Books Issued",
    count: "4",
    description: "Books currently issued to you",
    icon: <Book className="w-5 h-5 text-[#4B5563]" />,
    iconBg: "bg-[#E9EEF4]",
  },
  {
    id: 2,
    title: "Due Soon",
    count: "1",
    description: "Next due: July 15",
    icon: <Clock className="w-5 h-5 text-[#FB923C]" />,
    iconBg: "bg-[#FEF4ED]",
  },
  {
    id: 3,
    title: "Fine Balance",
    count: "₹250",
    description: "Clear fines to continue borrowing",
    icon: <DollarSign className="w-5 h-5 text-[#34D399]" />,
    iconBg: "bg-[#ECFDF7]",
  },
];

const Card = ({ title, count, description, icon, iconBg }) => {
  return (
    <div className="f-full flex items-center justify-between rounded-[12px] border border-[#E5E7EB] shadow-md bg-[#FAFCFD] px-6 py-8 gap-3">
      <div className="flex flex-col gap-2">
        <p className="text-[12px] font-semibold text-[#1F1D1D]">{title}</p>
        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-semibold text-[#1F1D1D]">{count}</p>
          <p className="text-[12px] text-[#717171]">{description}</p>
        </div>
      </div>
      <div
        className={`w-11 h-11 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
};

const Library = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 min-h-screen">
      <div className="flex flex-col px-4 gap-10 mt-4">
        {/* Header */}
        <div className="bg-[#04203E] text-[#FAFCFD] p-6 rounded-lg">
          <h1 className="text-[24px] font-bold font-[Merriweather]">Library</h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-10 mb-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              count={card.count}
              description={card.description}
              icon={card.icon}
              iconBg={card.iconBg}
            />
          ))}
        </div>

        <LowerComponent />
      </div>
    </div>
  );
};

export default Library;
