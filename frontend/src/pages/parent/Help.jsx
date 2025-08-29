import React, { useState } from "react";
import { Paperclip, FileUp, X, FileText, Image, File } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";

function Help() {
  const [formData, setFormData] = useState({
    department: "",
    category: "",
    subject: "",
    description: "",
  });
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, files });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    e.target.value = null;
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) {
      return <Image className="w-5 h-5" />;
    } else if (file.type === "application/pdf") {
      return <FileText className="w-5 h-5" />;
    } else {
      return <File className="w-5 h-5" />;
    }
  };

  return (
    <div className="p-5">
      <div className="bg-[#0b2447] text-white font-[Merriweather] text-2xl px-6 py-3 rounded-xl shadow-md mb-6">
        Help and Support
      </div>

      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="p-8">
          <h1 className="text-2xl font-[Inter] text-[#1F1D1D] mb-8">
            Create a Request
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Send To and Category Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Department Dropdown */}
              <div>
                <label className="block text-sm font-[Inter] text-[#1F1D1D] mb-2">
                  Send To
                </label>
                <Dropdown
                  options={[
                    "Human Resources",
                    "IT Support",
                    "Finance",
                    "Operations",
                  ]}
                  selected={formData.department}
                  placeholder="Select Department"
                  onSelect={(val) => handleInputChange("department", val)}
                  className={"border-gray-400 rounded-sm"}
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-sm font-[Inter] text-[#1F1D1D] mb-2">
                  Category
                </label>
                <Dropdown
                  options={[
                    "Technical Issue",
                    "Administrative",
                    "Equipment Request",
                    "Access Request",
                  ]}
                  selected={formData.category}
                  placeholder="Select Category"
                  onSelect={(val) => handleInputChange("category", val)}
                  className={"border-gray-400 rounded-sm"}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-[Inter] text-[#1F1D1D] mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder="Brief summary of your request"
                className="w-full bg-[#F4F7FA] px-3 py-3 border border-gray-300 rounded-md text-[#717171] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-[Inter] text-[#1F1D1D] mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Please provide details about your request"
                rows="8"
                className="w-full px-3 bg-[#F4F7FA] py-3 border border-gray-300 rounded-md text-[#717171] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Attach Files */}
            <div>
              <input
                type="file"
                id="file-upload"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center cursor-pointer text-sm text-[#1F1D1D] font-[Inter] hover:text-gray-800 transition-colors rounded-md px-4 py-2 hover:bg-gray-50"
              >
                <Paperclip className="w-5 h-5 mr-2 text-black" />
                Attach Files
              </label>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    Attached Files:
                  </p>
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded-md p-3"
                    >
                      <div className="flex items-center">
                        {getFileIcon(file)}
                        <span className="ml-2 text-sm text-gray-700 truncate max-w-xs">
                          {file.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white text-sm font-medium rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 transition-colors"
              >
                <FileUp className="w-5 h-5 mr-2" />
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
