import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

const noticesData = [
  {
    id: 1,
    type: "Alert",
    icon: <FiAlertCircle className="text-[#EF4444] w-[15px] h-[15px]" />,
    labelColor: "text-[#EF4444]",
    date: "May 20, 2023",
    title: "Fee Payment Due",
    description:
      "Designer Donald Schön wrote that professionals like designers think while they do things. This is called reflection-in-action. For example, when we were building different versions of the BlahBlah Cam, we would try something, notice it didn't work well, and change it on the spot. That process was how we learned.",
    bgColor: "bg-[#FEF2F2]",
  },
  {
    id: 2,
    type: "General",
    icon: <FaBookOpen className="text-[#1D4ED8] w-[15px] h-[15px]" />,
    labelColor: "text-[#1D4ED8]",
    date: "May 20, 2023",
    title: "End of Semester Exams Schedule",
    description:
      "The end of semester examinations will commence on June 15th, 2023. Please check the detailed schedule on the academic portal.",
    bgColor: "bg-[#F4F7FA]",
  },
  {
    id: 3,
    type: "Event",
    icon: <FaCalendarAlt className="text-[#059669] w-[15px] h-[15px]" />,
    labelColor: "text-[#059669]",
    date: "May 20, 2023",
    title: "Interclass Football Competition",
    description:
      "Designer Donald Schön wrote that professionals like designers think while they do things. This is called reflection-in-action. For example, when we were building different versions of the BlahBlah Cam, we would try something, notice it didn't work well, and change it on the spot. That process was how we learned.",
    bgColor: "bg-[#ECFDF7]",
  },
];

const Notices = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="rounded-[12px] px-6 py-4 bg-[#04203E] flex items-center">
        <h2 className="text-[#FAFCFD] font-bold text-2xl md:text-3xl leading-[28px] tracking-[-0.01em] font-[Merriweather]">
          Notices & Announcements
        </h2>
      </div>

      {/* Notices Container */}
      <div className="mt-8 space-y-6">
        {noticesData.map((notice) => (
          <div
            key={notice.id}
            className={`${notice.bgColor} shadow-md rounded-[12px] p-6 flex flex-col gap-6`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {notice.icon}
                <span
                  className={`${notice.labelColor} text-sm md:text-base font-medium font-[Inter]`}
                >
                  {notice.type}
                </span>
              </div>
              <span className="text-[#1F1D1D] text-xs md:text-sm font-normal font-[Inter]">
                {notice.date}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[#1F1D1D] text-lg md:text-xl leading-[28px] font-semibold font-[Inter]">
                {notice.title}
              </h3>
              <p className="text-[#1F1D1D] text-base leading-[24px] font-normal font-[Inter]">
                {notice.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <span className="text-[#1F1D1D] text-xs font-light font-[Inter]">
                  Posted by:
                </span>
                <span className="text-[#1F1D1D] text-xs font-light font-[Inter]">
                  Academic Office
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
