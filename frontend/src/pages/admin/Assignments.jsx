import React from "react";
import {
  CircleAlert,
  CircleCheckBig,
  Ban,
  Book,
  Clock,
  Eye,
  FileUp,
} from "lucide-react";
import { AlertCircle } from "lucide-react";

export default function AssignmentsExams() {
  const cards = [
    {
      title: "Pending Assignments",
      value: 3,
      subtitle: "Semester 3",
      icon: <CircleAlert className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Submitted Assignments",
      value: 4,
      subtitle: "Last updated today",
      icon: <CircleCheckBig className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Overdue Assignments",
      value: 1,
      // subtitle: "—",
      icon: <Ban className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Upcoming Exams",
      value: 3,
      subtitle: "Latest notice",
      icon: <Book className="w-6 h-6 text-[#0b2447]" />,
    },
  ];

  const exams = [
    {
      subject: "Data Structures and Algorithms",
      type: "Mid-term Examination",
      due: "Feb 5, 2024, 11:59 PM",
      room: "Room 101",
      duration: "3 hours",
    },
    {
      subject: "Data Structures and Algorithms",
      type: "Mid-term Examination",
      due: "Feb 5, 2024, 11:59 PM",
      room: "Room 101",
      duration: "3 hours",
    },
    {
      subject: "Data Structures and Algorithms",
      type: "Mid-term Examination",
      due: "Feb 5, 2024, 11:59 PM",
      room: "Room 101",
      duration: "3 hours",
    },
    {
      subject: "Data Structures and Algorithms",
      type: "Mid-term Examination",
      due: "Feb 5, 2024, 11:59 PM",
      room: "Room 101",
      duration: "3 hours",
    },
  ];
  const submissions = [
    {
      title: "Literature Review",
      subject: "English Literature",
      desc: "Analysis of Shakespeare's Macbeth.",
      due: "Feb 5, 2024, 11:59 PM",
      marks: 20,
      status: "Overdue",
      statusColor: "text-red-500",
      action: "View Details",
      extra: "Late submissions are not allowed",
      extraColor: "bg-red-50 text-red-600",
      icon: <Ban className="w-5 h-5 text-red-500" />,
    },
    {
      title: "Literature Review",
      subject: "English Literature",
      desc: "Analysis of Shakespeare's Macbeth.",
      due: "Feb 5, 2024, 11:59 PM",
      marks: 20,
      status: "Pending",
      statusColor: "text-orange-500",
      action: "Submit Assignment",
      icon: <CircleAlert className="w-5 h-5 text-orange-500" />,
    },
    {
      title: "Literature Review",
      subject: "English Literature",
      desc: "Analysis of Shakespeare's Macbeth.",
      due: "Feb 5, 2024, 11:59 PM",
      marks: 50,
      status: "Submitted",
      statusColor: "text-green-500",
      action: "View Details",
      submittedOn: "Feb 9, 2024, 03:30 PM",
      icon: <CircleCheckBig className="w-5 h-5 text-green-500" />,
    },
  ];
  const grades = [
    {
      title: "Data Structures and Algorithms Case Study",
      subject: "Data Structures",
      submittedOn: "Feb 5, 2024, 11:59 PM",
      feedback: "Excellent analysis and presentation",
      grade: "85/100",
      gradeLabel: "A+",
    },
    {
      title: "Data Structures and Algorithms Case Study",
      subject: "Data Structures",
      submittedOn: "Feb 5, 2024, 11:59 PM",
      feedback: "Excellent analysis and presentation",
      grade: "85/100",
      gradeLabel: "A+",
    },
    {
      title: "Data Structures and Algorithms Case Study",
      subject: "Data Structures",
      submittedOn: "Feb 5, 2024, 11:59 PM",
      feedback: "Excellent analysis and presentation",
      grade: "85/100",
      gradeLabel: "A+",
    },
  ];

  return (
    <>
      <div className="p-5">
        {/* Header */}
        <div className="bg-[#0b2447] text-white font-semibold text-2xl px-6 py-3 rounded-xl shadow-md mb-6">
          Assignments & Exams
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-5 flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-700">
                  {card.title}
                </p>
                {card.icon}
              </div>
              <h2 className="text-2xl font-semibold">{card.value}</h2>
              <p className="text-sm text-gray-500">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 space-y-8">
        {/* Exam Schedule Section */}
        <div>
          <div className="bg-[#0b2447] text-white font-semibold text-2xl px-6 py-3 rounded-xl shadow-md mb-6">
            Exam Schedule
          </div>
          <div className="space-y-4">
            {exams.map((exam, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold">{exam.subject}</h3>
                  <p className="text-sm text-[#1F1D1D]">{exam.type}</p>
                  <div className="flex items-center gap-2 text-sm text-[#1F1D1D] mt-1">
                    <Clock className="w-4 h-4" />
                    <span>Due: {exam.due}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{exam.room}</p>
                  <p className="text-sm text-[#1F1D1D]">{exam.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5 space-y-8">
        <div className="bg-[#0b2447] text-white font-semibold text-2xl px-4 py-3 rounded-xl shadow-md mb-6">
          Assignments
        </div>
        <div className="space-y-4">
          {submissions.map((sub, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-5 ">
              <div className="flex justify-between items-start">
                <div className="w-full">
                  <h3 className="text-lg font-semibold">{sub.title}</h3>
                  <p className="text-sm text-gray-600">{sub.subject}</p>
                  <p className="text-sm text-gray-500">{sub.desc}</p>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <Clock
                      className={`w-4 h-4 ${
                        sub.status === "Overdue"
                          ? "text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`${
                        sub.status === "Overdue"
                          ? "text-red-500 "
                          : "text-gray-600"
                      }`}
                    >
                      Due: {sub.due}
                    </span>
                    <span className="ml-2 text-gray-600">
                      Max Marks: {sub.marks}
                    </span>
                  </div>

                  {sub.extra && (
                    <p
                      className={`mt-2 px-3 py-2   text-sm rounded-md ${sub.extraColor}`}
                    >
                      <Ban className="inline justify-center text-center w-4 h-4 mr-1" />
                      {sub.extra}
                    </p>
                  )}

                  {sub.submittedOn && (
                    <p className="text-sm text-gray-500 mt-1">
                      Submitted on: {sub.submittedOn}
                    </p>
                  )}

                  <button
                    className={`mt-3 px-4 py-2 rounded-md flex items-center gap-2 transition
    ${
      sub.action === "Submit Assignment"
        ? "bg-[#0b2447] text-white hover:bg-[#13306b]"
        : "border border-gray-400 text-gray-700 hover:bg-gray-100"
    }`}
                  >
                    {sub.action === "Submit Assignment" ? (
                      <FileUp className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                    {sub.action}
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  {sub.icon}
                  <span className={`text-sm font-medium ${sub.statusColor}`}>
                    {sub.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 space-y-8">
        {/* Header */}
        <div className="bg-[#0b2447] text-white font-semibold text-2xl px-4 py-3 rounded-xl shadow-md mb-6">
          Recent Submissions & Grades
        </div>

        {/* Cards */}
        <div className="space-y-4 ">
          {grades.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-5 flex justify-between items-start"
            >
              {/* Left content */}
              <div className="w-full">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-[#1F1D1D]">{item.subject}</p>

                {/* Submitted Date */}
                <div className="flex items-center gap-2 text-sm text-gray-900 mt-2">
                  <Clock className="w-4 h-4" />
                  <span>Submitted on: {item.submittedOn}</span>
                </div>

                {/* Feedback */}
                <p className="mt-3 px-3 py-2 bg-[#E9EEF4] rounded-md text-sm">
                  <span className="font-semibold text-gray-800">Feedback:</span>{" "}
                  <span className="text-gray-700">{item.feedback}</span>
                </p>
              </div>

              {/* Grade */}
              <div className="flex flex-col items-end">
                <span className="mt-1 px-2 py-0.5 border border-green-400 text-green-500 text-xs font-semibold rounded-full">
                  {item.gradeLabel}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
