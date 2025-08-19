
import React, { useState, useEffect } from 'react';
import { X, Upload ,Save  } from 'lucide-react';
import Dropdown from '../utils/Dropdown';

function EditFaculty({ isOpen, onClose, facultyData, onUpdateFaculty }) {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    experience: '',
    qualifications: '',
    salary: '',
    joinDate: '',
    availability: '',
    courses: [],
    status: 'Active'
  });
  const [newCourse, setNewCourse] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  useEffect(() => {
    if (facultyData) {
      setFormData({
        ...facultyData,
        courses: Array.isArray(facultyData.courses) ? facultyData.courses : [],
        joinDate: facultyData.joinDateRaw || '',
      });
      setProfilePhoto(facultyData.profilePhoto || null);
    }
  }, [facultyData]);

  const positionOptions = [
    'Assistant Professor',
    'Associate Professor',
    'Professor',
    'Lecturer',
    'Senior Lecturer'
  ];

  const departmentOptions = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Engineering',
    'Business Administration',
    'English',
    'History',
    'Economics'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddCourse = () => {
    if (newCourse.trim()) {
      setFormData(prev => ({
        ...prev,
        courses: [...prev.courses, newCourse.trim()]
      }));
      setNewCourse('');
    }
  };

  const handleRemoveCourse = (index) => {
    setFormData(prev => ({
      ...prev,
      courses: prev.courses.filter((_, i) => i !== index)
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFaculty = {
      ...formData,
      id: facultyData?.id, // Ensure id is preserved for update
      profilePhoto,
      joinDate: formData.joinDate,
      joinDateRaw: formData.joinDate, // Keep raw date for future edits
    };
    if (onUpdateFaculty) {
      onUpdateFaculty(updatedFaculty);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="w-[800px] max-w-[90vw] bg-white rounded-[12px] p-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[24px] font-semibold text-[#1F1D1D]">Edit Faculty</h2>
        <button onClick={onClose} className="text-[#717171] hover:text-[#1F1D1D] text-[24px]">
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row - Profile Photo, Name/Email, Faculty ID/Phone */}
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <label className="block text-[12px] text-[#717171] mb-2 self-start">Profile Photo</label>
            <div 
              className="w-[120px] h-[120px] rounded-full border-2 border-dashed border-[#71717166] flex items-center justify-center bg-[#E9EEF4] overflow-hidden relative cursor-pointer hover:bg-[#dde5ed] transition-colors"
              style={{ 
                borderStyle: 'dashed', 
                borderWidth: '2px',
                strokeDasharray: '2,2'
              }}
              onClick={() => document.getElementById('editPhotoUpload').click()}
            >
              {profilePhoto ? (
                <img 
                  src={profilePhoto} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <Upload className="w-8 h-8 text-[#717171]" />
              )}
            </div>
            <input
              type="file"
              id="editPhotoUpload"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => document.getElementById('editPhotoUpload').click()}
              className="mt-2 px-4 py-2 bg-[#E9EEF4] text-[#0077FF] rounded-[8px] text-[12px] font-medium "
              style={{
                gap: '10px',
                paddingTop: '8px',
                paddingRight: '16px',
                paddingBottom: '8px',
                paddingLeft: '16px',
                borderRadius: '8px'
              }}
            >
              Upload Photo
            </button>
          </div>

          {/* Full Name and Email Column */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="abc.123@university.edu"
                className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
                required
              />
            </div>
          </div>

          {/* Faculty ID and Phone Column */}
          <div className="space-y-4">
            {/* Faculty ID */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">Faculty ID</label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
                placeholder="ID"
                className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 9999999999"
                className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
                required
              />
            </div>
          </div>
        </div>

        {/* Second Row - Position, Department */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Position*</label>
            <Dropdown
              options={positionOptions}
              selected={formData.position}
              onSelect={(option) => setFormData({...formData, position: option})}
              placeholder="Select Position"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#0077FF]"
            />
          </div>
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Department*</label>
            <Dropdown
              options={departmentOptions}
              selected={formData.department}
              onSelect={(option) => setFormData({...formData, department: option})}
              placeholder="Select Department"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#0077FF]"
            />
          </div>
        </div>

        {/* Third Row - Experience, Qualification */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="10"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Qualification</label>
            <input
              type="text"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleInputChange}
              placeholder="Ph.D. in Computer Science"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
        </div>

        {/* Fourth Row - Salary, Joining Date */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="₹100000"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Joining Date</label>
            <input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleInputChange}
              placeholder="2025-08-01"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
        </div>

        {/* Fifth Row - Status, Availability */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Status</label>
            <Dropdown
              options={['Active', 'Inactive']}
              selected={formData.status}
              onSelect={(option) => setFormData({...formData, status: option})}
              placeholder="Select Status"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#0077FF]"
            />
          </div>
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">Availability</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              placeholder="Mon - Wed - Fri 10:00 AM - 04:00 PM"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
        </div>

        {/* Assigned Courses Section */}
        <div>
          <label className="block text-[12px] text-[#717171] mb-2">Assigned Courses</label>
          {/* Course Input with Add Button */}
          <div className="flex mb-4">
            <input
              type="text"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              placeholder="Calculus, Linear Algebra, Discrete Mathematics"
              className="flex-1 border border-[#71717166] rounded-l-[8px] rounded-r-none border-r-0 px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF] focus:z-10"
            />
            <button
              type="button"
              onClick={handleAddCourse}
              className="px-6 py-2 bg-[#0077FF] text-white rounded-r-[8px] rounded-l-none border border-[#0077FF] border-l-0 text-[14px] font-medium hover:bg-[#0066CC] transition-colors"
            >
              Add
            </button>
          </div>
          {/* Course Tags */}
          {formData.courses.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {formData.courses.map((course, index) => (
                <div key={index} className="bg-[#E9EEF4] text-[#1F1D1D] px-3 py-2 rounded-[6px] flex items-center gap-2">
                  <span className="text-[12px] font-medium">{course}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveCourse(index)}
                    className="text-[#717171] hover:text-[#EF4444] text-[14px]"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
         
          <button
            type="submit"
            className="px-4 py-3 bg-[#04203E] text-white rounded-[8px] text-[14px] font-medium  flex items-center gap-2"
          ><Save className="w-4 h-4 " />
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditFaculty;
