import React from "react";
import { Calendar, Clock, Ban, AlertCircle, CheckCircle } from "lucide-react";

const statusIcon = {
  pending: <AlertCircle className="text-[#F97316]" />,
  overdue: <Ban className="text-[#EF4444]" />,
  submitted: <CheckCircle className="text-[#10B981]" />,
};

const AssignmentCard = ({ assignment }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{assignment.title}</h2>
        <div className="flex items-center gap-2">
          {statusIcon[assignment.status]}
          <span
            className={`capitalize font-medium ${
              assignment.status === "pending"
                ? "text-[#F97316]"
                : assignment.status === "overdue"
                ? "text-[#EF4444]"
                : "text-[#10B981]"
            }`}
          >
            {assignment.status}
          </span>
        </div>
      </div>
      <p className="text-gray-600">{assignment.subject}</p>
      <p className="mt-2 text-sm text-gray-700">{assignment.description}</p>
      <div className="flex items-center mt-2 text-sm text-gray-500">
        <Calendar className="w-4 h-4 mr-1" />
        Due: {assignment.dueDate}
      </div>
    </div>
  );
};

export default AssignmentCard;
