import React, { useState } from "react";
import { X, Upload, Save } from "lucide-react";
import Dropdown from "../../utils/Dropdown";

function AddDriverForm({ onClose, onAddDriver }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    bloodGroup: "",
    experience: "",
    assignedVehicle: {
      id: "",
      type: "",
      route: "",
    },
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    // Create new vehicle object
    const newDriver = {
      id: formData.id,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      bloodGroup: formData.bloodGroup.trim(),
      experience: formData.experience.trim(),
      assignedVehicle: {
        id: "UP-32-4591",
        type: "Bus",
        route: "Route A",
      },
      profileImage: null,
    };

    console.log("Form submitted with driver:", newDriver);

    if (onAddDriver && typeof onAddDriver === "function") {
      onAddDriver(newDriver);
      console.log("Driver added successfully");
    } else {
      console.error("onAddDriver function not available or not a function");
    }

    onClose();
  };

  const [newCourse, setNewCourse] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const positionOptions = [
    "Assistant Professor",
    "Associate Professor",
    "Professor",
    "Lecturer",
    "Senior Lecturer",
  ];

  const departmentOptions = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Engineering",
    "Business Administration",
    "English",
    "History",
    "Economics",
  ];

  const handleAddCourse = () => {
    if (newCourse.trim()) {
      setFormData((prev) => ({
        ...prev,
        courses: [...prev.courses, newCourse.trim()],
      }));
      setNewCourse("");
    }
  };

  const handleRemoveCourse = (index) => {
    setFormData((prev) => ({
      ...prev,
      courses: prev.courses.filter((_, i) => i !== index),
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

  console.log("AddDriverForm: Rendering form with data", formData);
  return (
    <div
      className="w-[720px] max-w-[90vw] bg-[#FAFCFD] gap-2 flex flex-col relative shadow-lg overflow-y-auto"
      style={{
        borderRadius: "12px",
        padding: "24px",
        opacity: 1,
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[24px] font-semibold text-[#1F1D1D]">
          Add New Driver
        </h2>
        <button
          onClick={onClose}
          className="text-[#717171] hover:text-[#1F1D1D] text-[24px]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Row - Profile Photo, Name/Email, Faculty ID/Phone */}
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <label className="block text-[12px] text-[#717171] mb-2 self-start">
              Profile Photo
            </label>
            <div
              className="w-[120px] h-[120px] rounded-full border-2 border-dashed border-[#71717166] flex items-center justify-center bg-[#E9EEF4] overflow-hidden relative cursor-pointer hover:bg-[#dde5ed] transition-colors"
              style={{
                borderStyle: "dashed",
                borderWidth: "2px",
                strokeDasharray: "2,2",
              }}
              onClick={() => document.getElementById("photoUpload").click()}
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
              id="photoUpload"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => document.getElementById("photoUpload").click()}
              className="mt-2 px-4 py-2 bg-[#E9EEF4] text-[#0077FF] rounded-[8px] text-[12px] font-medium "
              style={{
                gap: "10px",
                paddingTop: "8px",
                paddingRight: "16px",
                paddingBottom: "8px",
                paddingLeft: "16px",
                borderRadius: "8px",
              }}
            >
              Upload Photo
            </button>
          </div>

          {/* Full Name and Email Column */}
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">
                Full Name*
              </label>
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
              <label className="block text-[12px] text-[#717171] mb-2">
                Email*
              </label>
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
            {/* Year of experience */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">
                Experience (Years)
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="10"
                className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
              />
            </div>
          </div>

          {/* Faculty ID and Phone Column */}
          <div className="space-y-4">
            {/* Faculty ID */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">
                Driver ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                placeholder="ID"
                className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
              />
            </div>
            {/* Phone */}
            <div>
              <label className="block text-[12px] text-[#717171] mb-2">
                Phone*
              </label>
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
        <h2 className="text-[#1F1D1D] ">Personal Details</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">
              Blood Group
            </label>
            <input
              type="text"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              placeholder="O+"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
        </div>

        {/* Third Row - Experience, Qualification */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">
              Licence Number
            </label>
            <input
              type="text"
              name="licenceNumber"
              value={formData.licenceNumber}
              onChange={handleInputChange}
              placeholder="10"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">
              Licence Expiry Date
            </label>
            <input
              type="date"
              name="licenceExpiry"
              value={formData.licenceExpiry}
              onChange={handleInputChange}
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
        </div>

        {/* Fourth Row - Salary, Joining Date */}
        {/* Emergency contact */}

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] text-[#717171] mb-2">
              Emergency Contact
            </label>
            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              placeholder="+91 9999999999"
              className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
        </div>

        {/* Assigned Courses Section */}
        <h2>Vehicle Assign</h2>
        <div>
          <label className="block text-[12px] text-[#717171] mb-2">
            Assign Vehicle
          </label>

          {/* Vehicle  Input */}
          <input
            type="text"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleInputChange}
            placeholder="Vehicle Name or ID"
            className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter] font-normal placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-4 py-3 bg-[#04203E] text-white rounded-[8px] text-[14px] font-medium  flex items-center gap-2"
          >
            <Save className="w-4 h-4 " />
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDriverForm;
