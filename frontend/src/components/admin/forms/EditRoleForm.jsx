import React, { useState, useEffect } from 'react';

const EditRoleForm = ({ isOpen, onClose, onSubmit, role }) => {
  const [formData, setFormData] = useState({
    roleName: '',
    description: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (role) {
      setFormData({
        roleName: role.roleName || '',
        description: role.description || ''
      });
    }
  }, [role]);

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
      const updatedRole = {
        ...role,
        ...formData
      };
      onSubmit(updatedRole);
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
            Edit Role
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
              placeholder="Enter role name"
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
              placeholder="Enter role description"
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
                <path d="M4 13V16C4 17.1046 4.89543 18 6 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7L16 11L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Update
            </button>
          </div>
        </form>
      </div>
  );
};

export default EditRoleForm;
