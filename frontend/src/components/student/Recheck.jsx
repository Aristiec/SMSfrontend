import { Upload } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Recheck = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { state } = useLocation();
  const result = state?.result; 
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    if (files.length && assignment.status !== "overdue") {
      const newFiles = [...selectedFiles, ...files];
      setSelectedFiles(newFiles);
      onFileUpload(newFiles);
    }
  };

  return (
    <div className=" bg-[#FAFCFD] flex flex-col gap-8 min-h-screen font-[Inter] rounded-[12px] mt-4 mx-5">
      <div className="h-auto flex flex-col gap-6 rounded-[12px] p-6 ">
        <div className="font-semibold text-[24px] leading-[28px]">
          Apply for Exam Recheck
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-between gap-[24px] w-full font-[Inter]">
            <div className="flex flex-col gap-2 w-1/2">
              <div className="font-medium text-[12px] leading-[18px] text-[#717171]">
                Subject Name
              </div>
              <div className="border border-[#D1D5DB] font-[400] rounded-[4px] px-3 py-3 text-[16px] leading-[24px] text-[#1F1D1D]">
                {result?.title}
              </div>
            </div>

            {/* Exam  */}
            <div className="flex flex-col gap-2 w-1/2">
              <div className="font-medium text-[12px] leading-[18px] text-[#717171]">
                Exam Type
              </div>
              <div className="border border-[#D1D5DB] font-[400] rounded-[4px] px-3 py-3 text-[16px] leading-[24px] text-[#1F1D1D]">
                {result?.subject}
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-[24px]">
            {/* Exam  date*/}
            <div className="flex flex-col gap-2 w-1/2">
              <div className="font-medium text-[12px] leading-[18px] text-[#717171]">
                Exam Date
              </div>
              <div className="border border-[#D1D5DB] font-[400] rounded-[4px]  px-3 py-3 text-[16px] leading-[24px] text-[#1F1D1D]">
                {result?.date}
              </div>
            </div>

            {/*  Score */}
            <div className="flex flex-col gap-2 w-1/2">
              <div className="font-medium text-[12px] leading-[18px]  text-[#717171]">
                Original Score
              </div>
              <div className="border border-[#D1D5DB] font-[400] rounded-[4px] px-3 py-3 text-[16px] leading-[24px] text-[#1F1D1D]">
                {result?.score}
              </div>
            </div>
          </div>
        </div>

        {/*  Recheck */}
        <div className="flex flex-col gap-2  h-[254px]">
          <div className="font-medium text-[12px] leading-[18px] ">
            Reason for Recheck *
          </div>
          <textarea
            placeholder="Please explain why you're requesting a recheck (max 250 characters)"
            maxLength={250}
            className="h-[204px] rounded-[8px] border border-[#717171] bg-[#F4F7FA] p-3 text-[16px] leading-[24px] text-[#717171] resize-none"
          ></textarea>
          <div className="text-[12px] leading-[16px] text-[#717171]">
            0 / 250 characters
          </div>
        </div>

        {/* upload  */}

        <div className="mb-6 w-full  mx-auto">
          <h3 className="text-[12px] font-[Inter] font-medium text-[#1F1D1D] mb-5  leading-[18px]">
            Supporting Documents (Optional)
          </h3>

          <div
            className={`relative rounded-lg p-8 text-center 
                          cursor-pointer
                      `}
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
              multiple
              onChange={handleFileSelect}
              className={`absolute inset-0 w-full h-full opacity-0 z-10
                           pointer-events-auto
                        `}
            />

            <Upload
              className={`w-[28px] h-[28px] 
                           text-[#04203E]
                        mx-auto mb-4`}
            />
            <p
              className={`text-[13.6px] mb-2 
                           text-[#04203E]
                        `}
            >
              Click to upload or drag and drop
            </p>
            <p
              className={`text-[10.2px] mb-4 
                           text-[#04203E]
                        `}
            >
              PDF, DOC, DOCX, ZIP (Max 10MB)
            </p>
          </div>

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

        {/* last recheck content  */}
        <div className="h-[43px] rounded-[12px] p-[12px] bg-[#CFDCEB]">
          <p className="text-[12px] leading-[18px] font-[Inter] text-[#1F1D1D]">
            <span className="font-bold">Recheck Fee:</span> A processing fee of
            $15 will be applied to your student account if the recheck request
            is approved.
          </p>
        </div>

        {/*  Button */}
        <div className="w-full flex gap-[24px] justify-end">
          <button
            onClick={() => navigate("/student/results")}
            className="w-[70px] h-[40px] rounded-[8px] border border-[#04203E] 
    text-[#04203E] font-[Inter] font-[400] text-[14px] leading-[24px] text-center"
          >
            Cancel
          </button>

          <button
            className="w-[129px] h-[40px] rounded-[8px] bg-[#04203E] 
    text-[#FAFCFD] font-[Inter] font-[400] text-[14px] leading-[24px] text-center"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recheck;
