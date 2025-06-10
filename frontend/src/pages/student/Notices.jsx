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
      "Designer Donald Schön wrote that professionals like designers think while they do things. This is called reflection-in-action. For example, when we were building different versions of the BlahBlah Cam, we would try something, notice it didn’t work well, and change it on the spot. That process was how we learned.",
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
      "Designer Donald Schön wrote that professionals like designers think while they do things. This is called reflection-in-action. For example, when we were building different versions of the BlahBlah Cam, we would try something, notice it didn’t work well, and change it on the spot. That process was how we learned.",
    bgColor: "bg-[#ECFDF7]",
  },
];

const Notices = () => {
  return (
    <>
      <div className="w-[1120px] mt-[40px] ml-[20px] space-y-[20px]">
        {/*  Header */}
        <div className="h-[68px] rounded-[12px] px-[24px] py-[18px] bg-[#04203E] flex items-center">
          <h2 className="text-[#FAFCFD] font-bold text-[24px] leading-[28px] tracking-[-0.01em] font-[Merriweather]">
            Notices & Announcements
          </h2>
        </div>

        {/* Looping with map */}
        {noticesData.map((notice) => (
          <div
            key={notice.id}
            className={`h-[240px] ${notice.bgColor} shadow-[0_4px_8px_0px_rgba(0,0,0,0.2)] rounded-[12px] p-[24px] flex flex-col gap-[24px]`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[12px]">
                {notice.icon}
                <span
                  className={`${notice.labelColor} text-[14px] font-medium font-[Inter]`}
                >
                  {notice.type}
                </span>
              </div>
              <span className="text-[#1F1D1D] text-[12px] font-normal font-[Inter]">
                {notice.date}
              </span>
            </div>

            <div className="w-[926px] flex flex-col gap-[12px]">
              <h3 className="text-[#1F1D1D] text-[16px] leading-[28px] font-semibold font-[Inter]">
                {notice.title}
              </h3>
              <p className="text-[#1F1D1D] text-[16px] leading-[24px] font-normal font-[Inter]">
                {notice.description}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-[4px]">
                <span className="text-[#1F1D1D] text-[12px] font-light font-[Inter]">
                  Posted by:
                </span>
                <span className="text-[#1F1D1D] text-[12px] font-light font-[Inter]">
                  Academic Office
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notices;
