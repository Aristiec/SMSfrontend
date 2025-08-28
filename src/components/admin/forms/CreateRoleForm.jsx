import React, { useState } from 'react';

const CreateRoleForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    roleName: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.roleName.trim()) {
      newErrors.roleName = 'Role name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newRole = {
        ...formData,
        id: Date.now(), // Simple ID generation
        assignedUsers: 0 // New role starts with 0 users
      };
      onSubmit(newRole);
      setFormData({
        roleName: '',
        description: ''
      });
      setErrors({});
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-[12px] p-6 w-[520px] relative"
      onClick={(e) => e.stopPropagation()}
    >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[Inter] font-semibold text-[20px] leading-[24px] text-[#1F1D1D]">
            Create Role
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-[24px] leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Name */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Role Name
            </label>
            <input
              type="text"
              name="roleName"
              value={formData.roleName}
              onChange={handleInputChange}
              className={`w-full h-[48px] border rounded-[8px] px-3 py-2 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] ${
                errors.roleName ? 'border-red-500' : 'border-[#E5E5E5]'
              }`}
            />
            {errors.roleName && (
              <p className="text-red-500 text-[12px] mt-1">{errors.roleName}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={`w-full border rounded-[8px] px-3 py-2 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] resize-none ${
                errors.description ? 'border-red-500' : 'border-[#E5E5E5]'
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-[12px] mt-1">{errors.description}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#04203E] text-white px-6 py-3 rounded-[8px] font-[Inter] font-medium text-[14px] hover:bg-[#032A5A] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21V13H7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 3V8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Save
            </button>
          </div>
        </form>
      </div>
  );
};

export default CreateRoleForm;
