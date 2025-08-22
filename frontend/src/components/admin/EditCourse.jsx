import React, { useState, useEffect } from "react";
import { X, Save } from "lucide-react";
import Dropdown from "../utils/Dropdown";

function EditCourse({ isOpen, onClose, onEditCourse, courseData }) {
  const [formData, setFormData] = useState({
    courseName: "",
    courseCode: "",
    duration: 1,
    totalFees: "",
    description: "",
    semesterSystem: true,
    activeStatus: true,
  });

  // Populate form data when courseData changes
  useEffect(() => {
    if (courseData) {
      setFormData({
        courseName: courseData.courseName || "",
        courseCode: courseData.courseCode || "",
        duration: parseInt(courseData.duration) || 1,
        totalFees: courseData.totalFees
          ? courseData.totalFees.replace(/[₹,\s]/g, "")
          : "",
        description: courseData.description || "",
        semesterSystem: courseData.system === "Semester",
        activeStatus: courseData.status === "Active",
      });
    }
  }, [courseData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleDurationChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      duration: Math.max(1, Math.min(6, prev.duration + increment)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create updated course object
    const updatedCourse = {
      ...courseData, // Keep the original ID and other properties
      courseName: formData.courseName,
      courseCode: formData.courseCode,
      duration: `${formData.duration} years`,
      totalFees: `₹ ${parseInt(formData.totalFees).toLocaleString()}`,
      system: formData.semesterSystem ? "Semester" : "Annual",
      status: formData.activeStatus ? "Active" : "Inactive",
    };

    // Pass the updated course to parent component
    if (onEditCourse) {
      onEditCourse(updatedCourse);
    }

    console.log("Course edited:", updatedCourse);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="w-[680px] max-w-[90vw] h-auto rounded-[8px] bg-[#FFFFFF] p-[32px] max-sm:p-[20px] gap-[10px] flex flex-col relative shadow-lg overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 max-sm:top-4 max-sm:right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>

      <div className="w-full flex flex-col gap-[24px]">
        <h2 className="font-[Inter] font-semibold text-[20px] text-[#1F1D1D]">
          Edit Course
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Course Name */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">
              Course Name
            </label>
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleInputChange}
              placeholder="e.g. Bachelor of Computer Applications"
              className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
              required
            />
          </div>

          {/* Course Code */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">
              Course Code
            </label>
            <input
              type="text"
              name="courseCode"
              value={formData.courseCode}
              onChange={handleInputChange}
              placeholder="e.g. BCA"
              className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
              required
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">
              Duration (Years)
            </label>
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => handleDurationChange(-1)}
                  className="w-[40px] h-[48px] bg-[#E5E5E5] border border-[#E5E5E5] rounded-l-[8px] flex items-center justify-center text-[#717171] hover:bg-[#D1D5DB] transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      duration: Math.max(
                        1,
                        Math.min(6, parseInt(e.target.value) || 1)
                      ),
                    })
                  }
                  min="1"
                  max="6"
                  className="w-[60px] h-[48px] border-t border-b border-[#E5E5E5] text-center text-[14px] text-[#1F1D1D] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleDurationChange(1)}
                  className="w-[40px] h-[48px] bg-[#E5E5E5] border border-[#E5E5E5] rounded-r-[8px] flex items-center justify-center text-[#717171] hover:bg-[#D1D5DB] transition-colors"
                >
                  +
                </button>
              </div>
              <span className="font-[Inter] text-[14px] text-[#717171]">
                Only whole years
              </span>
            </div>
          </div>

          {/* Total Fees */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">
              Total Fees (₹)
            </label>
            <input
              type="number"
              name="totalFees"
              value={formData.totalFees}
              onChange={handleInputChange}
              placeholder="₹0"
              className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of the course..."
              rows="4"
              className="w-full rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e] resize-none"
            />
          </div>

          {/* Semester System Toggle */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] font-semibold text-[14px] leading-[20px] tracking-normal text-[#1F1D1D]">
              Semester System
            </label>
            <div className="flex items-center justify-between">
              <span className="font-[Inter] text-[14px] text-[#717171]">
                Enable if course follows semester pattern
              </span>
              <button
                type="button"
                onClick={() => handleToggle("semesterSystem")}
                className={`relative w-[48px] h-[24px] rounded-full transition-colors ${
                  formData.semesterSystem ? "bg-[#04203e]" : "bg-[#E5E5E5]"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform ${
                    formData.semesterSystem
                      ? "translate-x-[26px]"
                      : "translate-x-[2px]"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Active Status Toggle */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] font-semibold text-[14px] leading-[20px] tracking-normal text-[#1F1D1D]">
              Active Status
            </label>
            <div className="flex items-center justify-between">
              <span className="font-[Inter] text-[14px] text-[#717171]">
                Inactive courses won't appear in student registration
              </span>
              <button
                type="button"
                onClick={() => handleToggle("activeStatus")}
                className={`relative w-[48px] h-[24px] rounded-full transition-colors ${
                  formData.activeStatus ? "bg-[#04203e]" : "bg-[#E5E5E5]"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform ${
                    formData.activeStatus
                      ? "translate-x-[26px]"
                      : "translate-x-[2px]"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-auto px-6 h-[40px] rounded-[8px] bg-[#04203E] text-white font-medium text-[14px] hover:bg-[#052a4d] transition-all flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Update</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCourse;
