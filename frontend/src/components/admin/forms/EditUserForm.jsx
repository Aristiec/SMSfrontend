import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const EditUserForm = ({ isOpen, onClose, onSubmit, user }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    mobile: '',
    password: '',
    roles: []
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        username: user.username || '',
        mobile: user.mobile || '',
        password: '************', // Masked password
        roles: user.roles || []
      });
    }
  }, [user]);

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

  const handleRoleChange = (role) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    }
    
    if (formData.roles.length === 0) {
      newErrors.roles = 'At least one role must be selected';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const updatedUser = {
        ...user,
        ...formData,
        // Don't update password if it's still masked
        ...(formData.password === '************' ? {} : { password: formData.password })
      };
      onSubmit(updatedUser);
      setErrors({});
      onClose();
    }
  };

  const handleManageRoles = () => {
    // This would typically open a role management modal
    console.log('Manage Roles clicked');
  };

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-[12px] p-6 w-[620px]  overflow-y-auto relative "
      onClick={(e) => e.stopPropagation()}
    >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[Inter] font-semibold text-[20px] leading-[24px] text-[#1F1D1D]">
            Edit User
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-[24px] leading-none"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full h-[48px] border rounded-[8px] px-3 py-2 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] ${
                errors.name ? 'border-red-500' : 'border-[#E5E5E5]'
              }`}
              placeholder="Enter full name"
            />
            {errors.name && (
              <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full h-[48px] border rounded-[8px] px-3 py-2 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] ${
                errors.email ? 'border-red-500' : 'border-[#E5E5E5]'
              }`}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
            )}
          </div>

          {/* Username */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`w-full h-[48px] border rounded-[8px] px-3 py-2 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] ${
                errors.username ? 'border-red-500' : 'border-[#E5E5E5]'
              }`}
              placeholder="Enter username"
            />
            {errors.username && (
              <p className="text-red-500 text-[12px] mt-1">{errors.username}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className={`w-full h-[48px] border rounded-[8px] px-3 py-2 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] ${
                errors.mobile ? 'border-red-500' : 'border-[#E5E5E5]'
              }`}
              placeholder="Enter mobile number"
            />
            {errors.mobile && (
              <p className="text-red-500 text-[12px] mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full h-[48px] border rounded-[8px] px-3 py-2 pr-12 font-[Inter] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#04203E] ${
                  errors.password ? 'border-red-500' : 'border-[#E5E5E5]'
                }`}
                placeholder="Enter new password (leave as is to keep current)"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-[12px] mt-1">{errors.password}</p>
            )}
          </div>

          {/* Roles */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#717171]">
                Roles
              </label>
              <button
                type="button"
                onClick={handleManageRoles}
                className="flex items-center gap-1 text-[#0077FF] font-[Inter] font-medium text-[14px] hover:underline"
              >
                <span className="text-[16px]">+</span>
                Manage Roles
              </button>
            </div>
            
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.roles.includes('STUDENT')}
                  onChange={() => handleRoleChange('STUDENT')}
                  className="w-4 h-4 text-[#04203E] border-gray-300 rounded focus:ring-[#04203E]"
                />
                <span className="font-[Inter] text-[14px] text-[#1F1D1D]">STUDENT</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.roles.includes('FACULTY')}
                  onChange={() => handleRoleChange('FACULTY')}
                  className="w-4 h-4 text-[#04203E] border-gray-300 rounded focus:ring-[#04203E]"
                />
                <span className="font-[Inter] text-[14px] text-[#1F1D1D]">FACULTY</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.roles.includes('ADMIN')}
                  onChange={() => handleRoleChange('ADMIN')}
                  className="w-4 h-4 text-[#04203E] border-gray-300 rounded focus:ring-[#04203E]"
                />
                <span className="font-[Inter] text-[14px] text-[#1F1D1D]">ADMIN</span>
              </label>
            </div>
            
            {errors.roles && (
              <p className="text-red-500 text-[12px] mt-1">{errors.roles}</p>
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

export default EditUserForm;
