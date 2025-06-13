import React from "react";
import { Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";

const statusIcon = {
  pending: <Clock className="text-yellow-600" />,
  overdue: <AlertCircle className="text-red-600" />,
  submitted: <CheckCircle className="text-green-600" />,
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
                ? "text-yellow-600"
                : assignment.status === "overdue"
                ? "text-red-600"
                : "text-green-600"
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
