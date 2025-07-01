import React from "react";
import { AlertTriangle, X } from "lucide-react";

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
  "Make sure you’ve revised, used the restroom, and are mentally ready before sitting down",
  "Water bottles must be transparent with no labels (if allowed)",
];

const ExamInstructions = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 bottom-0 right-0 z-50 flex items-center justify-center bg-[#1F1D1D66]"
      style={{ left: "240px" }}
    >
      <div className="bg-[#FFF8EC] max-w-3xl w-full p-6 rounded-md shadow-lg relative overflow-y-auto max-h-[90vh] mt-18">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <X />
        </button>
        <div className="flex items-center text-[#92400E] mb-4 font-[Inter]">
          <AlertTriangle className="mr-2" />
          <h2 className="text-[24px] font-semibold font-[Inter]">
            Instructions
          </h2>
        </div>
        <ul className="list-disc pl-6 text-[#92400E] font-[Inter] space-y-2 text-[16px] leading-relaxed">
          {instructions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExamInstructions;
