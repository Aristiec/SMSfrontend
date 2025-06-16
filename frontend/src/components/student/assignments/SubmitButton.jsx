import { FileUp } from "lucide-react";
import React from "react";

const SubmitButton = ({ onSubmit, disabled }) => {
  return (
    <button
      onClick={disabled ? null : onSubmit}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-4 py-2 rounded font-medium transition
        ${
          disabled
            ? "bg-[rgba(4,32,62,0.4)] cursor-not-allowed text-[#FAFCFD]"
            : "bg-[rgba(4,32,62,0.4)] hover:bg-[rgba(4,32,62,0.6)] text-[#FAFCFD]"
        }`}
    >
      <FileUp className="w-4 h-4" />
      <span>Submit Assignment</span>
    </button>
  );
};

export default SubmitButton;
