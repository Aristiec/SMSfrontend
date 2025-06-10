import React, { useState } from "react";
import {
  Clock,
  AlertCircle,
  CheckCircle,
  Calendar,
  Eye,
  Upload,
} from "lucide-react";

const Assignments = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const assignments = [
    {
      id: 1,
      title: "Literature Review",
      subject: "English Literature",
      description: "Analysis of Shakespeare's Macbeth.",
      status: "overdue",
      dueDate: "Feb 5, 2024, 11:59 PM",
      maxMarks: 20,
      submittedDate: null,
    },
    {
      id: 2,
      title: "Literature Review",
      subject: "English Literature",
      description: "Analysis of Shakespeare's Macbeth.",
      status: "pending",
      dueDate: "Feb 5, 2024, 11:59 PM",
      maxMarks: 20,
      submittedDate: null,
    },
    {
      id: 3,
      title: "Literature Review",
      subject: "English Literature",
      description: "Analysis of Shakespeare's Macbeth.",
      status: "submitted",
      dueDate: "Feb 5, 2024, 11:59 PM",
      maxMarks: 50,
      submittedDate: "Feb 9, 2024, 03:30 PM",
    },
  ];

  const upcomingAssignments = [
    {
      title: "Modern Economics",
      subject: "Economics 101",
      dueDate: "2/15/2024",
      dueTime: "11:59 PM",
    },
    {
      title: "Modern Economics",
      subject: "Economics 101",
      dueDate: "2/15/2024",
      dueTime: "11:59 PM",
    },
  ];

  const filters = ["All", "Overdue", "Pending", "Submitted"];

  const getStatusIcon = (status) => {
    switch (status) {
      case "overdue":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-orange-500" />;
      case "submitted":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "text-[#EF4444]";
      case "pending":
        return "text-[#F97316]";
      case "submitted":
        return "text-[#10B981]";
      default:
        return "text-[#1F1D1D]";
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (activeFilter === "All") return true;
    return assignment.status === activeFilter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#E9EEF4] p-6 text-[Inter]">
      <header className="bg-[#04203e] flex justify-between items-center rounded-[12px] w-[1120px] h-[68px] px-[24px] py-[12px] text-[#FAFCFD] font-[Inter] mx-auto">
        <div>
          <h1 className="text-[24px] font-bold font-[Merriweather]">
            Assignments{" "}
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-[15px]">
        <div className="w-[1120px] mx-auto mt-6 mb-6">
          <div className="flex gap-2 text-[#04203E] text-[14px] bg-[#FAFCFD] p-3 rounded-[12px]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-normal transition-colors ${
                  activeFilter === filter
                    ? "bg-[#04203E] text-[#FAFCFD]"
                    : "bg-[#FAFCFD] text-[#1F1D1D] border border-[#1F1D1D] hover:bg-[#FAFCFD]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="flex gap-6">
          <div className="flex-1">
            {/* Assignment Cards */}
            <div className="space-y-4 font-[Inter]">
              {filteredAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-[16px] font-medium text-[#1F1D1D] mb-1">
                        {assignment.title}
                      </h3>
                      <p className="text-[#1F1D1D] text-[16px] font-normal mb-2">
                        {assignment.subject}
                      </p>
                      <p className="text-[#1F1D1D] text-[12px] mb-4">
                        {assignment.description}
                      </p>
                    </div>

                    <div
                      className={`flex items-center gap-2 px-3 py-1 rounded-full `}
                    >
                      {getStatusIcon(assignment.status)}
                      <span
                        className={`font-medium capitalize ${getStatusColor(
                          assignment.status
                        )}`}
                      >
                        {assignment.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Due: {assignment.dueDate}</span>
                    </div>
                    <div>
                      <span>Max Marks: {assignment.maxMarks}</span>
                    </div>
                  </div>

                  {assignment.submittedDate && (
                    <div className="text-sm text-gray-600 mb-4">
                      <span>Submitted on: {assignment.submittedDate}</span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {assignment.status !== "submitted" && (
                      <button className="bg-slate-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Submit Assignment
                      </button>
                    )}
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-[88px] w-80">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Upcoming
                </h2>
              </div>

              <div className="space-y-4">
                {upcomingAssignments.map((assignment, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {assignment.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {assignment.subject}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Due</span>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">
                          {assignment.dueDate}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {assignment.dueTime}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
