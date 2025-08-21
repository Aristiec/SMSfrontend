import React, { useState } from 'react';
import { X, Save } from 'lucide-react';
import Dropdown from './Dropdown';

function AddVehicleForm({ onClose, onAddVehicle }) {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    vehicleType: 'Bus',
    capacity: '',
    assignRoute: 'Route A'
  });

  const vehicleTypeOptions = ['Bus', 'Van', 'Mini Bus'];
  const routeOptions = ['Route A', 'Route B', 'Route C'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.vehicleNumber.trim() || !formData.capacity.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create new vehicle object
    const newVehicle = {
      id: formData.vehicleNumber.trim(),
      type: formData.vehicleType,
      capacity: `0/${formData.capacity} Students`,
      capacityValue: 0,
      assignedRoute: formData.assignRoute,
      isAtCapacity: false
    };
    
    console.log('Form submitted with vehicle:', newVehicle);
    console.log('onAddVehicle function:', onAddVehicle);
    
    // Pass the new vehicle to parent component if handler exists
    if (onAddVehicle && typeof onAddVehicle === 'function') {
      onAddVehicle(newVehicle);
      console.log('Vehicle added successfully');
    } else {
      console.error('onAddVehicle function not available or not a function');
    }
    
    // Reset form
    setFormData({
      vehicleNumber: '',
      vehicleType: 'Bus',
      capacity: '',
      assignRoute: 'Route A'
    });
    
    onClose();
  };

  // Prevent form from closing when clicking inside the form
  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="w-[720px] max-w-[90vw] bg-[#FAFCFD] gap-10 flex flex-col relative shadow-lg overflow-y-auto"
      style={{
        borderRadius: "12px",
        padding: "24px",
        opacity: 1
      }}
      onClick={handleFormClick} // Prevent event bubbling
    >
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }} 
        className="absolute top-6 right-6 max-sm:top-4 max-sm:right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>

      <div className="w-full flex flex-col gap-[24px]">
        <h2 className="font-[Inter] font-semibold text-[20px] text-[#1F1D1D]">Add New Vehicle</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Vehicle Number */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleInputChange}
              placeholder="e.g. UP-32-4591"
              className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
              onClick={handleFormClick} // Prevent event bubbling
              required
            />
          </div>

          {/* Vehicle Type */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">Vehicle Type</label>
            <Dropdown
              options={vehicleTypeOptions}
              selected={formData.vehicleType}
              onSelect={(option) => setFormData(prev => ({ ...prev, vehicleType: option }))}
              placeholder="Select Vehicle Type"
              className="w-full border border-[#E5E5E5] rounded-[8px] px-3 py-3 text-[14px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#04203e]"
            />
          </div>

          {/* Capacity */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">Capacity</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleInputChange}
              placeholder="40"
              min="1"
              max="100"
              className="w-full h-[48px] rounded-[8px] border border-[#E5E5E5] px-[16px] py-[12px] text-[14px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
              onClick={handleFormClick} // Prevent event bubbling
              required
            />
          </div>

          {/* Assign Route */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">Assign Route</label>
            <Dropdown
              options={routeOptions}
              selected={formData.assignRoute}
              onSelect={(option) => setFormData(prev => ({ ...prev, assignRoute: option }))}
              placeholder="Select Route"
              className="w-full border border-[#E5E5E5] rounded-[8px] px-3 py-3 text-[14px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#04203e]"
            />
          </div>

          {/* Upload PVC and RC Documents */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-[Inter] text-[14px] text-[#717171]">Upload PVC and RC of Vehicle</label>
            <div className="flex justify-between items-center gap-4">
              <input
                type="file"
                id="vehicle-documents"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => {
                  // Handle file upload logic here
                  console.log('Files selected:', e.target.files);
                }}
              />
              <label
                htmlFor="vehicle-documents"
                className="w-auto px-6 h-[48px] rounded-[8px] border border-[#717171] text-[14px] text-[#717171] cursor-pointer hover:border-[#04203e] transition-colors flex items-center justify-center gap-2"
                onClick={handleFormClick}
              >
                Upload Documents
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-auto px-6 h-[48px] rounded-[8px] bg-[#04203E] text-white font-medium text-[14px] hover:bg-[#052a4d] transition-all flex items-center justify-center gap-2"
                onClick={handleFormClick}
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVehicleForm;