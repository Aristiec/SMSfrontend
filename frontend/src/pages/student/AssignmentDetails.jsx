import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AssignmentCard from "../../components/student/assignments/AssignmentCard";
import UploadSection from "../../components/student/assignments/UploadSection";
import CommentSection from "../../components/student/assignments/CommentSection";
import SubmitButton from "../../components/student/assignments/SubmitButton";
import assignments from "../../data/mockAssignments.js";
import { ArrowLeft, Upload, File } from "lucide-react";
import { motion } from "motion/react";

const AssignmentDetails = () => {
  const { id } = useParams();
  const [assignment, setAssignment] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = assignments.find((a) => a.id === id);
    setAssignment(found);
  }, [id]);

  if (!assignment) {
    return (
      <div className="text-red-600 text-center mt-10">Assignment not found</div>
    );
  }

  const isOverdue = assignment.status === "overdue";
  const isPending = assignment.status === "pending";
  const isSubmitted = assignment.status === "submitted";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4}}
      className="min-h-screen bg-[#E9EEF4] p-4 text-[Inter]"
    >
      <header className="bg-[#04203e] flex justify-between items-center rounded-[12px] w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">
          Assignments
        </h1>
      </header>
      <div className="bg-[#FAFCFD] mt-3 rounded-lg border-[#FAFCFD] mb-3">

        <div className="w-full  mx-auto px-4">
          <button
            onClick={() => navigate(-1)}
            className="text-[#04203E] font-[Inter] text-[14px] flex items-center gap-2  pt-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          {/* Assignment Card */}
          <AssignmentCard assignment={assignment} />

          {/* Upload Section */}
          <UploadSection
            assignment={assignment}
            disabled={isOverdue || isSubmitted}
            onFileUpload={(files) =>
              setAssignment({ ...assignment, uploadedFile: files })
            }
          />

          {/* Comment Section */}
          <div className="mt-2">
            {!isSubmitted && <CommentSection assignmentId={assignment.id} />}
          </div>

          {/* Submitted Section - Show uploaded files and Unsubmit Button */}
          {isSubmitted && (
            <div className="w-full  mx-auto px-3 ">
              {/* Uploaded Files Display */}
              <h2 className="text-[16px] font-medium text-[#1F1D1D] mb-4">
                Uploaded Files
              </h2>

              {/* Example PDFs with bg-[#CFDCEB] */}
              <div className="space-y-2">
                {assignment.files?.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#CFDCEB] p-3 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <File className="w-4 h-4 text-[#04203E]" />
                      <p className="text-sm text-[#04203E] font-[Inter] m-0">
                        {file}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Unsubmit Button with Icon */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    setAssignment({ ...assignment, status: "pending" });
                  }}
                  className="flex items-center gap-2 bg-[#04203E] text-white px-4 py-2 rounded hover:opacity-90 transition mb-3"
                >
                  <Upload className="w-4 h-4" />
                  Unsubmit
                </button>
              </div>
            </div>
          )}

          {/* Submit Button for Pending Assignments */}
          {(isPending || isOverdue) && (
            <div className="my-6  w-full  mx-auto px-4">
              <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between  gap-3">
                {/* Note for Overdue Assignments */}
                {isOverdue && (
                  <p className="text-sm text-[#1F1D1D] font-normal  w-full  ">
                    <strong>Note:</strong> Late submissions are not allowed.
                    Please contact your instructor for guidance.
                  </p>
                )}

                {/* Submit Button — always visible for both pending and overdue */}
                <div
                  className={`w-full flex justify-end ${
                    isPending ? "md:ml-auto text-right mb-3" : "text-left mb-3"
                  }`}
                >
                  <SubmitButton
                    disabled={isOverdue}
                    onSubmit={() => {
                      alert("Assignment submitted!");
                      setAssignment({ ...assignment, status: "submitted" });
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AssignmentDetails;
