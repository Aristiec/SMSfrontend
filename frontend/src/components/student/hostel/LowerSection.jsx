import React, { useState } from "react";
import { House, CircleAlert, Wrench, Book, Phone } from "lucide-react";
import Maintenance from "./Maintenance";
import HostelAndRooms from "./HostelAndRooms";
import RulesAndTiming from "./RulesAndTiming";
import PaymentHistory from "./PaymentHistory";
import Contacts from "./Contacts";
const menuItems = [
  {
    icon: <House size={14} />,
    title: "Hostel & Room Details",
  },
  {
    icon: <CircleAlert size={14} />,
    title: "Rules & Timings",
  },
  {
    icon: <Wrench size={14} />,
    title: "Maintenance",
  },
  {
    icon: <Book size={14} />,
    title: "Fee Payment",
  },
  {
    icon: <Phone size={14} />,
    title: "Contacts",
    
  },
];

const LowerSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section
      style={{ boxShadow: "0px 4px 8px 0px #0000003D" }}
      className="flex flex-col rounded-[12px] p-6 gap-6 bg-[#FAFCFD] w-full"
    >
      <div className="flex gap-8">
        {menuItems.map((item, index) => (
          <button
            onClick={() => {
              if (item.link) {
                window.location.href = item.link;
              } else {
                setSelectedIndex(index);
              }
            }}
            className={`flex gap-2 rounded-[5px]   p-1   font-medium text-[12px] leading-4 tracking-normal items-center trasition-all duration-300 ease-in ${
              selectedIndex === index
                ? "text-[#1F1D1D] border-b-1 border-[#1F1D1D]"
                : "text-[#717171]"
            }`}
            key={index}
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div>
        {selectedIndex === 0 ? (
          <HostelAndRooms />
        ) : selectedIndex === 1 ? (
          <RulesAndTiming />
        ) : selectedIndex === 2 ? (
          <Maintenance />
        ) : selectedIndex === 3 ? (
          <PaymentHistory />
        ) : selectedIndex === 4 ? (
          <Contacts />
        ):
         null}
      </div>
    </section>
  );
};

export default LowerSection;

