import React from "react";
import { AlertTriangle } from "lucide-react";

export default function ExamInstructions() {
  const instructions = [
    "Reach the exam hall/platform at least 30 minutes early",
    "Late entry may not be allowed after the scheduled time",
    "Bring your Admit Card/Hall Ticket and College ID card",
    "Without valid ID proof, entry to the examination will be denied",
    "Do not carry mobile phones, smartwatches, Bluetooth devices, books, or notes",
    "Only allowed stationery (pen, pencil, eraser, calculator if permitted) should be brought",
    "Find your assigned seat based on your seat number",
    "Ensure your name and roll number match the seat label or attendance sheet",
    "Sit calmly and maintain silence",
    "Pay attention to announcements or instructions given by the invigilator",
    "Do not begin writing or touching the paper until instructed",
    "Check if your question paper is complete and correctly printed",
    "Write your Roll Number, Subject, Date, and Signature on the answer sheet where instructed",
    "Do not make any unwanted markings",
    "Silence must be maintained at all times",
    "Do not communicate, gesture, or exchange items with others",
    "Any use of unfair means will lead to exam cancellation and disciplinary action",
    "Surveillance (CCTV/proctor) may be active during the exam",
    "Make sure you've revised, used the restroom, and are mentally ready before sitting down",
    "Water bottles must be transparent with no labels (if allowed)",
  ];

  return (
    <div
      className="bg-amber-50 border border-amber-200 rounded-lg p-6 gap-4"
      style={{
        width: "969px",
        height: "650px",
        overflow: "auto",
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-6 h-6 bg-amber-600 rounded-full flex-shrink-0">
          <span className="text-white text-sm font-bold">!</span>
        </div>
        <h2 className="text-amber-800 text-xl font-semibold">Instructions</h2>
      </div>

      <div className="space-y-3">
        {instructions.map((instruction, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-amber-800 text-sm leading-relaxed">
              {instruction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
