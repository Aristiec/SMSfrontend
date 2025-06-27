import React, { useState } from "react";
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
    description: (
      <>
        This is to inform all students that the final deadline for the Semester
        4 tuition fee payment is June 25, 2025. Students are advised to complete
        the payment process well in advance to avoid late fines or academic
        restrictions. As per university records, the following students have
        pending dues:{" "}
        <span className="font-bold">
          Asha Singh (1RUB203020), Karan Mehra (1RUB203041), Priya Nair
          (1RUB203027), and Rahul Das (1RUB203009)
        </span>
        . Kindly log in to your student portal, navigate to the{" "}
        <span className="font-bold">'Fee Payment'</span> section, and follow the
        payment instructions. Please note that failure to complete the payment
        by the due date will result in temporary suspension of access to course
        materials, exam schedules, and internal assessment submissions. For any
        discrepancies or queries related to your fee status, reach out to the
        Accounts Department at{" "}
        <span className="text-[#0077FF]">accounts@university.edu</span> or visit
        Room No. 108 between 10:00 AM and 4:00 PM on working days. Let's ensure
        we meet the deadline and avoid unnecessary complications.
      </>
    ),

    plaindescription:
      "This is to inform all students that the final deadline for the Semester 4 tuition fee payment is June 25, 2025. Students are advised to complete the payment process well in advance to avoid late fines or academic restrictions. As per university records, the following students have pending dues: Asha Singh (1RUB203020), Karan Mehra (1RUB203041), Priya Nair (1RUB203027), and Rahul Das (1RUB203009). Kindly log in to your student portal, navigate to the 'Fee Payment' section, and follow the payment instructions. Please note that failure to complete the payment by the due date will result in temporary suspension of access to course materials, exam schedules, and internal assessment submissions. For any discrepancies or queries related to your fee status, reach out to the Accounts Department at accounts@university.edu or visit Room No. 108 between 10:00 AM and 4:00 PM on working days. Let's ensure we meet the deadline and avoid unnecessary complications.",
    bgColor: "bg-[#FEF2F2]",
  },
  {
    id: 2,
    type: "General",
    icon: <FaBookOpen className="text-[#1D4ED8] w-[15px] h-[15px]" />,
    labelColor: "text-[#1D4ED8]",
    date: "May 20, 2023",
    title: "End of Semester Exams Schedule",
    description: (
      <>
        This is to notify all students that the End of Semester Examinations for
        Semester 4 will commence from{" "}
        <span className="font-bold">July 10, 2025</span>, and will continue till{" "}
        <span className="font-bold">July 24, 2025</span>. The detailed exam
        timetable will be uploaded to the Timetable section of the student
        dashboard by June 20, 2025. All enrolled students are advised to verify
        their subject codes, course enrollment status, and ensure all
        assignments are submitted prior to the exam period. Exams will be held
        offline in designated exam halls, with timings typically from 10:00 AM
        to 1:00 PM. Students must carry their university ID card and arrive at
        least 30 minutes before the scheduled time. Internal assessments and
        practical's will conclude by July 5, 2025. For special accommodations or
        schedule conflicts, please contact the Examination Cell at{" "}
        <span className="text-[#0077FF]">exams@university.edu</span> before June
        25, 2025
      </>
    ),
    plaindescription:
      "This is to notify all students that the End of Semester Examinations for Semester 4 will commence from July 10, 2025, and will continue till July 24, 2025. The detailed exam timetable will be uploaded to the Timetable section of the student dashboard by June 20, 2025. All enrolled students are advised to verify their subject codes, course enrollment status, and ensure all assignments are submitted prior to the exam period. Exams will be held offline in designated exam halls, with timings typically from 10:00 AM to 1:00 PM. Students must carry their university ID card and arrive at least 30 minutes before the scheduled time. Internal assessments and practical's will conclude by July 5, 2025. For special accommodations or schedule conflicts, please contact the Examination Cell at exams@university.edu before June 25, 2025.",
    bgColor: "bg-[#F4F7FA]",
  },
  {
    id: 3,
    type: "Event",
    icon: <FaCalendarAlt className="text-[#059669] w-[15px] h-[15px]" />,
    labelColor: "text-[#059669]",
    date: "May 20, 2023",
    title: "Interclass Football Competition",
    description: (
      <>
        We are excited to announce that the Annual Interclass Football
        Tournament will be held from <span className="font-bold">August 5</span>{" "}
        to <span className="font-bold">August 10, 2025</span>. The event is open
        to all departments and will take place at the Main Sports Ground.
        <br /> <br />
        Each class may register one team consisting of a maximum of 11 players
        and 4 substitutes. The registration form will be available under the
        Events section of the student portal starting July 10, and the last date
        to register is July 25. <br /> <br /> Fixtures and match timings will be
        released by August 1. All participants are required to wear proper
        sports attire and carry their college ID cards on match days. Teams
        found violating fair play or discipline rules will be disqualified. For
        any queries or clarifications, contact the Sports Coordinator at{" "}
        <span className="text-[#0077FF]">
          sports@university.edu.
        </span> <br /> <br /> Let the games begin! 🏆
      </>
    ),
    plaindescription:
      "We are excited to announce that the Annual Interclass Football Tournament will be held from August 5 to August 10, 2025. The event is open to all departments and will take place at the Main Sports Ground.Each class may register one team consisting of a maximum of 11 players and 4 substitutes. The registration form will be available under the Events section of the student portal starting July 10, and the last date to register is July 25.Fixtures and match timings will be released by August 1. All participants are required to wear proper sports attire and carry their college ID cards on match days. Teams found violating fair play or discipline rules will be disqualified.For any queries or clarifications, contact the Sports Coordinator at sports@university.edu.Let the games begin! 🏆",
    bgColor: "bg-[#ECFDF7]",
  },
];

const Notices = () => {
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
      <div className="flex flex-col px-4 gap-1 mt-4">
        {/* Header */}
        <div className="sticky top-20 rounded-[12px] px-6 py-4 bg-[#04203E] flex items-center h-[68px] ">
          <h2 className="text-[#FAFCFD] font-bold text-2xl md:text-3xl leading-[28px] tracking-[-0.01em] font-[Merriweather]">
            Notices & Announcements
          </h2>
        </div>

        {/* Notices Container */}
        <div className="mt-5 space-y-6">
          {noticesData.map((notice) => {
            const isExpanded = expandedIds.includes(notice.id);
            const shouldTruncate =
              notice.plaindescription?.split(" ").length > 30;

            return (
              <div
                key={notice.id}
                className={`${
                  notice.bgColor || "bg-[#FAFCFD]"
                } shadow-md rounded-[12px] p-6 flex flex-col gap-6 `}
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
                    <p className="w-full max-w-[986px] text-[#1F1D1D] text-base leading-[24px] font-normal font-[Inter] text-justify">
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
                      Academic Office
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

export default Notices;
