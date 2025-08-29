import React, { useState, useRef, useEffect } from "react";
import { X, Upload, FileText, User, Car, Calendar } from "lucide-react";
import Dropdown from "../../utils/Dropdown";
import CustomCalendar from "../../../utils/CustomCalendar";

const AddDocumentForm = ({ onClose, onAddDocument }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "driver", // driver or vehicle
    category: "",
    vehicleNumber: "",
    expiryDate: "",
    file: null
  });

  const [dragActive, setDragActive] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const driverCategories = [
    "License",
    "Medical Certificate",
    "Background Check",
    "Training Certificate",
    "Identity Proof"
  ];

  const vehicleCategories = [
    "Registration",
    "Insurance",
    "Fitness Certificate",
    "Pollution Certificate",
    "Route Permit"
  ];

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        file: file
      }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.dataTransfer.files[0]
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check required fields - vehicle number is now required for both types
    const requiredFieldsValid = formData.name && formData.category && formData.expiryDate && formData.file && formData.vehicleNumber;
    
    if (!requiredFieldsValid) {
      alert('Please fill in all required fields and upload a file (including vehicle number)');
      return;
    }

    const newDocument = {
      name: formData.name,
      type: formData.type,
      category: formData.category,
      vehicleNumber: formData.vehicleNumber,
      uploadDate: new Date().toISOString().split('T')[0],
      expiryDate: formData.expiryDate,
      status: "Active",
      fileSize: `${(formData.file.size / (1024 * 1024)).toFixed(1)} MB`,
      format: formData.file.name.split('.').pop().toUpperCase()
    };

    onAddDocument(newDocument);
    onClose();
  };

  const getCurrentCategories = () => {
    return formData.type === "driver" ? driverCategories : vehicleCategories;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Add Document</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Document Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Document Type *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, type: "driver", category: "", vehicleNumber: "" }))}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-colors duration-200 ${
                formData.type === "driver"
                  ? "border-[#04203e] bg-[#04203e]/5 text-[#04203e]"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Driver</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, type: "vehicle", category: "", vehicleNumber: "" }))}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-colors duration-200 ${
                formData.type === "vehicle"
                  ? "border-[#04203e] bg-[#04203e]/5 text-[#04203e]"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <Car className="w-4 h-4" />
              <span className="text-sm font-medium">Vehicle</span>
            </button>
          </div>
        </div>

        {/* Document Name and Vehicle Number Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Document Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Driver License - John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vehicle Number *
            </label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              placeholder={formData.type === "driver" ? "e.g., MH12AB1234, DL01BC5678" : "e.g., MH12AB1234, DL01BC5678"}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300"
              required
            />
          </div>
        </div>

        {/* Category and Expiry Date Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <Dropdown
              options={getCurrentCategories()}
              selected={formData.category}
              onSelect={(option) => setFormData({ ...formData, category: option })}
              placeholder="Select category"
              className="border-0 border-gray-300 focus:border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expiry Date *
            </label>
            <div className="relative" ref={calendarRef}>
              <input
                type="text"
                value={formData.expiryDate}
                onClick={() => setShowCalendar(!showCalendar)}
                placeholder="Select expiry date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 cursor-pointer"
                readOnly
                required
              />
              <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
              
              {showCalendar && (
                <div className="absolute top-full left-0 z-50 mt-1">
                  <CustomCalendar 
                    setChooseDate={(date) => {
                      setFormData({ ...formData, expiryDate: date });
                      setShowCalendar(false);
                    }}
                    setShow={setShowCalendar}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Document *
          </label>
          <div
            className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
              dragActive
                ? "border-[#04203e] bg-[#04203e]/5"
                : formData.file
                ? "border-green-500 bg-green-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="space-y-2">
              {formData.file ? (
                <>
                  <FileText className="w-8 h-8 text-green-600 mx-auto" />
                  <p className="text-sm font-medium text-green-700">{formData.file.name}</p>
                  <p className="text-xs text-green-600">
                    {(formData.file.size / (1024 * 1024)).toFixed(1)} MB
                  </p>
                </>
              ) : (
                <>
                  <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-[#04203e]">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG (max 10MB)</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-[#04203e] text-white rounded-md hover:bg-[#04203e]/90 transition-colors duration-200"
          >
            Add Document
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDocumentForm;
