import React, { useState } from "react";
import { ArrowLeft, Calendar, Upload, FileUp } from "lucide-react";
import CustomCalendar from "../utils/CustomCalendar";
import Dropdown from "../utils/Dropdown";
export default function CreateAssignmentForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "July 22, 2025",
    submissionMode: "Online",
    course: "",
    semester: "",
    subject: "",
    maxMarks: "",
    allowLateSubmission: false,
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Assignment created:", formData);
    // Handle form submission
  };

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <header className=" top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full max-w-7xl h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">
          Assignments
        </h1>
      </header>

      <div className="w-full max-w-7xl mx-auto bg-[#FAFCFD] rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-2 text-[#04203E]">
              <ArrowLeft size={18} />
              <span className="text-[14px] font-[Inter] text-[#04203E]">
                Back
              </span>
            </button>
          </div>
          <h1 className="text-[20px] font-[Inter] font-semibold text-[#1F1D1D]">
            Create Assignment
          </h1>
        </div>

        <div className="px-6 space-y-6">
          {/* Title */}
          <div className="w-[40%]">
            <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter assignment title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="w-full px-3 py-2 border font-[Inter] border-[#71717166] rounded-md"
            />
          </div>

          {/* Description - full width */}
          <div>
            <label className="block text-[14px] font-medium text-[#717171] mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter assignment description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-[#71717166] rounded-md resize-none"
            />
          </div>

          {/* Grid for 2-column pairs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Due Date */}
            <div>
              <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
                Due Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={formData.dueDate}
                  onClick={() => setShowCalendar(true)}
                  className="w-full px-3 py-2 border border-[#71717166] placeholder:text-[#1F1D1D] placeholder:font-[Inter] placehokder:text-[14px] rounded-md  pr-10 cursor-pointer"
                />
                <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-[#1F1D1D] pointer-events-none" />
              </div>

              {showCalendar && (
                <div className="absolute z-50 mt-2">
                  <CustomCalendar
                    setChooseDate={(date) => {
                      handleInputChange("dueDate", date);
                    }}
                    setShow={setShowCalendar}
                  />
                </div>
              )}
            </div>

            {/* Submission Mode */}
            <div>
              <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
                Submission Mode
              </label>
              <Dropdown
                options={["Online", "Offline"]}
                selected={formData.submissionMode}
                onSelect={(value) => handleInputChange("submissionMode", value)}
                placeholder="Select Submission Mode"
                className="border border-[#71717166] rounded-md"
              />
            </div>

            {/* Course */}
            <div>
              <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
                Course
              </label>
              <Dropdown
                options={[
                  "Computer Science",
                  "Mathematics",
                  "Physics",
                  "Chemistry",
                ]}
                selected={formData.course}
                onSelect={(value) => handleInputChange("course", value)}
                placeholder="Select Course"
                className="border border-[#71717166] rounded-md"
              />
            </div>

            {/* Semester */}
            <div>
              <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
                Semester
              </label>
              <Dropdown
                options={[
                  "Semester 1",
                  "Semester 2",
                  "Semester 3",
                  "Semester 4",
                  "Semester 5",
                  "Semester 6",
                  "Semester 7",
                  "Semester 8",
                ]}
                selected={formData.semester}
                onSelect={(value) => handleInputChange("semester", value)}
                placeholder="Select Semester"
                className="border border-[#71717166] rounded-md"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
                Subject
              </label>
              <Dropdown
                options={[
                  "Algorithms",
                  "Data Structures",
                  "Web Development",
                  "Database Systems",
                ]}
                selected={formData.subject}
                onSelect={(value) => handleInputChange("subject", value)}
                placeholder="Select Subject"
                className="border border-[#71717166] rounded-md"
              />
            </div>

            {/* Max Marks */}
            <div>
              <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
                Max Marks
              </label>
              <input
                type="number"
                placeholder="Enter maximum marks"
                value={formData.maxMarks}
                onChange={(e) => handleInputChange("maxMarks", e.target.value)}
                className="w-full px-3 py-2 border border-[#71717166] rounded-md "
              />
            </div>
          </div>

          {/* Allow Late Submission */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="allowLateSubmission"
              checked={formData.allowLateSubmission}
              onChange={(e) =>
                handleInputChange("allowLateSubmission", e.target.checked)
              }
              className="h-4 w-4 accent-[#04203E] border-[#04203E] rounded  bg-[#FAFCFD]"
            />
            <label
              htmlFor="allowLateSubmission"
              className="ml-2 text-[12px] font-[Inter] text[#1F1D1D] font-medium"
            >
              Allow Late Submission?
            </label>
          </div>

          {/* Upload Files - full width */}
          <div>
            <label className="block text-[14px] font-[Inter] font-medium text-[#717171] mb-2">
              Upload Files (optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
              <p className="text-gray-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                PDF, DOC, DOCX, ZIP (Max 10MB)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mb-3">
            <button
              type="button"
              className="px-6 py-2 border border-[#717171] rounded-md text-[#1F1D1D] text-[14px] font-[Inter]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 bg-[#04203E] text-[#FAFCFD] text-[14px] font-[Inter] rounded-md flex items-center gap-2"
            >
              <FileUp className="h-4 w-4" />
              Create Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
