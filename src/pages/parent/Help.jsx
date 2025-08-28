import React, { useState } from 'react';


const Help = () => {
  const [formData, setFormData] = useState({
    department: '',
    category: '',
    subject: '',
    description: '',
    file: null,
  });

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
      <h1 className="text-2xl font-semibold text-white bg-[#04203E] px-6 py-3 rounded-md w-full mb-2">
          Help and Support
        </h1>
    
      <div className="rounded-md shadow overflow-hidden border border-gray-200">
        

      
        <div className="bg-white p-8 w-full">

          <h2 className="text-lg font-semibold text-[#04203E]   mb-2">Create a Request</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Send To</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="admin">Admin</option>
                  <option value="academics">Faculty</option>
                  <option value="finance">Parent</option>
                  <option value="finance">Student</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="fee">Fee Related</option>
                  <option value="performance">Performance</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Brief summary of your request"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Please provide details about your request"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                required
              />
            </div>

            <div className="flex items-center space-x-3">
              <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                <svg
                  className="w-5 h-5 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 9.828a4 4 0 00-5.656-5.656L7.05 9.172a6 6 0 108.486 8.486L21 12" />
                </svg>
                <span>Attach Files</span>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              {formData.file && (
                <span className="text-sm text-gray-500">{formData.file.name}</span>
              )}
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-[#04203E]   text-white px-6 py-2 rounded hover:bg-blue-800"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
