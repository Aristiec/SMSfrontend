import React from "react";
import { X } from "lucide-react";

const AttachmentList = ({ attachments }) => {
  if (!attachments?.length) return null;

  return (
    <div className="space-y-2">
      <p className="text-sm text-[#717171]">Attachments:</p>
      <div className="flex flex-wrap gap-2">
        {attachments.map((file, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-2"
          >
            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
              <span className="text-red-600 text-xs font-bold">PDF</span>
            </div>
            <div>
              <p className="text-xs font-medium text-[#1F1D1D]">{file.name}</p>
              <p className="text-xs text-[#717171]">{file.size}</p>
            </div>
            <X size={14} className="text-[#717171] cursor-pointer hover:text-[#1F1D1D]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttachmentList;
