import React, { useState } from 'react';
import Dropdown from '../../components/utils/Dropdown';
import { FilePlus } from 'lucide-react';

const Help = () => {
  const [selectedStatus, setSelectedStatus] = useState("Select Department");
  const [selectedSystem, setSelectedSystem] = useState("Select Category");
  const [formData, setFormData] = useState({
    department: '',
    category: '',
    subject: '',
    description: '',
    file: null,
  });
  const statusOptions = ["Select Department", "Admin", "Faculty", "Parent", "Student"];

  const systemOptions = ["Select Category", "Semester", "Annual"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('✅ Request Submitted Successfully!');
    setFormData({
      department: '',
      category: '',
      subject: '',
      description: '',
      file: null,
    });
  };

  return (
    <div className="max-w-5x1 mt-0 mx-auto px-4 overflow-x-hidden">
      <h1 className="text-2xl font-semibold merriweather text-white bg-[#04203E] px-6 py-3 rounded-md w-full mb-2">
        Help and Support
      </h1>

      <div className="rounded-[8px] shadow overflow-hidden border-gray-200">



        <div className="bg-white p-8 w-full">

          <h2 className="text-[20px] text-lg font-medium inter text-black mb-6">Create a Request</h2>

          <form onSubmit={handleSubmit} className="space-y-6 inter">
            <div className="flex flex-row gap-24 items-center">
              {/* Status Dropdown */}
              <div className="w-full">
                <label className="block text-sm font-medium text-black mb-2">Send To</label>
                <Dropdown
                  options={statusOptions}
                  selected={selectedStatus}
                  onSelect={(option) => setSelectedStatus(option)}
                  placeholder="Select Department"
                  className=" font-[400] text-[16px] rounded-[4px] border-[#E5E5E5] px-[16px] py-[12px]"
                />
              </div>

              {/* System Dropdown */}
              <div className="w-full">
                <label className="block text-sm font-medium text-black mb-2">Category</label>
                <Dropdown
                  options={systemOptions}
                  selected={selectedSystem}
                  onSelect={(option) => setSelectedSystem(option)}
                  placeholder="Select Category"
                  className=" font-[400] text-[16px] rounded-[4px] border-[#E5E5E5] px-[16px] py-[12px]"
                />
              </div>
            </div>

            <div>
              <label className="block  text-sm font-medium text-black mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Brief summary of your request"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-[8px] px-3 py-2  bg-[#F7F9FC] focus:outline-none focus:ring-0 focus:border-gray-300"
                required
              />
            </div>

            {/* Description + Attach File in one div */}
            <div className="w-full">
              <label className="block text-sm text-black mb-2 font-semibold">
                Description
              </label>

              <textarea
                name="description"
                placeholder="Please provide details about your request"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-[8px] px-3 py-2  bg-[#F7F9FC] focus:outline-none focus:ring-0 focus:border-gray-300"
                required
              />

              <div className="flex items-center space-x-2 mt-0 pt-0">
                <label className="flex items-center text-sm text-black font-medium cursor-pointer">
                  <svg
                    className="w-[18px] h-[18px] mr-1 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 9.828a4 4 0 00-5.656-5.656L7.05 9.172a6 6 0 108.486 8.486L21 12" />
                  </svg>
                  Attach Files
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>

                {formData.file && (
                  <span className="font-medium text-[14px] text-black font-inter">{formData.file.name}</span>
                )}
              </div>
            </div>


            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#04203E] text-white px-2 py-1 rounded-[8px] cursor-pointer hover:bg-blue-800 transition"
              >
                <FilePlus className="w-4 h-4" />
                <span>Submit Request</span>
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
