import React, { useState } from "react";
import { Upload } from "lucide-react";

const UploadSection = ({ assignment, disabled, onFileUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    if (files.length && assignment.status !== "overdue") {
      const newFiles = [...selectedFiles, ...files];
      setSelectedFiles(newFiles);
      onFileUpload(newFiles); // send updated file list to parent
    }
  };

  const isOverdue = assignment.status === "overdue";

  return (
    <div className="p-4">
      {(assignment.status === "pending" || isOverdue) && (
        <div className="mb-6 w-full  mx-auto">
          <h3 className="text-[16px] font-[Inter] font-medium text-[#1F1D1D] mb-5">
            Upload Files
          </h3>

          {/* Dashed Border Box */}
          <div
            className={`relative rounded-lg p-8 text-center ${
              isOverdue ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none rounded-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                fill="none"
                stroke="rgba(4,32,62,0.4)"
                strokeWidth="2"
                strokeDasharray="12, 8"
                rx="12"
              />
            </svg>

            <input
              type="file"
              multiple // allow multiple files
              onChange={handleFileSelect}
              className={`absolute inset-0 w-full h-full opacity-0 z-10 ${
                isOverdue ? "pointer-events-none" : "pointer-events-auto"
              }`}
            />

            <Upload
              className={`w-[28px] h-[28px] ${
                isOverdue ? "text-[rgba(4,32,62,0.4)]" : "text-[#04203E]"
              } mx-auto mb-4`}
            />
            <p
              className={`text-[13.6px] mb-2 ${
                isOverdue ? "text-[rgba(4,32,62,0.4)]" : "text-[#04203E]"
              }`}
            >
              Click to upload or drag and drop
            </p>
            <p
              className={`text-[10.2px] mb-4 ${
                isOverdue ? "text-[rgba(4,32,62,0.4)]" : "text-[#04203E]"
              }`}
            >
              PDF, DOC, DOCX, ZIP (Max 10MB)
            </p>
          </div>

          {/* Uploaded Files List */}
          {selectedFiles.length > 0 && (
            <div className="mt-4">
              <h3 className="text-[16px] font-[Inter] font-normal text-[#1F1D1D] mb-2 text-left">
                Uploaded Files
              </h3>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="bg-[#CFDCEB] w-full rounded-md px-4 py-3 flex items-center gap-3"
                  >
                    <Upload className="w-5 h-5 text-[#04203E]" />
                    <span className="text-[#04203E] text-sm font-medium break-words">
                      {file.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadSection;
