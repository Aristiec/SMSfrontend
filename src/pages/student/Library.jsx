import React, { useEffect, useState } from "react";
import { Book, Clock, DollarSign } from "lucide-react";
import LowerComponent from "../../components/student/Library/LowerComponent.jsx";
import { fetchLibrarySummary } from "../../features/auth/authAPI.js";

const Card = ({ title, count, description, icon, iconBg }) => {
  return (
    <div className="f-full flex items-center justify-between rounded-[12px] border border-[#E5E7EB] shadow-md bg-[#FAFCFD] px-6 py-8 gap-3">
      <div className="flex flex-col gap-2 -mb-1.5">
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
  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: "Books Issued",
      count: "--",
      description: "Books currently issued to you",
      icon: <Book className="w-5 h-5 text-[#4B5563]" />,
      iconBg: "bg-[#E9EEF4]",
    },
    {
      id: 2,
      title: "Due Soon",
      count: "--",
      description: "Next due: --",
      icon: <Clock className="w-5 h-5 text-[#FB923C]" />,
      iconBg: "bg-[#FEF4ED]",
    },
    {
      id: 3,
      title: "Fine Balance",
      count: "--",
      description: "Clear fines to continue borrowing",
      icon: <DollarSign className="w-5 h-5 text-[#34D399]" />,
      iconBg: "bg-[#ECFDF7]",
    },
  ]);

  useEffect(() => {
    const getLibrarySummary = async () => {
      try {
        const studentId = localStorage.getItem("studentId");
        const data = await fetchLibrarySummary(studentId);

        setCardData([
          {
            id: 1,
            title: "Books Issued",
            count: data.totalBooksIssued,
            description: "Books currently issued to you",
            icon: <Book className="w-5 h-5 text-[#4B5563]" />,
            iconBg: "bg-[#E9EEF4]",
          },
          {
            id: 2,
            title: "Due Soon",
            count: data.dueSoonCount,
            description: `Next due: ${data.nextDueDate || "--"}`,
            icon: <Clock className="w-5 h-5 text-[#FB923C]" />,
            iconBg: "bg-[#FEF4ED]",
          },
          {
            id: 3,
            title: "Fine Balance",
            count: `₹${data.totalFine}`,
            description: "Clear fines to continue borrowing",
            icon: <DollarSign className="w-5 h-5 text-[#34D399]" />,
            iconBg: "bg-[#ECFDF7]",
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch library summary:", error);
      }
    };

    getLibrarySummary();
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-8 min-h-screen">
      <div className="flex flex-col px-4 gap-6 mt-4">
        <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather]">Library</h1>
        </header>

        <div className="grid grid-cols-3 gap-10 mb-1.5">
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
