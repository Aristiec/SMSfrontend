import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

const notices = [
  {
    id: 1,
    type: "Alert",
    icon: <FiAlertCircle className="text-[#EF4444] w-[15px] h-[15px]" />,
    labelColor: "text-[#EF4444]",
    date: "Aug 25, 2025",
    title: "Parent-Teacher Meeting Scheduled",
    description: (
      <>
        This is to inform all parents that the Parent-Teacher Conference for Semester 4 is scheduled for{" "}
        <span className="font-bold">September 15, 2025</span> from 10:00 AM to 4:00 PM. 
        Please log in to your parent portal to book time slots with your child's teachers. Each meeting will be 
        for 15 minutes and will be held in the respective classrooms. Parents are requested to bring their 
        child's previous report cards and any concerns they wish to discuss. For scheduling conflicts or 
        queries, contact the front office at{" "}
        <span className="text-[#0077FF]">frontoffice@school.edu</span> or call (555) 123-4567.
      </>
    ),
    plaindescription:
      "This is to inform all parents that the Parent-Teacher Conference for Semester 4 is scheduled for September 15, 2025 from 10:00 AM to 4:00 PM. Please log in to your parent portal to book time slots with your child's teachers. Each meeting will be for 15 minutes and will be held in the respective classrooms. Parents are requested to bring their child's previous report cards and any concerns they wish to discuss. For scheduling conflicts or queries, contact the front office at frontoffice@school.edu or call (555) 123-4567.",
    bgColor: "bg-[#FEF2F2]",
    postedBy: "Academic Office",
  },
  {
    id: 2,
    type: "General",
    icon: <FaBookOpen className="text-[#1D4ED8] w-[15px] h-[15px]" />,
    labelColor: "text-[#1D4ED8]",
    date: "Aug 20, 2025",
    title: "New Academic Session Guidelines",
    description: (
      <>
        Dear Parents, as we begin the new academic session, please note the following important guidelines:
        <br /><br />
        1. <span className="font-bold">School Timings:</span> 8:00 AM to 3:30 PM (Monday to Friday)
        <br />
        2. <span className="font-bold">Homework Policy:</span> Maximum 2 hours of homework per day
        <br />
        3. <span className="font-bold">Mobile Phones:</span> Not allowed in school premises
        <br />
        4. <span className="font-bold">Uniform:</span> Mandatory on all school days
        <br /><br />
        Parents are requested to ensure their children follow these guidelines. The complete handbook 
        has been uploaded to the parent portal under the{" "}
        <span className="font-bold">'Documents'</span> section.
      </>
    ),
    plaindescription:
      "Dear Parents, as we begin the new academic session, please note the following important guidelines: 1. School Timings: 8:00 AM to 3:30 PM (Monday to Friday) 2. Homework Policy: Maximum 2 hours of homework per day 3. Mobile Phones: Not allowed in school premises 4. Uniform: Mandatory on all school days. Parents are requested to ensure their children follow these guidelines. The complete handbook has been uploaded to the parent portal under the 'Documents' section.",
    bgColor: "bg-[#F4F7FA]",
    postedBy: "Principal's Office",
  },
  {
    id: 3,
    type: "Event",
    icon: <FaCalendarAlt className="text-[#059669] w-[15px] h-[15px]" />,
    labelColor: "text-[#059669]",
    date: "Aug 18, 2025",
    title: "Annual Science Fair 2025",
    description: (
      <>
        We are excited to announce the Annual Science Fair will be held on{" "}
        <span className="font-bold">October 5, 2025</span> from 9:00 AM to 5:00 PM in the Main Auditorium.
        <br /><br />
        This year's theme is <span className="font-bold">"Innovation for Tomorrow"</span>. Students from 
        grades 6-12 can participate individually or in teams of up to 3 members. Project registration 
        forms are available in the office and must be submitted by September 10, 2025.
        <br /><br />
        Parents are cordially invited to attend and witness their children's creativity and scientific 
        thinking. Light refreshments will be provided. For more details, contact the Science Department 
        at <span className="text-[#0077FF]">science@school.edu</span>
        <br /><br />
        Let's encourage our young scientists! 🔬
      </>
    ),
    plaindescription:
      "We are excited to announce the Annual Science Fair will be held on October 5, 2025 from 9:00 AM to 5:00 PM in the Main Auditorium. This year's theme is 'Innovation for Tomorrow'. Students from grades 6-12 can participate individually or in teams of up to 3 members. Project registration forms are available in the office and must be submitted by September 10, 2025. Parents are cordially invited to attend and witness their children's creativity and scientific thinking. Light refreshments will be provided. For more details, contact the Science Department at science@school.edu. Let's encourage our young scientists! 🔬",
    bgColor: "bg-[#ECFDF7]",
    postedBy: "Science Department",
  },
  {
    id: 4,
    type: "Alert",
    icon: <FiAlertCircle className="text-[#EF4444] w-[15px] h-[15px]" />,
    labelColor: "text-[#EF4444]",
    date: "Aug 15, 2025",
    title: "Transportation Route Changes",
    description: (
      <>
        Due to ongoing road construction on Main Street, the following bus routes will be temporarily modified 
        starting <span className="font-bold">August 28, 2025</span>:
        <br /><br />
        <span className="font-bold">Route 3:</span> Will take Oak Avenue instead of Main Street
        <br />
        <span className="font-bold">Route 7:</span> Additional 10-minute delay expected
        <br />
        <span className="font-bold">Route 12:</span> New pickup point at Community Center
        <br /><br />
        Parents are advised to inform their children about these changes and adjust pickup/drop-off 
        timings accordingly. The changes will remain in effect until further notice. For specific 
        route queries, contact our Transport Coordinator at{" "}
        <span className="text-[#0077FF]">transport@school.edu</span>
      </>
    ),
    plaindescription:
      "Due to ongoing road construction on Main Street, the following bus routes will be temporarily modified starting August 28, 2025: Route 3: Will take Oak Avenue instead of Main Street, Route 7: Additional 10-minute delay expected, Route 12: New pickup point at Community Center. Parents are advised to inform their children about these changes and adjust pickup/drop-off timings accordingly. The changes will remain in effect until further notice. For specific route queries, contact our Transport Coordinator at transport@school.edu",
    bgColor: "bg-[#FEF2F2]",
    postedBy: "Transport Department",
  }
];

