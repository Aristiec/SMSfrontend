import React from "react";
import { Calendar } from "lucide-react";

const NoOngoingExam = () => (
  <div className="bg-white rounded-lg p-6 shadow-sm border">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Ongoing Exam</h2>

    <div className="text-center py-12">
      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
        <Calendar className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No Ongoing Exams
      </h3>
      <p className="text-gray-600 text-sm max-w-md mx-auto">
        You don't have any exams in progress at the moment. Check your upcoming
        exams section below for scheduled examinations.
      </p>
    </div>
  </div>
);

export default NoOngoingExam;
