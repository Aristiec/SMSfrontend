import React, { useState } from "react";
import {
  Clock,
  Ban,
  AlertCircle,
  CheckCircle,
  Calendar,
  Eye,
  FileUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import assignments from "../../data/mockAssignments.js";

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
const Assignments = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();
  const handleOpenAssignment = (assignment) => {
    navigate(`/assignments/${assignment.id}`);
  };

  const filters = ["All", "Overdue", "Pending", "Submitted"];

  const getStatusIcon = (status) => {
    switch (status) {
      case "overdue":
        return <Ban className="w-4 h-4 text-[#EF4444]" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-[#F97316]" />;
      case "submitted":
        return <CheckCircle className="w-4 h-4 text-[#10B981]" />;
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
    <div className="min-h-screen bg-[#E9EEF4] p-4 text-[Inter]">
      <header className="bg-[#04203e] flex justify-between items-center rounded-[12px] w-full max-w-7xl h-[68px] px-6 py-4 text-[#FAFCFD] font-[Inter] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">
          Assignments
        </h1>
      </header>

      <div className="w-full max-w-7xl mx-auto mt-6 mb-6 px-4">
        <div className="flex flex-wrap gap-2 text-[#04203E] text-sm bg-[#FAFCFD] p-3 rounded-[12px]">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-normal transition-colors flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-[#04203E] text-[#FAFCFD]"
                  : "bg-[#FAFCFD] text-[#1F1D1D] border border-[#1F1D1D] hover:bg-[#FAFCFD]"
              }`}
            >
              {filter === "Pending" && <Clock size={16} />}
              {filter === "Overdue" && <Ban size={16} />}
              {filter === "Submitted" && <CheckCircle size={16} />}
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto px-4">
        <div className="flex-1 pr-6">
          {/* Assignment Cards */}
          <div className="h-[calc(100vh-200px)] overflow-y-auto space-y-4 font-[Inter] pr-2  scrollbar-hide">
            {filteredAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-[#FAFCFD] rounded-lg shadow-sm border border-[#FAFCFD] p-6"
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

                <div className="flex items-center gap-6 text-sm text-[#1F1D1D] mb-4">
                  <div className="flex items-center gap-1">
                    <Clock
                      className={`w-4 h-4 ${
                        assignment.status === "overdue" ? "text-[#EF4444]" : ""
                      }`}
                    />
                    <span
                      className={
                        assignment.status === "overdue" ? "text-[#EF4444]" : ""
                      }
                    >
                      Due: {assignment.dueDate}
                    </span>
                  </div>
                  <div>
                    <span>Max Marks: {assignment.maxMarks}</span>
                  </div>
                </div>
                {assignment.status === "overdue" && (
                  <div className="my-[8px]">
                    <div className="flex rounded-[8px] gap-[8px] p-[8px] items-center bg-[#FEF2F2]">
                      <Ban size={16} className="text-[#EF4444]" />
                      <p className="font-[Inter] font-[400] text-[16px] leading-[0] text-center text-[#EF4444]">
                        Late submissions are not allowed
                      </p>
                    </div>
                  </div>
                )}

                {assignment.submittedDate && (
                  <div className="text-sm text-gray-600 mb-4">
                    <span>Submitted on: {assignment.submittedDate}</span>
                  </div>
                )}

                <div className="flex gap-3">
                  {assignment.status == "pending" && (
                    <button
                      onClick={() => handleOpenAssignment(assignment)}
                      className="bg-[#04203E] text-[#FAFCFD] px-4 py-2 rounded-lg font-medium  flex items-center gap-2"
                    >
                      <FileUp className="w-4 h-4" />
                      Submit Assignment
                    </button>
                  )}
                  {(assignment.status === "overdue" ||
                    assignment.status === "submitted") && (
                    <button
                      onClick={() => handleOpenAssignment(assignment)}
                      className="border border-[#1F1D1D] text-[#1F1D1D] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[357px] flex-shrink-0 h-auto mt-6 lg:mt-0">
          <div className="bg-[#FAFCFD] rounded-lg shadow-sm border border-[#FAFCFD] p-3 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-[#1F1D1D]" />
              <h2 className="text-[20px] font-semibold text-[#1F1D1D]">
                Upcoming
              </h2>
            </div>

            <div className="space-y-3 flex-1 px-1 py-1 w-[325px]">
              {upcomingAssignments.map((assignment, index) => (
                <div
                  key={index}
                  className="bg-[#FFF4ED] rounded-md px-4 py-4 w-full shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-semibold text-[#1F1D1D]">
                      {assignment.title}
                    </h3>
                    <div className="text-right">
                      <p className="text-xs text-[#1F1D1D] font-medium">
                        Due: {assignment.dueDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-[#1F1D1D]">
                      {assignment.subject}
                    </p>
                    <p className="text-xs text-[#1F1D1D]">
                      {assignment.dueTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