const Notifications = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getPreviewText = (text, wordLimit = 30) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " "
      : text;
  };

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-5 mt-4">
        {/* Header */}
        <div className="sticky top-20 rounded-[12px] px-6 py-4 bg-[#04203E] flex items-center h-[68px]">
          <h2 className="text-[#FAFCFD] font-bold text-2xl md:text-3xl leading-[28px] tracking-[-0.01em] font-[Merriweather]">
            Notifications and Announcements
          </h2>
        </div>



        {/* All Notices */}
        <div className="mt-2 space-y-6">
          
          {notices.map((notice) => {
            const isExpanded = expandedIds.includes(notice.id);
            const shouldTruncate = notice.plaindescription?.split(" ").length > 30;

            return (
              <div
                key={notice.id}
                className={`${
                  notice.bgColor || "bg-[#FAFCFD]"
                } shadow-md rounded-[12px] p-6 flex flex-col gap-6 cursor-pointer hover:shadow-lg transition-shadow`}
                onClick={() => toggleExpand(notice.id)}
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
                  <span className="text-[#1F1D1D] text-[12px] md:text-[12px] font-normal font-[Inter]">
                    {notice.date}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="text-[#1F1D1D] text-lg md:text-xl leading-[28px] font-semibold font-[Inter]">
                    {notice.title}
                  </h3>

                  <div
                    className={`
                      overflow-hidden transition-all duration-800 ease-in-out
                      ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-[72px] opacity-90"}
                    `}
                  >
                    <p className="w-full text-[#1F1D1D] text-base leading-[24px] font-normal font-[Inter] text-justify">
                      {isExpanded || !shouldTruncate
                        ? notice.description
                        : getPreviewText(notice.plaindescription)}

                      {shouldTruncate && !isExpanded && (
                        <span className="text-[#0077FF] ml-1 cursor-pointer inline font-medium">
                          read more
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <span className="text-[#1F1D1D] text-xs font-light font-[Inter]">
                      Posted by:
                    </span>
                    <span className="text-[#1F1D1D] text-xs font-light font-[Inter]">
                      {notice.postedBy}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;