import React from "react";
import { FaPen, FaFileAlt } from "react-icons/fa";
const ExamSchedule = () => {
  const scheduleData = [
    {
      type: "Exam",
      title: "Web Development",
      date: "May 20, 2030",
      time: "10:00 AM",
      venue: "Exam Hall 3",
      dateColor: "text-[#EF4444]",
    },
    {
      type: "Assignment",
      title: "Algorithm Analysis Report",
      date: "May 20, 2030",
      time: "10:00 AM",
      venue: "Online Submission",
      dateColor: "text-[#EF4444]",
    },
    {
      type: "Assignment",
      title: "DBMS",
      date: "May 20, 2030",
      time: "10:00 AM",
      venue: "Room 201",
      dateColor: "text-[#EF4444]",
    },
    {
      type: "Exam",
      title: "Cyber Security",
      date: "May 24, 2030",
      time: "10:00 AM",
      venue: "Exam Hall 3",
      dateColor: "text-[#1F1D1D]",
    },
    {
      type: "Assignment",
      title: "Digital Arts",
      date: "May 28, 2030",
      time: "10:00 AM",
      venue: "Online Submission",
      dateColor: "text-[#1F1D1D]",
    },
    {
      type: "Exam",
      title: "Artificial Intelligence",
      date: "May 28, 2030",
      time: "10:00 AM",
      venue: "Exam Hall 3",
      dateColor: "text-[#1F1D1D]",
    },
    {
      type: "Assignment",
      title: "DBMS",
      date: "May 30, 2030",
      time: "10:00 AM",
      venue: "Online Submission",
      dateColor: "text-[#1F1D1D]",
    },
  ];

  const TypeIcon = ({ type }) => {
    const isExam = type === "Exam";
    return (
      <div className="flex items-center gap-2">
        {isExam ? <FaPen size={12} /> : <FaFileAlt size={12} />}

        <span className="text-sm text-[#717171]">{type}</span>
      </div>
    );
  };

  return (
    <div className="w-[740px] h-[471px] max-w-6xl mx-auto bg-[#FAFCFD] rounded-xl shadow-lg overflow-hidden">
      <div className="bg-[#04203E] text-white px-8 py-4">
        <h1 className="text-[18px] font-[Merriweather] font-semibold">
          Upcoming Exams & Assignment
        </h1>
      </div>

      <div className="overflow-x-auto  bg-[#FAFCFD]">
        <table className="w-full">
          <thead>
            <tr className="border-b-1 border-[#1F1D1D]">
              <th className="text-left text-[#1F1D1D] px-4 py-3 text-[12px] font-medium font-[Inter]">
                Type
              </th>
              <th className="text-left text-[#1F1D1D] px-4 py-3 text-[12px] font-medium font-[Inter]">
                Title
              </th>
              <th className="text-left text-[#1F1D1D] px-4 py-3 text-[12px] font-medium font-[Inter]">
                Date
              </th>
              <th className="text-left text-[#1F1D1D] px-4 py-3 text-[12px] font-medium font-[Inter]">
                Time
              </th>
              <th className="text-left text-[#1F1D1D] px-4 py-3 text-[12px] font-medium font-[Inter]">
                Venue
              </th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className="">
                <td className="px-4 py-3 text-[#717171] text-xs font-[Inter]">
                  <TypeIcon type={item.type} />
                </td>
                <td className="px-4 py-3 text-xs font-[Inter] text-[#1F1D1D]">
                  {item.title}
                </td>
                <td
                  className={`px-4 py-3 text-xs font-[Inter] ${item.dateColor}`}
                >
                  {item.date}
                </td>
                <td className="px-4 py-3 text-xs font-[Inter] text-[#1F1D1D]">
                  {item.time}
                </td>
                <td className="px-4 py-3 text-xs font-[Inter] text-[#1F1D1D]">
                  {item.venue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamSchedule;
